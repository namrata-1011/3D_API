// import cloudinary from "../config/cloudinary.js";
// import fs from "fs";

// const uploadFile = async (filePath, folder = "3D_API") => {
//   try {
//     const result = await cloudinary.uploader.upload(filePath, {
//       folder,
//       resource_type: "auto",
//     });

//     fs.unlinkSync(filePath); // Local file delete

//     return result.secure_url;
//   } catch (error) {
//     if (fs.existsSync(filePath)) {
//       fs.unlinkSync(filePath);
//     }

//     throw new Error("File upload failed");
//   }
// };

// export default uploadFile;import cloudinary from "../config/cloudinary.js";


import fs from "fs";
import path from "path";
import cloudinary from "../config/cloudinary.js";

const uploadFile = async (filePath, folder = "3D_API") => {
  try {
    console.log("Uploading File:", filePath);

    const extension = path.extname(filePath).toLowerCase();

    let result;

    // ==============================
    // Video Upload
    // ==============================
    if (
      [".mp4", ".mov", ".avi", ".mkv", ".webm"].includes(extension)
    ) {
      result = await cloudinary.uploader.upload(filePath, {
        folder,
        resource_type: "video",
        quality: "auto:best",
        overwrite: true,
      });
    }

    // ==============================
    // Documents (Resume / PDF)
    // ==============================
    else if (
      [".pdf", ".doc", ".docx"].includes(extension)
    ) {
      result = await cloudinary.uploader.upload(filePath, {
        folder,
        resource_type: "raw",
        overwrite: true,
      });
    }

    // ==============================
    // Images
    // ==============================
    else {
      result = await cloudinary.uploader.upload(filePath, {
        folder,
        resource_type: "image",
        quality: "auto:best",
        overwrite: true,
      });
    }

    console.log("Cloudinary Response:", result);

    // Delete local uploaded file
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log("Local file deleted successfully");
    }

    console.log("Cloudinary Success:", result.secure_url);

    return result.secure_url;

  } catch (error) {
    console.error("========== CLOUDINARY ERROR ==========");
    console.error(error);
    console.error("======================================");

    // Delete local file even if upload fails
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    throw new Error(error.message);
  }
};

export default uploadFile;