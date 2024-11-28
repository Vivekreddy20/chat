const fileformat = (url = "") => {
  const fileExt = url.split(".").pop();
  console.log(fileExt);
  switch (fileExt) {
    case "mp4":
      return "video";
      break;
    case "webm":
      return "video";
      break;
    case "ogg":
      return "video";
      break;
    case "mp3":
      return "audio";
      break;
    case "wav":
      return "audio";
      break;
    case "png":
      return "image";
      break;
    case "jpg":
      return "image";
      break;
    case "jpeg":
      return "image";
      break;
    case "gif":
      return "image";
      break;
    default:
      return "file";
  }
};

export { fileformat };
