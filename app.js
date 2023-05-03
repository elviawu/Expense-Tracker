// 載入 express 並建構應用程式伺服器
const express = require('express')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const app = express()
const port = 3000

require('./config/mongoose')

// 設定首頁路由
app.get('/', (req, res) => {
  res.send('hello world')
})

// 設定 port 3000
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})