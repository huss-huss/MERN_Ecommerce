import express from 'express';
import {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser
} from '../controllers/user.js';

const router = express.Router();

router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.post('/users', addUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;
