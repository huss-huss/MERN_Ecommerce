import { db } from "../db.js";

export const getAllProducts = (req, res) => {
  const q = "SELECT * FROM product";

  db.query(q, (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
};

export const getProductById = (req, res) => {
  const q = "SELECT * FROM product WHERE id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};

export const addProduct = (req, res) => {
  const q =
    "INSERT INTO product (name, description, price, category, image) VALUES (?, ?, ?, ?, ?)";

  db.query(
    q,
    [
      req.body.name,
      req.body.description,
      req.body.price,
      req.body.category_id,
      req.body.image_url,
    ],
    (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json("Product has been added successfully");
    }
  );
};

export const updateProduct = (req, res) => {
  const q =
    "UPDATE product SET name = ?, description = ?, price = ?, category_id = ?, image_url = ? WHERE id = ?";

  db.query(
    q,
    [
      req.body.name,
      req.body.description,
      req.body.price,
      req.body.category_id,
      req.body.image_url,
      req.params.id,
    ],
    (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json("Product has been updated successfully");
    }
  );
};

export const deleteProduct = (req, res) => {
  const q = "DELETE FROM product WHERE id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json("Product has been deleted successfully");
  });
};
