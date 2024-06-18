import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import {
  createPost,
  deletePost,
  likeUnlikePost,
  commentOnPost,
  getAllPosts,
  getLikedPosts,
  getFollowingPosts,
  getUserPosts,
} from "../controllers/post.controller.js";
const router = express.Router();

router.post("/all", protectRoute, getAllPosts);
router.post("/following", protectRoute, getFollowingPosts);
router.post("/create", protectRoute, createPost);
router.post("/like/:id", protectRoute, likeUnlikePost);
router.post("/likes/:id", protectRoute, getLikedPosts);
router.post("/user/:username", protectRoute, getUserPosts);
router.post("/comment/:id", protectRoute, commentOnPost);
router.delete("/:id", protectRoute, deletePost);

export default router;
