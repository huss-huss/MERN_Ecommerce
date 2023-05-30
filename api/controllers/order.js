import { db } from "../db.js";

export const getAllOrders = (req, res) => {
  const q = "SELECT * FROM orders";

  db.query(q, (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
};

export const getOrderById = (req, res) => {
  const q = "SELECT * FROM orders WHERE id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};

export const addOrder = (req, res) => {
  const q =
    "INSERT INTO orders (user_id, total_amount, status) VALUES (?, ?, ?)";

  db.query(
    q,
    [req.body.user_id, req.body.total_amount, req.body.status],
    (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json("Order has been added successfully");
    }
  );
};

export const updateOrder = (req, res) => {
  const q = "UPDATE orders SET status = ? WHERE id = ?";

  db.query(q, [req.body.status, req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json("Order status has been updated successfully");
  });
};

export const deleteOrder = (req, res) => {
  const q = "DELETE FROM orders WHERE id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json("Order has been deleted successfully");
  });
};
