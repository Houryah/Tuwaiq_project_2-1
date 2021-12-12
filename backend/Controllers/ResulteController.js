// const resulte = require("./Resulte");
// const resulte = require("../models/resulte");


// const index = (req,res)=>{
//   resulte
//       .find({})
//       .then((resultes) => {
//         res.json(resultes);
//       })
//       .catch((err) => {
//         console.error(err);
//       });
// }

// module.exports = {
//   index,
//   show: (res, req) => {
//     let resulteId = req.params.reid;
//     resulte
//       .findById(resulteId)
//       .then((resulte) => {
//         res.json({ resulte });
//       })
//       .catch((err) => {
//         res.json({ err });
//       });
//   },
//   update: (req, res) => {
//     let resulteId = req.params.reid;
//     let resulteInfo = {
//       name: req.body.name,
//       age: req.body.age,
//       email: req.body.email,
//     };
//     resulte
//       .findByIdAndUpdate(resulteId, { $set: resulteInfo })
//       .then((resulte) => {
//         res.json({ message: "resulte informations has been" });
//       })
//       .catch((err) => {
//         res.json({ message: "error" });
//       });
//   },
//   delete: (req, res) => {
//     let resulteId = req.params.aid;
//     resulte
//       .findByIdAndRemove(resulteId)
//       .then((resulte) => {
//         res.json({ message: "resulte is deleted successfully" });
//       })
//       .catch((err) => {
//         res.json({ message: "error" });
//       });
//   },
//   create: (req, res) => {
//     let newresulte = new resulte({
//       name: req.body.name,
//       age: req.body.age,
//       email: req.body.email,
//     });
//     resulte.regesture(newresulte, req.body.password, (error, resulte) => {
//       if (resulte) {
//         res.json({ message: "resulte inserted" });
//       } else {
//         res.json({ message: "resulte not found" });
//       }
//     });
//     post.save(() => {
//       if (error) {
//         res.json(error);
//       } else {
//         res.json({ message: "resulte inserted" });
//       }
//     });
//     authenticate: (req, res) => {
//       pass.authenticate("local", (error, resulte) => {});
//     };
//   },
// };
