import express from 'express'
import auth from './routes/auth.js'
import userRoutes from './routes/userRoutes.js'
import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from './routes/productRoutes.js'
import productCategoryRoutes from './routes/productCategoryRoutes.js'
import productCategoryMappingRoutes from './routes/productCategoryRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import orderStatusRoutes from './routes/orderStatusRoutes.js'
import addressRoutes from './routes/addressRoutes.js'
import orderItemRoutes from './routes/orderItemRoutes.js'
import couponRoutes from './routes/couponRoutes.js'
import customProductRoutes from './routes/customProductRoutes.js'
import paymentRoutes from './routes/paymentRoutes.js'
import productImageRoutes from './routes/productImageRoutes.js'
import reviewRoutes from './routes/reviewRoutes.js'
import roleRoutes from './routes/roleRoutes.js'
import shoppingCartItemRoutes from './routes/shoppingCartItemRoutes.js'
import shoppingCartRoutes from './routes/shoppingCartRoutes.js'
import userUploadRoutes from './routes/userUploadRoutes.js'
import wishlistItemRoutes from './routes/wishlistItemRoutes.js'
import wishlistRoutes from './routes/wishlistRoutes.js'

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

app.use('/api', addressRoutes)
app.use('/api', auth)
app.use('/api', userRoutes)
app.use('/api', productRoutes)
app.use('/api', categoryRoutes)
app.use('/api', productCategoryRoutes)
app.use('/api', productCategoryMappingRoutes)
app.use('/api', orderRoutes)
app.use('/api', orderStatusRoutes)
app.use('/api', addressRoutes)
app.use('/api', orderItemRoutes)
app.use('/api', couponRoutes)
app.use('/api', customProductRoutes)
app.use('/api', paymentRoutes)
app.use('/api', productImageRoutes)
app.use('/api', reviewRoutes)
app.use('/api', roleRoutes)
app.use('/api', shoppingCartItemRoutes)
app.use('/api', shoppingCartRoutes)
app.use('/api', userUploadRoutes)
app.use('/api', wishlistItemRoutes)
app.use('/api', wishlistRoutes)

db.connect((error) => {
  if (error) {
    console.log('Error connecting to MySQL database: ' + error)
  } else {
    console.log('Connected to MySQL database')
  }
})

app.listen(8800, () => {
  console.log('Server is running on port 8800!')
})
