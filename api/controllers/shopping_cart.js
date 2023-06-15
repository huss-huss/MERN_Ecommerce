import { db } from '../db.js'

export const getShoppingCartByUserId = (req, res) => {
  const q = 'SELECT * FROM ShoppingCart WHERE user_id = ?'

  db.query(q, [req.params.userId], (err, data) => {
    if (err) return res.status(500).json(err)

    return res.status(200).json(data)
  })
}

export const aProductToShoppingCart = (req, res) => {
  const q =
    'INSERT INTO ShoppingCartItem (shopping_cart_id, product_id, quantity) VALUES (?, ?, ?)'

  db.query(
    q,
    [req.body.shopping_cart_id, req.body.product_id, req.body.quantity],
    (err, data) => {
      if (err) return res.status(500).json(err)

      return res
        .status(200)
        .json('Product has been added to the shopping cart successfully')
    }
  )
}

export const removeProductFromShoppingCart = (req, res) => {
  const q = 'DELETE FROM ShoppingCartItem WHERE id = ?'

  db.query(q, [req.params.itemId], (err, data) => {
    if (err) return res.status(500).json(err)

    return res
      .status(200)
      .json('Product has been removed from the shopping cart successfully')
  })
}
