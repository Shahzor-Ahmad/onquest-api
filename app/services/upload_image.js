
const express = require("express");
const router = express.Router();
const multer = require('multer');
const path = require('path');

// File upload storage path
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, path.join(__dirname, '../../uploads/'));
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, '_') + '_' + file.originalname);
  }
});

// File format restrictions
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

// Multer configurations
const upload = multer({
  storage: storage,
  fileFilter: fileFilter
}).single('uploaded_file');

/**
 * Get file through request.
 * Upload it to server and save in uploads directory.
 * @param req file object.
 * @param res data object which to returns to user.
 */
router.post('/image', function (req, res) {
  console.log(req);
try{
    upload(req, res, function (err) {
    if (err) {
        res.status(404).send({
            message: err.message
        });
        }
    if (!req.file) {
        res.status(404).send({
        message: `Please select image and valid format of image i.e jpeg/png.`
    });
    }
    else{
        let data ={};
        var hostname = req.headers.host;
        let imagePath = "https://"+hostname+"/"+req.file.filename;
        data.imageUrl = imagePath;
        data.message = "Image uploaded successfully."
        res.send(data);
      }
      
    });
} catch (error){
      res.status(500).send({
      message: error
    });
}
});


module.exports = router;
