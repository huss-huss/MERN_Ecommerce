import { db } from '../db.js'

export const getAllUserRoles = (req, res) => {
  const q = 'SELECT * FROM UserRole'

  db.query(q, (err, data) => {
    if (err) return res.status(500).send(err)

    return res.status(200).json(data)
  })
}

export const createUserRole = (req, res) => {
  const q = 'INSERT INTO UserRole (user_id, role_id) VALUES (?, ?)'

  db.query(q, [req.body.user_id, req.body.role_id], (err, data) => {
    if (err) return res.status(500).json(err)

    return res.status(200).json('User role has been added successfully')
  })
}

export const deleteUserRole = (req, res) => {
  const q = 'DELETE FROM UserRole WHERE id = ?'

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err)

    return res.status(200).json('User role has been deleted successfully')
  })
}
