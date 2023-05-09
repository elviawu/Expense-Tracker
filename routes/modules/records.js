const express = require('express');
const router = express.Router();
const Record = require('../../models/record')
const Category = require('../../models/category')

router.get('/new', (req, res) => {
  return Category.find()
    .lean()
    .then((categories) => res.render('new', { categories }))
    .catch(error => console.log(error))
});

router.post('/new', async (req, res) => {
  const userId = req.user._id
  const record = req.body
  console.log(req.body)
  return Record.create({ ...record, userId })
  .then(() => res.redirect('/'))
  .catch (error => console.log(error))
})

module.exports = router;