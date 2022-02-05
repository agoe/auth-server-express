const express = require('express');
const router = express.Router();
const usersController = require('../../controllers/usersController');
const ROLES_LIST = require('../../config/roles_list');
const checkRoles = require('../../middleware/checkRoles');

router.route('/')
    .get(checkRoles(ROLES_LIST.Admin), usersController.getAllUsers)
    .delete(checkRoles(ROLES_LIST.Admin), usersController.deleteUser);

router.route('/:id')
    .get(checkRoles(ROLES_LIST.Admin), usersController.getUser);

module.exports = router;