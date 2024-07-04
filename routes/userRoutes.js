const express = require('express');
const {
  getAllUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
  checkID,
} = require('../controllers/userController');

const router = express.Router();

router.param('id', checkID);

router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
