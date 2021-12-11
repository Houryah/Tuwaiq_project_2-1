const register = require("./Register");
const register = require("../models/register");

module.exports = {
  index: (req, res) => {
    register.find({})
      .then((registers) => {
        res.json(registers);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  show: (res, req) => {
    let registerId = req.params.rid;
    register.findById(registerId)
      .then((register) => {
        res.json({ register });
      })
      .catch((err) => {
        res.json({ err });
      });
  },
  update: (req, res) => {
    let registerId = req.params.rid;
    let registerInfo = {
      name: req.body.name,
      age: req.body.age,
      email: req.body.email,
    };
    register.findByIdAndUpdate(registerId, { $set: registerInfo })
      .then((register) => {
        res.json({ message: "register informations has been" });
      })
      .catch((err) => {
        res.json({ message: "error" });
      });
  },
  delete: (req, res) => {
    let registerId = req.params.pid;
    register.findByIdAndRemove(registerId)
      .then((register) => {
        res.json({ message: "register is deleted successfully" });
      })
      .catch((err) => {
        res.json({ message: "error" });
      });
  },
  create: (req, res) => {
    let newregister = new register({
      name: req.body.name,
      age: req.body.age,
      email: req.body.email,
    });
    register.regesture(newregister, req.body.password, (error, register) => {
      if (register) {
        res.json({ message: "register inserted" });
      } else {
        res.json({ message: "register not found" });
      }
    });
    post.save(() => {
      if (error) {
        res.json(error);
      } else {
        res.json({ message: "register inserted" });
      }
    });
    // authenticate: (req, res) => {
    //   pass.authenticate("local", (error, register) => {});
    // };
  },
};
