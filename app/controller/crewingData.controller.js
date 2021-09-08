const crewing = require("../models/crewingData.model.js");


  exports.getAll = (req, res) => {
    crewing.getAll((err, data) => {
      if (err) {
        res.status(404).send({
            message: `Not found crewings.`
          });
      } else res.send(data);
    });
  };

  exports.changeAll = (req, res) => {
    crewing.changeAll(
        req.body.phone, req.body.about_1, req.body.about_2, req.body.about_3, req.body.about_4,
        req.body.education_1, req.body.education_2, req.body.count_type, req.body.people_count, req.body.nav_to_sudna,
        (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the crewing."
        });
      else res.send(data);
    });
    };


// exports.delete = (req, res) => {
//   crewing.remove(req.params.id, (err, data) => {
//     if (err) {
//       if (err.kind === "not_found") {
//         res.status(404).send({
//           message: `Not found Customer with id ${req.params.id}.`
//         });
//       } else {
//         res.status(500).send({
//           message: "Could not delete Customer with id " + req.params.id
//         });
//       }
//     } else res.send({ message: `Customer was deleted successfully!` });
//   });
// };

 