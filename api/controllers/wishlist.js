import { db } from '../db.js'

export const getWishlistByUserId = (req, res) => {
  const q = 'SELECT * FROM Wishlist WHERE user_id = ?'

  db.query(q, [req.params.userId], (err, data) => {
    if (err) return res.status(500).json(err)

    return res.status(200).json(data)
  })
}

export const createProductToWishlist = (req, res) => {
  const q = 'INSERT INTO WishlistItem (wishlist_id, product_id) VALUES (?, ?)'

  db.query(q, [req.body.wishlist_id, req.body.product_id], (err, data) => {
    if (err) return res.status(500).json(err)

    return res
      .status(200)
      .json('Product has been added to the wishlist successfully')
  })
}

export const removeProductFromWishlist = (req, res) => {
  const q = 'DELETE FROM WishlistItem WHERE id = ?'

  db.query(q, [req.params.itemId], (err, data) => {
    if (err) return res.status(500).json(err)

    return res
      .status(200)
      .json('Product has been removed from the wishlist successfully')
  })
}
