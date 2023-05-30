import { db } from "../db.js";

export const getAllProductCategories = (req, res) => {
  const q = "SELECT * FROM product_categories";

  db.query(q, (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
};

export const getProductCategoryById = (req, res) => {
  const q = "SELECT * FROM product_categories WHERE id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};

export const addProductCategory = (req, res) => {
  const q = "INSERT INTO product_categories (name) VALUES (?)";

  db.query(q, [req.body.name], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json("Category has been added successfully");
  });
};

export const updateProductCategory = (req, res) => {
  const q = "UPDATE product_categories SET name = ? WHERE id = ?";

  db.query(q, [req.body.name, req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json("Category has been updated successfully");
  });
};

export const deleteProductCategory = (req, res) => {
  const q = "DELETE FROM product_categories WHERE id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json("Category has been deleted successfully");
  });
};
