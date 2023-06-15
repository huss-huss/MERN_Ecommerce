import { db } from "../db.js";

export const getAllCoupons = (req, res) => {
  const q = "SELECT * FROM Coupon";

  db.query(q, (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
};

export const getCouponById = (req, res) => {
  const q = "SELECT * FROM Coupon WHERE id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};

export const addCoupon = (req, res) => {
  const q = "INSERT INTO Coupon (code, discount, order_id) VALUES (?, ?, ?)";

  db.query(
    q,
    [req.body.code, req.body.discount, req.body.order_id],
    (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json("Coupon has been added successfully");
    }
  );
};

export const updateCoupon = (req, res) => {
  const q = "UPDATE Coupon SET code = ?, discount = ?, order_id = ? WHERE id = ?";

  db.query(
    q,
    [req.body.code, req.body.discount, req.body.order_id, req.params.id],
    (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json("Coupon has been updated successfully");
    }
  );
};

export const deleteCoupon = (req, res) => {
  const q = "DELETE FROM Coupon WHERE id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json("Coupon has been deleted successfully");
  });
};
