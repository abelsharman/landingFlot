const express = require("express");
const bodyParser = require("body-parser");
const mailer = require('express-mailer');
const fileUpload = require('express-fileupload');
var cors = require('cors')
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
const crewing = require("./app/controller/crewing.controller.js");
const crewing_model = require("./app/models/crewing.model.js");
const fs = require('fs');


const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));


app.use(fileUpload());

const path = __dirname + '/app/views/';

app.use(express.static(path));

var corsOptions = {
    origin: '*',
}

app.get("/", (req, res) => {    
    res.sendFile(path + "index.html");
});

app.get("/vacancies", (req, res) => {    
    res.sendFile(path + "index.html");
});

app.get("/suda", (req, res) => {    
    res.sendFile(path + "index.html");
});

app.get("/modify", (req, res) => {    
    res.sendFile(path + "index.html");
});



const transporter = nodemailer.createTransport("SMTP", {
    port: 587,
    secure: false,               
    host: "smtp.gmail.com",
       auth: {
            user: 'abelsharman85@gmail.com',
            pass: 'cvbn7456kjh',
        }
});

require("./app/routes/routes.js")(app);

app.post("/send", cors(corsOptions), function(req,res){
    var phone = req.query.phone,
        name = req.query.name,
        example = req.query.example;

    const mailData = {
        from: 'abelsharman85@gmail.com', 
        to: 'office@crewing.kz',    //contract.mpcllp@gmail.com  //office@crewing.kz
        subject: 'Новый запрос на ваш сайт',
        text: 'АА',
        html: `<b>Здравствуйте! </b><br> Пользователь с именем ${name} и с номером телефона ${phone} оставил запрос на вашем сайте!<br/>`,
    };
    if(example && example.length){
        mailData.html = `<b>Здравствуйте! </b><br> Пользователь с именем ${name} и с номером телефона ${phone} оставил запрос на позицию ${example} на вашем сайте!<br/>`
    }
    transporter.sendMail(mailData, function (err, info) {
        if(err){
            console.log(err)
            res.send(err)
        }
        else{
          console.log(info);
          res.send(info)
        }
    });
});




app.post('/upload', cors(corsOptions), function(req, res) {
    if (!req.files) {
        return res.status(500).send({ msg: "file is not found" })
    }
    const myFile = req.files.file;
    myFile.mv(`${__dirname}/app/views/public/${myFile.name}`, function (err) {
        if (err) {
            console.log(err)
            return res.status(500).send({ msg: "Error occured" });
        }
    });
    var mailData = {
        from: 'abelsharman85@gmail.com', 
        to: 'office@crewing.kz',    //contract.mpcllp@gmail.com
        subject: 'Новый запрос на ваш сайт',
        text: 'AA',
        html: fs.createReadStream(`${__dirname}/app/views/public/${myFile.name}`),
        // attachments: [{  
        //     path: `https://go2trip.kz/robots.txt`
        // }]
    };
    setTimeout(()=>{
        transporter.sendMail(mailData, function (err, info) {
            if(err){
                console.log(err)
                res.send(err)
            }
            else{
              console.log(info);
              res.send(info)
            }
        });
    }, 1000)
    


})


app.use(cors())

app.post("/addCrewing", function(req, res) {
    res.header('Access-Control-Allow-Origin', '*')

    const new_crewing = new crewing_model({
      nameVac: req.body.nameVac,
      count: req.body.count,
      text: req.body.text,
      sudno: req.body.sudno,
      date: req.body.date,
      price: req.body.price,
    });
  
    crewing_model.create(new_crewing, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the crewing."
        });
      else res.send(data);
    });
});




app.listen(9101, () => {
  console.log("Server is running on port 9000.");
});