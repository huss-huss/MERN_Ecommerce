import { db } from "../db.js";

export const getAllPayments = (req, res) => {
  const q = "SELECT * FROM Payment";

  db.query(q, (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
};

export const getPaymentById = (req, res) => {
  const q = "SELECT * FROM Payment WHERE id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};

export const addPayment = (req, res) => {
  const q = "INSERT INTO Payment (user_id, order_id, amount, payment_date) VALUES (?, ?, ?, ?)";

  db.query(
    q,
    [req.body.user_id, req.body.order_id, req.body.amount, req.body.payment_date],
    (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json("Payment has been added successfully");
    }
  );
};

export const updatePayment = (req, res) => {
  const q = "UPDATE Payment SET user_id = ?, order_id = ?, amount = ?, payment_date = ? WHERE id = ?";

  db.query(
    q,
    [req.body.user_id, req.body.order_id, req.body.amount, req.body.payment_date, req.params.id],
    (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json("Payment has been updated successfully");
    }
  );
};

export const deletePayment = (req, res) => {
  const q = "DELETE FROM Payment WHERE id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json("Payment has been deleted successfully");
  });
};
