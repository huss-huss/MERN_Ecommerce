import { db } from "../db.js";

export const getAllOrderItems = (req, res) => {
  const q = "SELECT * FROM OrderItem";

  db.query(q, (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
};

export const getOrderItemById = (req, res) => {
  const q = "SELECT * FROM OrderItem WHERE id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};

export const addOrderItem = (req, res) => {
  const q = "INSERT INTO OrderItem (order_id, product_id, quantity, price) VALUES (?, ?, ?, ?)";

  db.query(
    q,
    [req.body.order_id, req.body.product_id, req.body.quantity, req.body.price],
    (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json("Order item has been added successfully");
    }
  );
};

export const updateOrderItem = (req, res) => {
  const q = "UPDATE OrderItem SET order_id = ?, product_id = ?, quantity = ?, price = ? WHERE id = ?";

  db.query(
    q,
    [req.body.order_id, req.body.product_id, req.body.quantity, req.body.price, req.params.id],
    (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json("Order item has been updated successfully");
    }
  );
};

export const deleteOrderItem = (req, res) => {
  const q = "DELETE FROM OrderItem WHERE id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json("Order item has been deleted successfully");
  });
};
