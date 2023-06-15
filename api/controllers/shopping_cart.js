import { db } from '../db.js'

export const getAllShoppingCarts = (req, res) => {
  const q = 'SELECT * FROM ShoppingCart'

  db.query(q, (err, data) => {
    if (err) return res.status(500).send(err)

    return res.status(200).json(data)
  })
}

export const getShoppingCartById = (req, res) => {
  const q = 'SELECT * FROM ShoppingCart WHERE id = ?'

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err)

    return res.status(200).json(data[0])
  })
}

export const createShoppingCart = (req, res) => {
  const q = 'INSERT INTO ShoppingCart (user_id) VALUES (?)'

  db.query(q, [req.body.user_id], (err, data) => {
    if (err) return res.status(500).json(err)

    return res.status(200).json('Shopping cart has been created successfully')
  })
}

export const updateShoppingCart = (req, res) => {
  const q = 'UPDATE ShoppingCart SET user_id = ? WHERE id = ?'

  db.query(q, [req.body.user_id, req.params.id], (err, data) => {
    if (err) return res.status(500).json(err)

    return res.status(200).json('Shopping cart has been updated successfully')
  })
}

export const deleteShoppingCart = (req, res) => {
  const q = 'DELETE FROM ShoppingCart WHERE id = ?'

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err)

    return res.status(200).json('Shopping cart has been deleted successfully')
  })
}
