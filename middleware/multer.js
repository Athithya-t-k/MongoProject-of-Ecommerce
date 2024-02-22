const multer = require('multer');

// Set up storage options
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/'); // Specify the directory where uploaded files will be stored
  },
  filename: function (req, file, cb) {
    cb(null,file.filename + "-" + Date.now() + file.originalname); // Define the filename for the uploaded file
  },
});

// Create Multer instance with the configured storage options
const upload= multer({ storage: storage });

module.exports = upload;
