import { db } from "../db.js";

export const getAllCategories = (req, res) => {
  const q = "SELECT * FROM Category";

  db.query(q, (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
};

export const getCategoryById = (req, res) => {
  const q = "SELECT * FROM Category WHERE id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};

export const addCategory = (req, res) => {
  const q =
    "INSERT INTO Category (name, description, product_id) VALUES (?, ?, ?)";

  db.query(
    q,
    [req.body.name, req.body.description, req.body.product_id],
    (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json("Category has been added successfully");
    }
  );
};

export const updateCategory = (req, res) => {
  const q = "UPDATE Category SET name = ?, description = ?, product_id = ? WHERE id = ?";

  db.query(
    q,
    [req.body.name, req.body.description, req.body.product_id, req.params.id],
    (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json("Category has been updated successfully");
    }
  );
};

// deleting category
export const deleteCategory = (req, res) => {
  const q = "DELETE FROM Category WHERE id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json("Category has been deleted successfully");
  });
};
