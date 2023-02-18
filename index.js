const express = require("express");
const multer = require("multer");

const app = express();
const port = 3000;

// Multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

// API endpoint for uploading an image
app.post("/upload", upload.single("image"), (req, res) => {
  res.send("Image uploaded successfully");
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
