// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const users = require('./modules/users')
router.use('/', home)
router.use('/users', users)
module.exports = router