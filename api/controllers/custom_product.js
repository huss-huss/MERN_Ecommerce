import { db } from '../db.js'

export const getAllCustomProducts = (req, res) => {
  const q = 'SELECT * FROM CustomProduct'

  db.query(q, (err, data) => {
    if (err) return res.status(500).send(err)

    return res.status(200).json(data)
  })
}

export const getCustomProductById = (req, res) => {
  const q = 'SELECT * FROM CustomProduct WHERE id = ?'

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err)

    return res.status(200).json(data[0])
  })
}

export const createCustomProduct = (req, res) => {
  const q =
    'INSERT INTO CustomProduct (name, description, price) VALUES (?, ?, ?)'

  db.query(
    q,
    [req.body.name, req.body.description, req.body.price],
    (err, data) => {
      if (err) return res.status(500).json(err)

      return res.status(200).json('Custom product has been added successfully')
    }
  )
}

export const updateCustomProduct = (req, res) => {
  const q =
    'UPDATE CustomProduct SET name = ?, description = ?, price = ? WHERE id = ?'

  db.query(
    q,
    [req.body.name, req.body.description, req.body.price, req.params.id],
    (err, data) => {
      if (err) return res.status(500).json(err)

      return res
        .status(200)
        .json('Custom product has been updated successfully')
    }
  )
}

export const deleteCustomProduct = (req, res) => {
  const q = 'DELETE FROM CustomProduct WHERE id = ?'

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err)

    return res.status(200).json('Custom product has been deleted successfully')
  })
}
