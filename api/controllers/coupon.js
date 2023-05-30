
export const getAllCoupons = (req, res) => {
  const sql = "SELECT * FROM coupons";
  connection.query(sql, (error, results) => {
    if (error) {
      res.status(404).json({ message: error.message });
    } else {
      res.status(200).json(results);
    }
  });
};

export const getCouponById = (req, res) => {
  const { id } = req.params;
  const sql = "SELECT * FROM coupons WHERE id = ?";
  connection.query(sql, [id], (error, results) => {
    if (error) {
      res.status(404).json({ message: error.message });
    } else if (results.length > 0) {
      res.status(200).json(results[0]);
    } else {
      res.status(404).json({ message: "Coupon not found" });
    }
  });
};

export const applyCoupon = (req, res) => {
  const { code } = req.body;
  const sql = "SELECT * FROM coupons WHERE code = ?";
  connection.query(sql, [code], (error, results) => {
    if (error) {
      res.status(404).json({ message: error.message });
    } else if (results.length > 0) {
      res.status(200).json(results[0]);
    } else {
      res.status(404).json({ message: "Coupon not found" });
    }
  });
};

export const addCoupon = (req, res) => {
  const { code, discount, expiry } = req.body;
  const sql = "INSERT INTO coupons (code, discount, expiry) VALUES (?, ?, ?)";
  connection.query(sql, [code, discount, expiry], (error, results) => {
    if (error) {
      res.status(409).json({ message: error.message });
    } else {
      const newCoupon = { id: results.insertId, code, discount, expiry };
      res.status(201).json(newCoupon);
    }
  });
};

export const updateCoupon = (req, res) => {
  const { id } = req.params;
  const { code, discount, expiry } = req.body;
  const sql =
    "UPDATE coupons SET code = ?, discount = ?, expiry = ? WHERE id = ?";
  connection.query(sql, [code, discount, expiry, id], (error, results) => {
    if (error) {
      res.status(404).json({ message: error.message });
    } else if (results.affectedRows > 0) {
      const updatedCoupon = { id, code, discount, expiry };
      res.status(200).json(updatedCoupon);
    } else {
      res.status(404).json({ message: "Coupon not found" });
    }
  });
};
// delete a coupon by id
export const deleteCoupon = (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM coupons WHERE id = ?";
  connection.query(sql, [id], (error, results) => {
    if (error) {
      res.status(404).json({ message: error.message });
    } else if (results.affectedRows > 0) {
      res.status(200).json({ message: `Coupon with id ${id} deleted successfully` });
    } else {
      res.status(404).json({ message: "Coupon not found" });
    }
  });
};
