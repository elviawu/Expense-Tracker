const express = require('express')
const exphbs = require('express-handlebars');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const routes = require('./routes')
const app = express()
const port = 3000

require('./config/mongoose')

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(routes)


app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})