import { db } from '../db.js'

export const getAllProductImages = (req, res) => {
  const q = 'SELECT * FROM ProductImage'

  db.query(q, (err, data) => {
    if (err) return res.status(500).send(err)

    return res.status(200).json(data)
  })
}

export const createProductImage = (req, res) => {
  const q =
    'INSERT INTO ProductImage (product_id, url, alt_text) VALUES (?, ?, ?)'

  db.query(
    q,
    [req.body.product_id, req.body.url, req.body.alt_text],
    (err, data) => {
      if (err) return res.status(500).json(err)

      return res.status(200).json('Product image has been added successfully')
    }
  )
}

export const deleteProductImage = (req, res) => {
  const q = 'DELETE FROM ProductImage WHERE id = ?'

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err)

    return res.status(200).json('Product image has been deleted successfully')
  })
}
