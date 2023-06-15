import { db } from "../db.js";

export const getAllOrderStatuses = (req, res) => {
  const q = "SELECT * FROM OrderStatus";

  db.query(q, (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
};

export const getOrderStatusById = (req, res) => {
  const q = "SELECT * FROM OrderStatus WHERE id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};

export const addOrderStatus = (req, res) => {
  const q = "INSERT INTO OrderStatus (name, description) VALUES (?, ?)";

  db.query(
    q,
    [req.body.name, req.body.description],
    (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json("Order status has been added successfully");
    }
  );
};

export const updateOrderStatus = (req, res) => {
  const q = "UPDATE OrderStatus SET name = ?, description = ? WHERE id = ?";

  db.query(
    q,
    [req.body.name, req.body.description, req.params.id],
    (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json("Order status has been updated successfully");
    }
  );
};

export const deleteOrderStatus = (req, res) => {
  const q = "DELETE FROM OrderStatus WHERE id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json("Order status has been deleted successfully");
  });
};
