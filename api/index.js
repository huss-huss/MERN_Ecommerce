import express from 'express'
import authRoutes from './routes/auth.js'
// import userRoutes from "./routes/users.js";
import userRoutes from './routes/user.js'
import productRoutes from './routes/product.js'
import productCategoryRoutes from './routes/product_category.js'
import orderRoutes from './routes/order.js'
import cartRoutes from './routes/cart.js'
import reviewRoutes from './routes/review.js'
import couponRoutes from './routes/coupon.js'
import wishlistRoutes from './routes/wishlist.js'
import { db } from './db.js'

import cookieParser from 'cookie-parser'
import multer from 'multer'

const app = express()

app.use(express.json())
app.use(cookieParser())
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../client/public/upload')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname)
  },
})

const upload = multer({ storage })

app.post('/api/upload', upload.single('file'), function (req, res) {
  const file = req.file
  res.status(200).json(file.filename)
})

app.use('/api', authRoutes)
app.use('/api', userRoutes)
app.use('/api', productRoutes)
app.use('/api', productCategoryRoutes)
app.use('/api', orderRoutes)
app.use('/api', cartRoutes)
app.use('/api', reviewRoutes)
app.use('/api', couponRoutes)
app.use('/api', wishlistRoutes)

db.connect((error) => {
  if (error) {
    console.log('Error connecting to MySQL database: ' + error)
  } else {
    console.log('Connected to MySQL database')
  }
})
app.listen(8800, () => {
  console.log('Server is Running on port 8800!')
})
