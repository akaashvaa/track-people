import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
const app = express()

//console.log(process.env.PORT)

app.get('/', (_, res) =>
  res.status(200).json({ success: true, message: 'route working fine' })
)

app.listen(3001, () => {
  console.log(
    `server is listening at PORT : ${process.env.PORT} , ${new Date().toLocaleTimeString()}`
  )
})
