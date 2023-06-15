import express from 'express';
import {
  getAllUserUploads,
  getUserUploadById,
  createUserUpload,
  updateUserUpload,
  deleteUserUpload
} from '../controllers/user_upload.js';

const router = express.Router();

router.get('/user-uploads', getAllUserUploads);
router.get('/user-uploads/:id', getUserUploadById);
router.post('/user-uploads', createUserUpload);
router.put('/user-uploads/:id', updateUserUpload);
router.delete('/user-uploads/:id', deleteUserUpload);

export default router;
