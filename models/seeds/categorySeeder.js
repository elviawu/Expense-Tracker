const mongoose = require('mongoose')
const db = require('../../config/mongoose')
const Category = require('../category')
const categoryData = require('../seedData/category').results

db.once('open', () => {
  console.log('mongodb connected!')
  Category.create(categoryData)
    .then(() => {
      console.log('categorySeeder created')
      db.close()
    })
    .catch(error => console.log(error))
})