const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const Category = require('../../models/category')
// 定義首頁路由
router.get('/',async (req, res) => {
  const userId = req.user._id
  const records = await Record.find({ userId }).lean().sort({ date: "desc" });
  const formattedRecords = []
  let totalAmount = 0
  for (const record of records) {
    const category = await Category.findById(record.categoryId).lean();
    const formattedDate = new Date(record.date).toISOString().slice(0, 10);
    totalAmount += record.amount
    formattedRecords.push({ ...record, categoryIcon: category.icon, date: formattedDate })
    // console.log(formattedRecords)
  }
  res.render('index', { records: formattedRecords, totalAmount })
})    
// 匯出路由模組
module.exports = router