exports.checkID = (req, res, next, value) => {
  if (value < 1) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }

  next();
};

exports.getAllUsers = (req, res) => {
  res.json({
    status: 'error',
    message: "This route isn't yet defined",
  });
};

exports.createUser = (req, res) => {
  res.json({
    status: 'error',
    message: "This route isn't yet defined",
  });
};

exports.getUser = (req, res) => {
  res.json({
    status: 'error',
    message: "This route isn't yet defined",
  });
};

exports.updateUser = (req, res) => {
  res.json({
    status: 'error',
    message: "This route isn't yet defined",
  });
};

exports.deleteUser = (req, res) => {
  res.json({
    status: 'error',
    message: "This route isn't yet defined",
  });
};
