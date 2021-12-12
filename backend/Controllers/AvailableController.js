// const available = require("../Controllers/Available");
// const available = require("../models/available");

// const index = (req, res)=>{
  
//     available.find({})
//       .then((availables) => {
//         res.json(availables);
//       })
//       .catch((err) => {
//         console.error(err);
//       });
// },
//   const show = (res, req) => {
//     let availableId = req.params.aid;
//     available.findById(availableId)
//       .then((available) => {
//         res.json({ available });
//       })
//       .catch((err) => {
//         res.json({ err });
//       });
//   },
//  const update = (req, res) => {
//     let availableId = req.params.aid;
//     let availableInfo = {
//       name: req.body.name,
//       age: req.body.age,
//       email: req.body.email,
//     };
//     available
//       .findByIdAndUpdate(availableId, { $set: availableInfo })
//       .then((available) => {
//         res.json({ message: "available informations has been" });
//       })
//       .catch((err) => {
//         res.json({ message: "error" });
//       });
//   },
//   const delete = (req, res) => {
//     let availableId = req.params.aid;
//     available
//       .findByIdAndRemove(availableId)
//       .then((available) => {
//         res.json({ message: "available is deleted successfully" });
//       })
//       .catch((err) => {
//         res.json({ message: "error" });
//       });
//   },
//   const create= (req, res) => {
//     let newavailable = new available({
//       name: req.body.name,
//       age: req.body.age,
//       email: req.body.email,
//     });
//     available.regesture(newavailable, req.body.password, (error, available) => {
//       if (available) {
//         res.json({ message: "available inserted" });
//       } else {
//         res.json({ message: "available not found" });
//       }
//     });
//     post.save(() => {
//       if (error) {
//         res.json(error);
//       } else {
//         res.json({ message: "available inserted" });
//       }
//     });
//     authenticate: (req, res) => {
//       pass.authenticate("local", (error, available) => {});
//     };
//   },
// };
