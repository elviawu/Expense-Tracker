// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const users = require('./modules/users')
const { authenticator } = require('../middleware/auth')

router.use('/users', users)
router.use('/', authenticator, home)

module.exports = router