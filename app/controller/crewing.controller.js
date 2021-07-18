const crewing = require("../models/crewing.model.js");


  exports.getAll = (req, res) => {
    crewing.getAll((err, data) => {
      if (err) {
        res.status(404).send({
            message: `Not found crewings.`
          });
      } else res.send(data);
    });
  };

  exports.add = (req, res) => {
    const new_crewing = new crewing({
      nameVac: req.body.nameVac,
      count: req.body.count,
      text: req.body.text,
      sudno: req.body.sudno,
      date: req.body.date,
      price: req.body.price,
    });
  
    // Save Customer in the database
    crewing.create(new_crewing, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the crewing."
        });
      else res.send(data);
    });
    };


exports.delete = (req, res) => {
  crewing.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Customer with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Customer with id " + req.params.id
        });
      }
    } else res.send({ message: `Customer was deleted successfully!` });
  });
};

  // exports.getId = (req, res) => {
  //   article.getId(req.params.id, (err, data) => {
  //     if (err) {
  //       res.status(404).send({
  //           message: `Not found articles.`
  //         });
  //     } else res.send(data);
  //   });
  // };



  // exports.searchWithout = (req, res) => {
  //   article.searchWithout(req.params.title, req.params.author, (err, data) => {
  //     if (err) {
  //       res.status(404).send({
  //           message: `Not found articles.`
  //         });
  //     } else res.send(data);
  //   });
  // };



  // exports.searchWith = (req, res) => {
  //   article.searchWith(req.params.title, req.params.author, (err, data) => {
  //     if (err) {
  //       res.status(404).send({
  //           message: `Not found articles.`
  //         });
  //     } else res.send(data);
  //   });
  // };

  // exports.searchWithPop = (req, res) => {
  //   article.searchWithPop(req.params.title, req.params.author, (err, data) => {
  //     if (err) {
  //       res.status(404).send({
  //           message: `Not found articles.`
  //         });
  //     } else res.send(data);
  //   });
  // };