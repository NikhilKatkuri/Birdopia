"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useRef,
} from "react";

interface ImageURI {
  uri: string;
  changed: boolean;
}

// Define the context type
type UserInfoContextType = {
  imageUri: ImageURI;
  setimageUri: (value: ImageURI) => void;
  imageUploadRef: React.RefObject<HTMLInputElement | null>;
  ProfileImageHandler: (
    val: boolean,
    e?: React.ChangeEvent<HTMLInputElement>
  ) => void;
};

// Create the context
const UserInfoContext = createContext<UserInfoContextType | undefined>(
  undefined
);

// Provider component
export const UserInfoContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [imageUri, setimageUri] = useState<ImageURI>({
    uri: "/cherry.png",
    changed: false,
  });
  const imageUploadRef = useRef<HTMLInputElement | null>(null);
  const ProfileImageHandler = (
    val: boolean,
    e?: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e?.target.files?.[0];
    const allowedExtensions = ["png", "jpg", "jpeg", "gif", "svg", "webp"];
  
    if (file && val) {

      const fileExtension = file.name.split(".").pop()?.toLowerCase();
      if (fileExtension && allowedExtensions.includes(fileExtension)) {
        setimageUri({ uri: URL.createObjectURL(file), changed: val });
      } else {
        alert("Invalid file type! Please select an image (.png, .jpg, .jpeg, .gif, .svg, .webp).");
      }
    } else {
      setimageUri({ uri: "/cherry.png", changed: val });
    }
  };
  

  return (
    <UserInfoContext.Provider
      value={{ imageUri, setimageUri, imageUploadRef, ProfileImageHandler }}
    >
      {children}
    </UserInfoContext.Provider>
  );
};

// Custom Hook
export const useUserInfoContext = () => {
  const context = useContext(UserInfoContext);
  if (!context)
    throw new Error(
      "useUserInfoContext must be used within a UserInfoContextProvider"
    );
  return context;
};
