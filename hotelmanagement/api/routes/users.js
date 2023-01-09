import User from "../models/User.js";
import express from "express";
import { verifyAdmin,  verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req,res,next)=>{
//   res.send("hello user, you are logged in")
// })

// router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
//   res.send("hello user, you are logged in and you can delete your account")
// })

// router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
//   res.send("hello admin, you are logged in and you can delete all accounts")
// })

//UPDATE
export const updateUser = async (req,res,next)=>{
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
}
router.put("/:id", verifyUser, updateUser);
//DELETE
export const deleteUser = async (req,res,next)=>{
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted.");
  } catch (err) {
    next(err);
  }
}

router.delete("/:id", verifyUser, deleteUser);

//GET

export const getUser = async (req,res,next)=>{
  try {
    const user = await User.findById(req.params.id);
    
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
}
router.get("/:id", verifyUser, getUser);
//GET ALL


export const getUsers = async (req,res,next)=>{
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
}
router.get("/", verifyAdmin, getUsers);

// POST

export const postUser=async(req,res)=>{
  try {
    const user=new User(req.body)
    await user.save()
  } catch (error) {
    console.log(error)
  }
}
router.post("/", postUser);

export default router;
