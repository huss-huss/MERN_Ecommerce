import { db } from "../db.js";
import jwt from "jsonwebtoken";

export const getAllCartItems = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q = "SELECT * FROM cart";
    db.query(q, [userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json(data);
    });
  });
};

export const getCartItem = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q = "SELECT * FROM cart WHERE `uid` = ?";
    db.query(q, [userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json(data);
    });
  });
};

export const addCartItem = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q =
      "INSERT INTO cart(`pid`, `uid`, `quantity`) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE `quantity` = `quantity` + ?";

    const values = [
      req.body.pid,
      userInfo.id,
      req.body.quantity,
      req.body.quantity,
    ];

    db.query(q, values, (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Product has been added to cart.");
    });
  });
};

export const updateCartItem = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q = "UPDATE cart SET `quantity`=? WHERE `id` = ? AND `uid` = ?";

    db.query(
      q,
      [req.body.quantity, req.params.id, userInfo.id],
      (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Cart has been updated.");
      }
    );
  });
};

export const deleteCartItem = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q = "DELETE FROM cart WHERE `id` = ? AND `uid` = ?";

    db.query(q, [req.params.id, userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Product has been removed from cart.");
    });
  });
};
