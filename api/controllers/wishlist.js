import { db } from '../db.js'

export const getAllWishlists = (req, res) => {
  const q = 'SELECT * FROM Wishlist'

  db.query(q, (err, data) => {
    if (err) return res.status(500).send(err)

    return res.status(200).json(data)
  })
}

export const getWishlistById = (req, res) => {
  const q = 'SELECT * FROM Wishlist WHERE id = ?'

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err)

    return res.status(200).json(data[0])
  })
}

export const createWishlist = (req, res) => {
  const q = 'INSERT INTO Wishlist (user_id) VALUES (?)'

  db.query(q, [req.body.user_id], (err, data) => {
    if (err) return res.status(500).json(err)

    return res.status(200).json('Wishlist has been created successfully')
  })
}

export const updateWishlist = (req, res) => {
  const q = 'UPDATE Wishlist SET user_id = ? WHERE id = ?'

  db.query(q, [req.body.user_id, req.params.id], (err, data) => {
    if (err) return res.status(500).json(err)

    return res.status(200).json('Wishlist has been updated successfully')
  })
}

export const deleteWishlist = (req, res) => {
  const q = 'DELETE FROM Wishlist WHERE id = ?'

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err)

    return res.status(200).json('Wishlist has been deleted successfully')
  })
}
