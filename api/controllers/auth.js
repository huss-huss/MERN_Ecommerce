import { db } from '../db.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const register = (req, res) => {
  //CHECK EXISTING USER
  const q = 'SELECT * FROM User WHERE email = ?'

  db.query(q, [req.body.email], (err, data) => {
    if (err) return res.status(500).json(err)
    if (data.length) return res.status(409).json('User already exists!')

    //Hash the password and create a user
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(req.body.password, salt)

    const q = 'INSERT INTO User(`firstName`, `lastName`,`email`,`password`) VALUES (?,?,?,?)'
    const values = [req.body.email, hash]

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err)
      return res.status(200).json('User has been created.')
    })
  })
}

export const login = (req, res) => {
  //CHECK USER

  const q = 'SELECT * FROM User WHERE firstName = ? AND lastName =?'

  db.query(q, [req.body.firstName, req.body.lastName], (err, data) => {
    if (err) return res.status(500).json(err)
    if (data.length === 0) return res.status(404).json('User not found!')

    //Check password
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      data[0].password
    )

    if (!isPasswordCorrect)
      return res.status(400).json('Wrong username or password!')

    const token = jwt.sign({ id: data[0].id }, 'jwtkey')
    const { password, ...other } = data[0]

    res
      .cookie('access_token', token, {
        httpOnly: true,
      })
      .status(200)
      .json(other)
  })
}

export const logout = (req, res) => {
  res
    .clearCookie('access_token', {
      sameSite: 'none',
      secure: true,
    })
    .status(200)
    .json('User has been logged out.')
}

// export const registerUser = (req, res) => {
//   const { name, email, password } = req.body;

//   const q = "INSERT INTO User(name, email, password) VALUES(?, ?, ?)";
//   const values = [name, email, password];

//   db.query(q, values, (err, data) => {
//     if (err) return res.status(500).json(err);

//     return res.status(201).json("User registered successfully!");
//   });
// };

// export const loginUser = (req, res) => {
//   const { email, password } = req.body;

//   const q = "SELECT * FROM User WHERE email = ?";
//   const values = [email];

//   db.query(q, values, (err, data) => {
//     if (err) return res.status(500).json(err);

//     if (!data.length) return res.status(401).json("Invalid credentials!");

//     if (data[0].password !== password)
//       return res.status(401).json("Invalid credentials!");

//     const token = jwt.sign({ id: data[0].id }, "jwtkey");

//     return res
//       .cookie("access_token", token)
//       .json("User logged in successfully!");
//   });
// };

// export const logoutUser = (req, res) => {
//   return res.clearCookie("access_token").json("User logged out successfully!");
// };
