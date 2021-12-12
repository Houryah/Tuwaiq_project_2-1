// const user = require("./Users");
// const user = require("../models/user");

// module.exports = {
//   index: (req, res) => {
//     user
//       .find({})
//       .then((users) => {
//         res.json(users);
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   },
//   show: (res, req) => {
//     let userId = req.params.reid;
//     user
//       .findById(userId)
//       .then((user) => {
//         res.json({ user });
//       })
//       .catch((err) => {
//         res.json({ err });
//       });
//   },
//   update: (req, res) => {
//     let userId = req.params.reid;
//     let userInfo = {
//       name: req.body.name,
//       age: req.body.age,
//       email: req.body.email,
//     };
//     user
//       .findByIdAndUpdate(userId, { $set: userInfo })
//       .then((user) => {
//         res.json({ message: "user informations has been" });
//       })
//       .catch((err) => {
//         res.json({ message: "error" });
//       });
//   },
//   delete: (req, res) => {
//     let userId = req.params.aid;
//     user
//       .findByIdAndRemove(userId)
//       .then((user) => {
//         res.json({ message: "user is deleted successfully" });
//       })
//       .catch((err) => {
//         res.json({ message: "error" });
//       });
//   },
//   create: (req, res) => {
//     let newuser = new user({
//       name: req.body.name,
//       age: req.body.age,
//       email: req.body.email,
//     });
//     user.regesture(newuser, req.body.password, (error, user) => {
//       if (user) {
//         res.json({ message: "user inserted" });
//       } else {
//         res.json({ message: "user not found" });
//       }
//     });
//     post.save(() => {
//       if (error) {
//         res.json(error);
//       } else {
//         res.json({ message: "user inserted" });
//       }
//     });
//     authenticate: (req, res) => {
//       pass.authenticate("local", (error, user) => {});
//     };
//   },
// };
