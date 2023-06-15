import { db } from "../db.js";

export const getAllOrders = (req, res) => {
  const q = "SELECT * FROM `Order`";

  db.query(q, (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
};

export const getOrderById = (req, res) => {
  const q = "SELECT * FROM `Order` WHERE id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};

export const addOrder = (req, res) => {
  const q =
    "INSERT INTO `Order` (user_id, total_price, order_status_id) VALUES (?, ?, ?)";

  db.query(
    q,
    [req.body.user_id, req.body.total_price, req.body.order_status_id],
    (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json("Order has been added successfully");
    }
  );
};

export const updateOrder = (req, res) => {
  const q = "UPDATE `Order` SET order_status_id = ? WHERE id = ?";

  db.query(q, [req.body.order_status_id, req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json("Order status has been updated successfully");
  });
};

export const deleteOrder = (req, res) => {
  const q = "DELETE FROM `Order` WHERE id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json("Order has been deleted successfully");
  });
};
