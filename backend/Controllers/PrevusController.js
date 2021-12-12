// const Prevus = require("../Controllers/Prevus");
// const Prevus = require("../models/Prevus");

// module.exports = {
//   index: (req, res) => {
//     Prevus.find({})
//       .then((Prevuss) => {
//         res.json(Prevuss);
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   },
//   show: (res, req) => {
//     let PrevusId = req.params.pid;
//     Prevus.findById(PrevusId)
//       .then((Prevus) => {
//         res.json({ Prevus });
//       })
//       .catch((err) => {
//         res.json({ err });
//       });
//   },
//   update: (req, res) => {
//     let PrevusId = req.params.pid;
//     let PrevusInfo = {
//       name: req.body.name,
//       age: req.body.age,
//       email: req.body.email,
//     };
//     Prevus.findByIdAndUpdate(PrevusId, { $set: PrevusInfo })
//       .then((Prevus) => {
//         res.json({ message: "Prevus informations has been" });
//       })
//       .catch((err) => {
//         res.json({ message: "error" });
//       });
//   },
//   delete: (req, res) => {
//     let PrevusId = req.params.pid;
//     Prevus.findByIdAndRemove(PrevusId)
//       .then((Prevus) => {
//         res.json({ message: "Prevus is deleted successfully" });
//       })
//       .catch((err) => {
//         res.json({ message: "error" });
//       });
//   },
//   create: (req, res) => {
//     let newPrevus = new Prevus({
//       name: req.body.name,
//       age: req.body.age,
//       email: req.body.email,
//     });
//     Prevus.regesture(newPrevus, req.body.password, (error, Prevus) => {
//       if (Prevus) {
//         res.json({ message: "Prevus inserted" });
//       } else {
//         res.json({ message: "Prevus not found" });
//       }
//     });
//     post.save(() => {
//       if (error) {
//         res.json(error);
//       } else {
//         res.json({ message: "Prevus inserted" });
//       }
//     });
//     // authenticate: (req, res) => {
//     //   pass.authenticate("local", (error, Prevus) => {});
//     // };
//   },
// };
