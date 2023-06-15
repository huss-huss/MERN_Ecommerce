import { db } from "../db.js";

export const getAllProducts = (req, res) => {
  const q = "SELECT * FROM Product";

  db.query(q, (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
};

export const getProductById = (req, res) => {
  const q = "SELECT * FROM Product WHERE id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};

export const addProduct = (req, res) => {
  const q =
    "INSERT INTO Product (name, description, price, quantity, vendor_id) VALUES (?, ?, ?, ?, ?)";

  db.query(
    q,
    [req.body.name, req.body.description, req.body.price, req.body.quantity, req.body.vendor_id],
    (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json("Product has been added successfully");
    }
  );
};

export const updateProduct = (req, res) => {
  const q = "UPDATE Product SET name = ?, description = ?, price = ?, quantity = ?, vendor_id = ? WHERE id = ?";

  db.query(
    q,
    [req.body.name, req.body.description, req.body.price, req.body.quantity, req.body.vendor_id, req.params.id],
    (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json("Product has been updated successfully");
    }
  );
};

export const deleteProduct = (req, res) => {
  const q = "DELETE FROM Product WHERE id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json("Product has been deleted successfully");
  });
};
