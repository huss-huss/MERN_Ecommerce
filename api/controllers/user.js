import { db } from '../db.js'

export const getAllUsers = (req, res) => {
  const q = 'SELECT * FROM User'

  db.query(q, (err, data) => {
    if (err) return res.status(500).send(err)

    return res.status(200).json(data)
  })
}

export const getUserById = (req, res) => {
  const q = 'SELECT * FROM User WHERE id = ?'

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err)

    return res.status(200).json(data[0])
  })
}

export const addUser = (req, res) => {
  const q =
    'INSERT INTO User (firstName, lastName, email, password, phoneNumber) VALUES (?, ?, ?, ?, ?)'

  db.query(
    q,
    [
      req.body.firstName,
      req.body.lastName,
      req.body.email,
      req.body.password,
      req.body.phoneNumber,
    ],
    (err, data) => {
      if (err) return res.status(500).json(err)

      return res.status(200).json('User has been added successfully')
    }
  )
}

export const updateUser = (req, res) => {
  const q =
    'UPDATE User SET firstName = ?, lastName = ?, email = ?, password = ?, phoneNumber = ? WHERE id = ?'

  db.query(
    q,
    [
      req.body.firstName,
      req.body.lastName,
      req.body.email,
      req.body.password,
      req.body.phoneNumber,
      req.params.id,
    ],
    (err, data) => {
      if (err) return res.status(500).json(err)

      return res.status(200).json('User has been updated successfully')
    }
  )
}

export const deleteUser = (req, res) => {
  const q = 'DELETE FROM User WHERE id = ?'

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err)

    return res.status(200).json('User has been deleted successfully')
  })
}
