import { db } from "../db.js";

export const getAllShoppingCartItems = (req, res) => {
  const q = "SELECT * FROM ShoppingCartItem";

  db.query(q, (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
};

export const getShoppingCartItemById = (req, res) => {
  const q = "SELECT * FROM ShoppingCartItem WHERE id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};

export const addShoppingCartItem = (req, res) => {
  const q = "INSERT INTO ShoppingCartItem (user_id, product_id, quantity) VALUES (?, ?, ?)";

  db.query(
    q,
    [req.body.user_id, req.body.product_id, req.body.quantity],
    (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json("Shopping cart item has been added successfully");
    }
  );
};

export const updateShoppingCartItem = (req, res) => {
  const q = "UPDATE ShoppingCartItem SET user_id = ?, product_id = ?, quantity = ? WHERE id = ?";

  db.query(
    q,
    [req.body.user_id, req.body.product_id, req.body.quantity, req.params.id],
    (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json("Shopping cart item has been updated successfully");
    }
  );
};

export const deleteShoppingCartItem = (req, res) => {
  const q = "DELETE FROM ShoppingCartItem WHERE id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json("Shopping cart item has been deleted successfully");
  });
};
