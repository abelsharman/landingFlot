const sql = require("./db.js");

// constructor
const article = function(article) {
    this.id = article.id;
    this.phone = article.phone;
    this.about_1 = article.about_1;
    this.about_2 = article.about_2;
    this.about_3 = article.about_3;
    this.about_4 = article.about_4;
    this.education_1 = article.education_1;
    this.education_2 = article.education_2;
    this.count_type = article.count_type;
    this.people_count = article.people_count;
    this.nav_to_sudna = article.nav_to_sudna;
  };

article.getAll = (result) => {
    sql.query(`select * from crewing_data where id = 1;`, (err, res) => {
  
      if (res.length) {
        console.log("found article: ", res);
        result(null, res);
        return;
      }
      result(null, res); return;
  
  
    });
};


article.changeAll = (phone, about_1, about_2, about_3, about_4, education_1, education_2, count_type, people_count, nav_to_sudna) => {
    sql.query(`update crewing_data set phone = '${phone}', about_1 = '${about_1}', about_2 = '${about_2}', about_3 = '${about_3}', about_4 = '${about_4}', education_1 = '${education_1}'
    , education_2 = '${education_2}', count_type = '${count_type}', people_count = '${people_count}', nav_to_sudna = '${nav_to_sudna}' where id = 1;`, (err, res) => {
      
        return res;
  
    });
  };

// article.create = (new_crewing, result) => {
//   sql.query("INSERT INTO crewing_vac SET ?", new_crewing, (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(err, null);
//       return;
//     }
//     console.log("created customer: ", { id: res.id, ...new_crewing });
//     result(null, { id: res.id, ...new_crewing });
//   });
// };


// article.remove = (id, result) => {
//   sql.query("DELETE FROM crewing_vac WHERE id = ?", id, (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//       return;
//     }

//     if (res.affectedRows == 0) {
//       // not found Customer with the id
//       result({ kind: "not_found" }, null);
//       return;
//     }

//     console.log("deleted customer with id: ", id);
//     result(null, res);
//   });
// };


module.exports = article;