import { toast } from "react-toastify";

const CLOUDINARY_UPLOAD_PRESET = "Birdopia";
const CLOUDINARY_CLOUD_NAME = "dokbkx0dz";

const uploadImageToCloudinary = async (imageFile: File): Promise<string | null> => {
  try {
    if (!imageFile) {
      console.error("No image file provided");
      return null;
    }

    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();

    if (!res.ok) {
      console.error("Upload failed:", data.error?.message || "Unknown error");
      return null;
    }
    toast.success("Image uploaded successfully! ✅");
    return data.secure_url; // ✅ Return the uploaded image URL
  } catch (error) {
    console.error("Error during image upload:", error);
    return null;
  }
};

export default uploadImageToCloudinary;
