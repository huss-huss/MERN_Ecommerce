import { db } from "../db.js";

// Get all reviews
export const getAllReviews = (req, res) => {
  const q = "SELECT * FROM reviews";

  db.query(q, (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
};

// Get a review by id
export const getReviewById = (req, res) => {
  const q = "SELECT * FROM reviews WHERE id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};

// Add a new review
export const addReview = (req, res) => {
  const q =
    "INSERT INTO reviews (product_id, user_id, rating, comment) VALUES (?, ?, ?, ?)";

  db.query(
    q,
    [req.body.product_id, req.body.user_id, req.body.rating, req.body.comment],
    (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json("Review has been added successfully");
    }
  );
};

// Update a review
export const updateReview = (req, res) => {
  const q = "UPDATE reviews SET rating = ?, comment = ? WHERE id = ?";

  db.query(
    q,
    [req.body.rating, req.body.comment, req.params.id],
    (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json("Review has been updated successfully");
    }
  );
};

// Delete a review
export const deleteReview = (req, res) => {
  const q = "DELETE FROM reviews WHERE id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json("Review has been deleted successfully");
  });
};
