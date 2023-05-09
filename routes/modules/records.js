const express = require('express');
const router = express.Router();
const Record = require('../../models/record')
const Category = require('../../models/category')

router.get('/new', (req, res) => {
  res.render('new');
});

router.post('/new', async (req, res) => {
  try {
    const userId = req.user._id
    const record = req.body
    const category = await Category.findOne({ name: record.categoryName })
    await Record.create({ ...record, categoryId: category._id, userId })
    res.redirect('/')
  }
  catch (error) {
    console.log(error)
  }
})

router.get('/edit', (req, res) => {
  res.render('edit');
});

module.exports = router;