const express = require('express')
const bodyParser = require('body-parser')

// создаем приложение
const app = express()

// настройка парсинга тела запросов
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)
app.use(bodyParser.json())

// routes
const hotelRoutes = require('./routes/hotel')

// routes use
app.use('/api/v1/hotel', hotelRoutes)

const port = 3003;

// запуск сервера
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
})
