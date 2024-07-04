const express = require('express');
const router = express.Router();
const {
    getUsers,
    loginHandle,
    deleteUser,
    updateUser,
    getParamUserid
} = require('../controllers/users.js')

router.route('/').get(getUsers)
    .post(loginHandle)
    .delete(deleteUser)
    .put(updateUser)

router.route('/:userid').get(getParamUserid)

module.exports = router;