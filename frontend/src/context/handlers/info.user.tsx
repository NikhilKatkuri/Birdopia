"use client";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  useMemo,
} from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth, db } from "@/lib/firebase/Base";
import { useRouter } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";

// Define User Data Types
interface UL {
  userBasic: string;
  userSecure: string;
}

interface US extends UL {
  userFirstName: string;
  userLastName: string;
}

interface Profile {
  name: string;
  bio: string;
  DOB: string;
  gender: string;
  profilePicture: string;
}
interface UserProfile {
  uid: string;
  email: string;
  name?: string;
  profilePicture?: string;
  bio?: string;
  DOB?: string;
  gender?: string;
  location?: string;
  followers: string[];
  following: string[];
  hidden: string[];
  notifications: string[];
  createdAt: string;
  updatedAt: string;
}

// Define Context Type
type UserAuthDetailsType = {
  userLoginNode: UL;
  setUserLoginNode: (userLoginNode: UL) => void;
  userSignInNode: US;
  setUserSignInNode: (userSignInNode: US) => void;
  UserProfileNode: Profile;
  setUserProfileNode: (userProfileNode: Profile) => void;
  UserUID: string | null;
  setUserUID: (UserUID: string | null) => void;
  UserName: string;
  setUserName: (userName: string) => void;
  userNode: UserProfile | null;
  setUserNode: (userNode: UserProfile | null) => void;
};

// Create Context
const UserAuthDetails = createContext<UserAuthDetailsType | undefined>(
  undefined
);

// Provider Component
export const UserAuthDetailsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [userLoginNode, setUserLoginNode] = useState<UL>({
    userBasic: "",
    userSecure: "",
  });

  const [userSignInNode, setUserSignInNode] = useState<US>({
    userBasic: "",
    userSecure: "",
    userFirstName: "",
    userLastName: "",
  });

  const [UserProfileNode, setUserProfileNode] = useState<Profile>({
    name: "",
    bio: "",
    DOB: "",
    gender: "",
    profilePicture: "",
  });

  const [userNode, setUserNode] = useState<UserProfile | null>(null);
  const [UserUID, setUserUID] = useState<string | null>(null);
  const [UserName, setUserName] = useState<string>("");

  const router = useRouter();

  useEffect(() => {
    const fetchUser = async (user: User | null) => {
      if (!user) {
        // If there's no user, check local storage
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          setUserNode(parsedUser);
          setUserUID(parsedUser.uid);
          setUserName(parsedUser.name || "");

          // If offline, do not navigate anywhere
          return;
        }

        // If no user and no stored data, redirect to login
        router.replace("/");
        return;
      }

      setUserUID(user.uid);

      try {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data() as UserProfile;
          setUserNode(userData);
          setUserName(userData.name || "");

          // Save user data to local storage
          localStorage.setItem("user", JSON.stringify(userData));

          // Navigate to user profile page
          router.push(`/${userData.name}`);
          return;
        }

        // If user has no profile data, redirect to profile setup
        router.replace("/profile");
      } catch (error) {
        console.error("Error fetching user document:", error);
      }
    };

    const unsubscribe = onAuthStateChanged(auth, fetchUser);

    return () => unsubscribe();
  }, [router]);

  // Memoized Values for Performance Optimization
  const values = useMemo(
    () => ({
      userLoginNode,
      setUserLoginNode,
      userSignInNode,
      setUserSignInNode,
      UserProfileNode,
      setUserProfileNode,
      UserUID,
      setUserUID,
      UserName,
      setUserName,
      userNode,
      setUserNode,
    }),
    [
      userLoginNode,
      userSignInNode,
      UserProfileNode,
      UserUID,
      UserName,
      userNode,
      setUserNode,
    ]
  );

  return (
    <UserAuthDetails.Provider value={values}>
      {children}
    </UserAuthDetails.Provider>
  );
};

// Custom Hook
export const useUserAuthDetails = () => {
  const context = useContext(UserAuthDetails);
  if (!context) {
    throw new Error(
      "useUserAuthDetails must be used within a UserAuthDetailsProvider"
    );
  }
  return context;
};
