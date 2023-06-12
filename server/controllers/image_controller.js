import File from "../models/file.js";

export const uploadImage = async (request, response) => {
  const fileObj = {
    path: request.file.path,
    name: request.file.originalname,
  };
  try {
    const file = await File.create(fileObj);
    console.log(file);
    response
      .status(200)
      .json({ path: `http://localhost:8000/file/${file._id}` });
  } catch (error) {
    console.log(error.message);
    response.status(500).json({ err: error.message });
  }

  return response.status(200).json({ msg: "hello world" });
};

export const downloadImage = async (req, res) => {
  try {
    const file = await File.findById(req.params.fileId);

    file.downloadContent++;
    await file.save();
    res.download(file.path, file.name);
  } catch (error) {
    console.log(error);
  }
};
