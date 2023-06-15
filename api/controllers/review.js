import { db } from '../db.js'

export const getAllReviews = (req, res) => {
  const q = 'SELECT * FROM Review'

  db.query(q, (err, data) => {
    if (err) return res.status(500).send(err)

    return res.status(200).json(data)
  })
}

export const getReviewById = (req, res) => {
  const q = 'SELECT * FROM Review WHERE id = ?'

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err)

    return res.status(200).json(data[0])
  })
}

export const createReview = (req, res) => {
  const q =
    'INSERT INTO Review (user_id, product_id, rating, title, description) VALUES (?, ?, ?, ?, ?)'

  db.query(
    q,
    [
      req.body.user_id,
      req.body.product_id,
      req.body.rating,
      req.body.title,
      req.body.description,
    ],
    (err, data) => {
      if (err) return res.status(500).json(err)

      return res.status(200).json('Review has been added successfully')
    }
  )
}

export const updateReview = (req, res) => {
  const q =
    'UPDATE Review SET user_id = ?, product_id = ?, rating = ?, title = ?, description = ? WHERE id = ?'

  db.query(
    q,
    [
      req.body.user_id,
      req.body.product_id,
      req.body.rating,
      req.body.title,
      req.body.description,
      req.params.id,
    ],
    (err, data) => {
      if (err) return res.status(500).json(err)

      return res.status(200).json('Review has been updated successfully')
    }
  )
}

export const deleteReview = (req, res) => {
  const q = 'DELETE FROM Review WHERE id = ?'

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err)

    return res.status(200).json('Review has been deleted successfully')
  })
}
