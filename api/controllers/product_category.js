import { db } from "../db.js";

export const getAllProductCategories = (req, res) => {
  const q = "SELECT * FROM Category";

  db.query(q, (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
};

export const getProductCategoryById = (req, res) => {
  const q = "SELECT * FROM Category WHERE id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};

export const addProductCategory = (req, res) => {
  const q = "INSERT INTO Category (name) VALUES (?)";

  db.query(q, [req.body.name], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json("Category has been added successfully");
  });
};

export const updateProductCategory = (req, res) => {
  const q = "UPDATE Category SET name = ? WHERE id = ?";

  db.query(q, [req.body.name, req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json("Category has been updated successfully");
  });
};

export const deleteProductCategory = (req, res) => {
  const q = "DELETE FROM Category WHERE id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json("Category has been deleted successfully");
  });
};
