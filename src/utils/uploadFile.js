import cloudinary from "../config/cloudinary.js";

const uploadFile = async (filePath, folder = "3d-project") => {
  const result = await cloudinary.uploader.upload(filePath, {
    folder,
  });

  return result.secure_url;
};

export default uploadFile;