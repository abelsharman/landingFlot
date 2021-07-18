var cors = require('cors')
var corsOptions = {
    origin: '*',
}

module.exports = app => {
    const crewing = require("../controller/crewing.controller.js");

    app.get("/crewings",cors(corsOptions), crewing.getAll);


    app.delete("/crewingsDelete/:id",cors(corsOptions), crewing.delete);

    // app.post("/add", cors(corsOptions), crewing.add);

    //app.put("/user/:login/:password", user.register); //api that register user with specific login and password(register page)

    //app.get("/user/:login/:password", user.login); //api that login/checks user forms input(login page)




    






  
};