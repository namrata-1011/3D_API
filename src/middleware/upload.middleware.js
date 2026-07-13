import multer from "multer";
import path from "path";
import fs from "fs";

const uploadPath = "uploads";

if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadPath);
  },

  filename: (req, file, cb) => {
    const uniqueName =
      Date.now() + "-" + Math.round(Math.random() * 1e9) +
      path.extname(file.originalname);

    cb(null, uniqueName);
  },
});

// ======================================
// Allowed File Types
// ======================================

const allowedMimeTypes = [
  // Images
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "image/gif",

  // Videos
  "video/mp4",
  "video/mpeg",
  "video/quicktime", // mov
  "video/webm",
  "video/x-msvideo", // avi
  "video/x-matroska", // mkv

  // Documents
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const fileFilter = (req, file, cb) => {
  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(
      new Error(
        "Only Images, Videos, PDF, DOC and DOCX files are allowed."
      ),
      false
    );
  }
};

const upload = multer({
  storage,
  fileFilter,

  limits: {
    fileSize: 2 * 1024 * 1024 * 1024, // 2GB
  },
});

export default upload;

/*
|--------------------------------------------------------------------------
| MEMORY STORAGE
|--------------------------------------------------------------------------
| Files RAM buffer me aayengi.
| Cloudinary upload_stream ke through direct upload karenge.
|--------------------------------------------------------------------------
*/

const storage = multer.memoryStorage();



/*
|--------------------------------------------------------------------------
| IMAGE UPLOAD
|--------------------------------------------------------------------------
| Profile Image
| Introduction Image
| Vision Image
| Achievement Image
| Award Certificate Image
| Company Logo
|--------------------------------------------------------------------------
*/

const imageFilter = (req, file, cb) => {

  const allowedTypes = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
    "application/pdf",
  ];


  if (!allowedTypes.includes(file.mimetype)) {

    return cb(
      new Error(
        "Only JPG, JPEG, PNG, WEBP images and PDF documents are allowed."
      ),
      false
    );

  }


  cb(null, true);

};



const upload = multer({

  storage,


  limits: {

    fileSize: 10 * 1024 * 1024, // 10 MB

  },
  fileFilter: imageFilter,
});

/*
|--------------------------------------------------------------------------
| MEDIA UPLOAD
|--------------------------------------------------------------------------
| Image + Video
|
| Used for:
| Story Gallery
| Story Featured Video
| Future CMS Media Modules
|--------------------------------------------------------------------------
*/


const mediaFilter = (req, file, cb) => {


  const allowedTypes = [

    // Images

    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
    "application/pdf",


    // Videos

    "video/mp4",
    "video/webm",
    "video/quicktime",
    "video/x-msvideo",
    "video/mpeg",

  ];



  if (!allowedTypes.includes(file.mimetype)) {

    return cb(
      new Error(
        "Only JPG, JPEG, PNG, WEBP, PDF and MP4, WEBM, MOV, AVI, MPEG videos are allowed."
      ),
      false
    );

  }


  cb(null, true);

};





const uploadMedia = multer({

  storage,


  limits: {

    fileSize: 100 * 1024 * 1024, // 100 MB

  },


  fileFilter: mediaFilter,

});

export default upload;

export {
  uploadMedia
};
