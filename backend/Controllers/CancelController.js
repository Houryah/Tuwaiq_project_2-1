// const Cancel = require("./Cancel");
// const Cancel = require("../models/cancel");

// module.exports = {
//   index: (req, res) => {
//     Cancel.find({})
//       .then((cancels) => {
//         res.json(cancels);
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   },
//   show: (res, req) => {
//     let cancelId = req.params.cid;
//     cancel.findById(cancelId)
//       .then((cancel) => {
//         res.json({ cancel });
//       })
//       .catch((err) => {
//         res.json({ err });
//       });
//   },
//   update: (req, res) => {
//     let cancelId = req.params.cid;
//     let cancelInfo = {
//       name: req.body.name,
//       age: req.body.age,
//       email: req.body.email,
//     };
//     Cancel.findByIdAndUpdate(cancelId, { $set: cancelInfo })
//       .then((cancel) => {
//         res.json({ message: "cancel informations has been" });
//       })
//       .catch((err) => {
//         res.json({ message: "error" });
//       });
//   },
//   delete: (req, res) => {
//     let cancelId = req.params.cid;
//     Cancel.findByIdAndRemove(cancelId)
//       .then((cancel) => {
//         res.json({ message: "cancel is deleted successfully" });
//       })
//       .catch((err) => {
//         res.json({ message: "error" });
//       });
//   },
//   create: (req, res) => {
//     let newcancel = new cancel({
//       name: req.body.name,
//       age: req.body.age,
//       email: req.body.email,
//     });
//     cancel.regesture(newcancel, req.body.password, (error, cancel) => {
//       if (cancel) {
//         res.json({ message: "cancel inserted" });
//       } else {
//         res.json({ message: "cancel not found" });
//       }
//     });
//     post.save(() => {
//       if (error) {
//         res.json(error);
//       } else {
//         res.json({ message: "cancel inserted" });
//       }
//     });
//     // authenticate: (req, res) => {
//     //   pass.authenticate("local", (error, cancel) => {});
//     // };
//   },
// };
