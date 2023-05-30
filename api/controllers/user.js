import { db } from '../db.js'

// Get all User
export const getAllUsers = (req, res) => {
  const sql = 'SELECT * FROM User'
  db.query(sql, (error, results) => {
    if (error) {
      res.status(404).json({ message: error.message })
    } else {
      res.status(200).json(results)
    }
  })
}

// Get a single user by id
export const getUserById = (req, res) => {
  const { id } = req.params
  const sql = 'SELECT * FROM User WHERE id = ?'
  db.query(sql, [id], (error, results) => {
    if (error) {
      res.status(404).json({ message: error.message })
    } else if (results.length > 0) {
      res.status(200).json(results[0])
    } else {
      res.status(404).json({ message: 'User not found' })
    }
  })
}

// Add a new user
export const addUser = (req, res) => {
  const { username, email } = req.body
  const sql = 'INSERT INTO User (username, email) VALUES (?, ?)'
  db.query(sql, [username, email], (error, results) => {
    if (error) {
      res.status(409).json({ message: error.message })
    } else {
      const newUser = { id: results.insertId, username, email }
      res.status(201).json(newUser)
    }
  })
}

// Update a user by id
export const updateUser = (req, res) => {
  const { id } = req.params
  const { username, email } = req.body
  const sql = 'UPDATE User SET username = ?, email = ? WHERE id = ?'
  db.query(sql, [username, email, id], (error, results) => {
    if (error) {
      res.status(404).json({ message: error.message })
    } else if (results.affectedRows > 0) {
      const updatedUser = { id, username, email }
      res.status(200).json(updatedUser)
    } else {
      res.status(404).json({ message: 'User not found' })
    }
  })
}

// Delete a user by id
export const deleteUser = (req, res) => {
  const { id } = req.params
  const sql = 'DELETE FROM User WHERE id = ?'
  db.query(sql, [id], (error, results) => {
    if (error) {
      res.status(404).json({ message: error.message })
    } else if (results.affectedRows > 0) {
      res.status(204).send()
    } else {
      res.status(404).json({ message: 'User not found' })
    }
  })
}