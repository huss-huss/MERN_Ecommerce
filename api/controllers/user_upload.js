import { db } from "../db.js";

export const getAllUserUploads = (req, res) => {
  const q = "SELECT * FROM UserUpload";

  db.query(q, (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
};

export const getUserUploadById = (req, res) => {
  const q = "SELECT * FROM UserUpload WHERE id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};

export const addUserUpload = (req, res) => {
  const q = "INSERT INTO UserUpload (user_id, file_name, file_path) VALUES (?, ?, ?)";

  db.query(
    q,
    [req.body.user_id, req.body.file_name, req.body.file_path],
    (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json("User upload has been added successfully");
    }
  );
};

export const updateUserUpload = (req, res) => {
  const q = "UPDATE UserUpload SET user_id = ?, file_name = ?, file_path = ? WHERE id = ?";

  db.query(
    q,
    [req.body.user_id, req.body.file_name, req.body.file_path, req.params.id],
    (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json("User upload has been updated successfully");
    }
  );
};

export const deleteUserUpload = (req, res) => {
  const q = "DELETE FROM UserUpload WHERE id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json("User upload has been deleted successfully");
  });
};
