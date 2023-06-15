import { db } from "../db.js";

export const getAllRoles = (req, res) => {
  const q = "SELECT * FROM Role";

  db.query(q, (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
};

export const getRoleById = (req, res) => {
  const q = "SELECT * FROM Role WHERE id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};

export const addRole = (req, res) => {
  const q =
    "INSERT INTO Role (name, description) VALUES (?, ?)";

  db.query(
    q,
    [req.body.name, req.body.description],
    (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json("Role has been added successfully");
    }
  );
};

export const updateRole = (req, res) => {
  const q = "UPDATE Role SET name = ?, description = ? WHERE id = ?";

  db.query(
    q,
    [req.body.name, req.body.description, req.params.id],
    (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json("Role has been updated successfully");
    }
  );
};

export const deleteRole = (req, res) => {
  const q = "DELETE FROM Role WHERE id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json("Role has been deleted successfully");
  });
};
