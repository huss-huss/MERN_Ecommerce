
export const getAllCoupons = (req, res) => {
  const sql = "SELECT * FROM Coupon";
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
  const sql = "SELECT * FROM Coupon WHERE id = ?";
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
  const sql = "SELECT * FROM Coupon WHERE code = ?";
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
  const { code, discount} = req.body;
  const sql = "INSERT INTO Coupon (code, discount) VALUES (?, ?)";
  connection.query(sql, [code, discount], (error, results) => {
    if (error) {
      res.status(409).json({ message: error.message });
    } else {
      const newCoupon = { id: results.insertId, code, discount};
      res.status(201).json(newCoupon);
    }
  });
};

export const updateCoupon = (req, res) => {
  const { id } = req.params;
  const { code, discount} = req.body;
  const sql =
    "UPDATE Coupon SET code = ?, discount = ? WHERE id = ?";
  connection.query(sql, [code, discount, id], (error, results) => {
    if (error) {
      res.status(404).json({ message: error.message });
    } else if (results.affectedRows > 0) {
      const updatedCoupon = { id, code, discount,};
      res.status(200).json(updatedCoupon);
    } else {
      res.status(404).json({ message: "Coupon not found" });
    }
  });
};
// delete a coupon by id
export const deleteCoupon = (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM Coupon WHERE id = ?";
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
