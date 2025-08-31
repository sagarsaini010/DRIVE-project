const express = require("express");
const router = express.Router();
const upload = require("../config/multer.config");  
const fileModel = require("../models/files.models");
const authMiddleware = require("../middlewares/authe");
const cloudinary = require("../config/cloudinary.config");
// const cloudinary = require('cloudinary').v2;


router.get("/home", authMiddleware, async (req, res) => {

    const userFiles = await fileModel.find({ user: req.user.userId });


    res.render("home", { files: userFiles });
})


router.post("/upload", authMiddleware, upload.single("file"), async (req, res) => {
  try {
    const cloudinaryUpload = await cloudinary.uploader.upload(req.file.path, {
      folder: "uploads",
  type: "authenticated", // ✅ this is critical
  use_filename: true,
  unique_filename: true,
  overwrite: true

    });

    const newFile = await fileModel.create({
      originalname: req.file.originalname,
      path: cloudinaryUpload.public_id, // ✅ this is what Cloudinary uses
      user: req.user.userId,
      resourceType: cloudinaryUpload.resource_type,
      secureUrl: cloudinaryUpload.secure_url // optional for preview
    });

    res.json(newFile);
  } catch (err) {
    console.error("Upload error:", err);
    res.status(500).send("Upload failed");
  }
});



router.get("/download", authMiddleware, async (req, res) => {
  try {
    const decodedPath = decodeURIComponent(req.query.path);
    const loggedInUserId = req.user.userId;

    console.log("Authenticated user:", req.user);
    console.log("Decoded path:", decodedPath);

    // Find the file that belongs to the logged-in user
    const file = await fileModel.findOne({ path: decodedPath, user: loggedInUserId });
    if (!file) return res.status(401).send("Unauthorized or file not found");

    console.log("File found:", file);

    if (!file || !file.path) {
  throw new Error("File path is missing");
}
console.log("File path before split:", file.path);

    // ✅ Extract public_id from full URL
   
const publicId = file.path; // fallback

    console.log("Extracted public_id:", publicId);

    // ✅ Generate signed URL
    const signedUrl = cloudinary.url(publicId, {
      type: "authenticated",
      resource_type: "image",
      secure: true,
      sign_url: true
    });

    console.log("Signed URL:", signedUrl);

    return res.redirect(signedUrl);
  } catch (err) {
    console.error("Download error:", err);
    return res.status(500).send("Server error");
  }
});




module.exports = router;