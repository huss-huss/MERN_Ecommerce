import { db } from "../db.js";

export const getAllProductCategoryMappings = (req, res) => {
  const q = "SELECT * FROM ProductCategoryMapping";

  db.query(q, (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
};

export const getProductCategoryMappingById = (req, res) => {
  const q = "SELECT * FROM ProductCategoryMapping WHERE id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};

export const createProductCategoryMapping = (req, res) => {
  const q =
    "INSERT INTO ProductCategoryMapping (product_id, category_id, created_at, updated_at) VALUES (?, ?, ?, ?)";

  const currentDate = new Date().toISOString();

  db.query(
    q,
    [req.body.product_id, req.body.category_id, currentDate, currentDate],
    (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json("ProductCategoryMapping has been created successfully");
    }
  );
};

export const updateProductCategoryMapping = (req, res) => {
  const q =
    "UPDATE ProductCategoryMapping SET product_id = ?, category_id = ?, updated_at = ? WHERE id = ?";

  const currentDate = new Date().toISOString();

  db.query(
    q,
    [req.body.product_id, req.body.category_id, currentDate, req.params.id],
    (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json("ProductCategoryMapping has been updated successfully");
    }
  );
};

export const deleteProductCategoryMapping = (req, res) => {
  const q = "DELETE FROM ProductCategoryMapping WHERE id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json("ProductCategoryMapping has been deleted successfully");
  });
};
