import { db } from "../db.js";

export const getAllAddresses = (req, res) => {
  const q = "SELECT * FROM Address";

  db.query(q, (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
};

export const getAddressById = (req, res) => {
  const q = "SELECT * FROM Address WHERE id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};

export const addAddress = (req, res) => {
  const q = "INSERT INTO Address (user_id, street, city, state, zip_code, country) VALUES (?, ?, ?, ?, ?, ?)";

  db.query(
    q,
    [req.body.user_id, req.body.street, req.body.city, req.body.state, req.body.zip_code, req.body.country],
    (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json("Address has been added successfully");
    }
  );
};

export const updateAddress = (req, res) => {
  const q = "UPDATE Address SET user_id = ?, street = ?, city = ?, state = ?, zip_code = ?, country = ? WHERE id = ?";

  db.query(
    q,
    [req.body.user_id, req.body.street, req.body.city, req.body.state, req.body.zip_code, req.body.country, req.params.id],
    (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json("Address has been updated successfully");
    }
  );
};

export const deleteAddress = (req, res) => {
  const q = "DELETE FROM Address WHERE id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json("Address has been deleted successfully");
  });
};
