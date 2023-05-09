const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const Category = require('../../models/category')
// 定義首頁路由
router.get('/', (req, res) => {
  const userId = req.user._id
  let totalAmount = 0
  return Category.find()
  .lean()
  .then((categories) => {
    return Record.find({ userId })
      .populate('categoryId') //以'categoryId'欄位把Record跟Category資料庫關聯
      .lean()
      .sort({ date: 'desc' })
      .then((records) => {
        records.forEach((record) => {
          record.date = record.date.toISOString().slice(0,10)
          totalAmount += record.amount
        })
        return res.render('index', { records, categories, totalAmount })
      })
  .catch(error => console.log(error))
  })
})    
// 匯出路由模組
module.exports = router
