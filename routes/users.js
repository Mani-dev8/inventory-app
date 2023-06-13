const express = require('express');
const { newUser, getUser } = require('../controllers/usersControllers');
const router=express.Router()

router.post('/user/new',newUser)
router.post('/user/get',getUser)

module.exports=router;