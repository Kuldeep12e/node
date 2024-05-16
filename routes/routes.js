const express = require('express');
const { signup } = require('../controller/user');
const router = express.Router();

console.log("routes me hu bhai")

router.post('/signup/karo' , signup)

module.exports = router;
