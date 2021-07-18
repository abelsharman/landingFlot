const sql = require("./db.js");

// constructor
const article = function(article) {
    this.id = article.id;
    this.nameVac = article.nameVac;
    this.count = article.count;
    this.text = article.text;
    this.sudno = article.sudno;
    this.date = article.date;
    this.price = article.price;
  };

article.getAll = (result) => {
    sql.query(`select * from crewing_vac;`, (err, res) => {
  
      if (res.length) {
        console.log("found article: ", res);
        result(null, res);
        return;
      }
      result(null, res); return;
  
  
    });
};


article.add = (nameVac, count, text, sudno, date, price) => {
    sql.query(`insert into crewing_vac(nameVac, count, text, sudno, date, price) values('${nameVac}', '${count}', '${text}', '${sudno}', '${date}', '${price}');`, (err, res) => {
      if (res.length) {
        console.log("add crewing: ", res);
        result(null, res);
        return;
      }
      result(null, res); return;
  
  
    });
  };

article.create = (new_crewing, result) => {
  sql.query("INSERT INTO crewing_vac SET ?", new_crewing, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created customer: ", { id: res.id, ...new_crewing });
    result(null, { id: res.id, ...new_crewing });
  });
};


article.remove = (id, result) => {
  sql.query("DELETE FROM crewing_vac WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Customer with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted customer with id: ", id);
    result(null, res);
  });
};
// article.getId = (id, result) => {
//   sql.query(`select * from article where id = ${id};`, (err, res) => {

//     if (res.length) {
//       console.log("found article: ", res);
//       result(null, res);
//       return;
//     }
//     result(null, res); return;


//   });
// };

// article.searchWithout = (title, author, result) => {
//   sql.query(`select * from article where title like '%${title}%' and author like '%${author}%' limit 100;`, (err, res) => {

//     if (res.length) {
//       console.log("found article: ", res);
//       result(null, res);
//       return;
//     }
//     result(null, res); return;


//   });
// };


// article.searchWith = (title, author, result) => {
//   sql.query(`select * from article where title like '%${title}%' and author like '%${author}%' order by year limit 100;`, (err, res) => {

//     if (res.length) {
//       console.log("found article: ", res);
//       result(null, res);
//       return;
//     }
//     result(null, res); return;


//   });
// };

// article.searchWithPop = (title, author, result) => {
//   sql.query(`select * from article where title like '%${title}%' and author like '%${author}%' order by year asc limit 100;`, (err, res) => {

//     if (res.length) {
//       console.log("found article: ", res);
//       result(null, res);
//       return;
//     }
//     result(null, res); return;


//   });
// };



module.exports = article;