const Users = require("../models/users.model");

exports.isAdmin = async (req, res, next) => {
  const { id } = req;

  const user = await Users.findOne({ _id: id });

  if (user.role !== 'admin') {
    return res.status(401).send({ message: "Admin resource. Access denied!" });
  }

  next();
};

exports.isManager = async (req, res, next) => {
    const { id } = req;
  
    const user = await Users.findOne({ _id: id });
  
    if (user.role !== 'manager') {
      return res.status(401).send({ message: "Manager resource. Access denied!" });
    }
  
    next();
  };