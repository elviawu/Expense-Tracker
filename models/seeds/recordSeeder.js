const mongoose = require('mongoose')
const db = require('../../config/mongoose')
const bcrypt = require('bcryptjs')
const Record = require('../record')
const Category = require('../category')
const User = require('../user')
const recordData = require('../seedData/record')
const userData = require('../seedData/user')

db.once('open', () => {
  console.log('mongodb connected!')
  Promise.all(
    userData.map(user => {
      return bcrypt
        .genSalt(10)
        .then(salt => bcrypt.hash(user.password, salt))
        .then(hash => User.create({
          name: user.name,
          email: user.email,
          password: hash
        })
        )
        .then(user => {
          const userId = user._id
          return Promise.all(
            recordData.map(seedRecord => {
              // set record's categoryId
              return Category.findOne({ name: seedRecord.category })
                .lean()
                .then((category) => {
                  const categoryId = category._id
                  const newRecord = Object.assign({}, seedRecord, {
                    userId,
                    categoryId
                  })
                  return Record.create(newRecord)
                })
                .catch(error => console.log(error))
            })
          )
        })
    })
  )
    .then(() => {
      console.log('recordSeeder created')
      db.close()
    })
    .catch(error => console.log(error))
})