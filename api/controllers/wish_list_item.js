import { db } from "../db.js";

export const getAllWishlistItems = (req, res) => {
  const q = "SELECT * FROM WishlistItem";

  db.query(q, (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
};

export const getWishlistItemById = (req, res) => {
  const q = "SELECT * FROM WishlistItem WHERE id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};

export const addWishlistItem = (req, res) => {
  const q = "INSERT INTO WishlistItem (user_id, product_id) VALUES (?, ?)";

  db.query(
    q,
    [req.body.user_id, req.body.product_id],
    (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json("Wishlist item has been added successfully");
    }
  );
};

export const deleteWishlistItem = (req, res) => {
  const q = "DELETE FROM WishlistItem WHERE id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json("Wishlist item has been deleted successfully");
  });
};
