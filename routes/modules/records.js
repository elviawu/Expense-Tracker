const express = require('express');
const router = express.Router();
const Record = require('../../models/record')
const Category = require('../../models/category')
//輸出新增畫面
router.get('/new', (req, res) => {
  return Category.find()
    .lean()
    .then((categories) => res.render('new', { categories }))
    .catch(error => console.log(error))
});
// 存檔新增支出
router.post('/new', (req, res) => {
  const userId = req.user._id
  const record = req.body
  return Record.create({ ...record, userId })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})
// 輸出修改畫面
router.get("/:id/edit", (req, res) => {
  const userId = req.user._id
  const _id = req.params.id;
  Category.find()
    .lean()
    .then((categories) => {
      return Record.findOne({ _id, userId })
        .populate('categoryId') //以'categoryId'欄位把Record跟Category資料庫關聯
        .lean()
        .then((record) => {
          record.date = record.date.toISOString().slice(0, 10)
          res.render('edit', { record, categories })
        })
        .catch(error => console.log(error))
    })
    .catch(error => console.log(error))
});
// 儲存修改內容
router.put('/:id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  const record = req.body
  console.log(record)
  return Record.findOneAndUpdate({_id, userId}, { ...record })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router;