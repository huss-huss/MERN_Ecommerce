import { db } from "../db.js";

// Get all wishlist items for a user
export const getAllWishlistItems = (req, res) => {
  const q = "SELECT * FROM wishlist_items WHERE user_id = ?";

  db.query(q, [req.params.userId], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data);
  });
};

// Get a specific wishlist item by ID
export const getWishlistItemById = (req, res) => {
  const q = "SELECT * FROM wishlist_items WHERE id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};

// Add a new wishlist item
export const addWishlistItem = (req, res) => {
  const q = "INSERT INTO wishlist_items (user_id, product_id) VALUES (?, ?)";

  db.query(q, [req.body.user_id, req.body.product_id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res
      .status(200)
      .json("Wishlist item has been added to the wishlist successfully");
  });
};

// Update a wishlist item by ID
export const updateWishlistItem = (req, res) => {
  const q = "UPDATE wishlist_items SET product_id = ? WHERE id = ?";

  db.query(q, [req.body.product_id, req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json("Wishlist item has been updated successfully");
  });
};

// Delete a wishlist item by ID
export const deleteWishlistItem = (req, res) => {
  const q = "DELETE FROM wishlist_items WHERE id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json("Wishlist item has been deleted successfully");
  });
};
