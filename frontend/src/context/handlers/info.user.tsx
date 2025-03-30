"use client";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "@/lib/firebase/Base";
import { useRouter } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
interface UL {
  userBasic: string;
  userSecure: string;
}
interface US {
  userBasic: string;
  userSecure: string;
  userFirstName: string;
  userLastName: string;
}
interface Profile {
  name: string;
  bio: string;
  DOB: string;
  gender: string;
  img: string;
}

// Define the context type
type UserAuthDetailsType = {
  userLoginNode: UL;
  setUserLoginNode: (userLoginNode: UL) => void;
  userSignInNode: US;
  setUserSignInNode: (userLoginNode: US) => void;
  UserProfileNode: Profile;
  setUserProfileNode: (userProfileNode: Profile) => void;
  UserUID: string;
  setUserUID: (UserUID: string) => void;
  UserName: string;
  setUserName: (userName: string) => void;
};

// Create the context
const UserAuthDetails = createContext<UserAuthDetailsType | undefined>(
  undefined
);

// Provider component
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
    img: "",
  });
  const [UserUID, setUserUID] = useState("");
  const [UserName, setUserName] = useState<string>("");
  const router = useRouter();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;
        setUserUID(uid); // Ensure UserUID is set properly

        if (uid) {
          try {
            const docRef = doc(db, "users", uid); // Use `uid`, not `UserUID`
            const docSnap = await getDoc(docRef);

            if (docSnap.exists() && docSnap.data().DOB && docSnap.data().name) {
              router.push(`/${docSnap.data().name}`);
              setUserName(docSnap.data().name);

              return; // Prevents unnecessary navigation to "/profile"
            }
          } catch (error) {
            console.error("Error fetching document:", error);
          }
        }

        router.replace("/profile");
      } else {
        router.replace("/");
      }
    });

    return () => unsubscribe();
  }, [router, setUserUID]);

  const values = {
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
  };
  return (
    <UserAuthDetails.Provider value={values}>
      {children}
    </UserAuthDetails.Provider>
  );
};

// Custom Hook
export const useUserAuthDetails = () => {
  const context = useContext(UserAuthDetails);
  if (!context)
    throw new Error(
      "useUserAuthDetails must be used within a UserAuthDetailsProvider"
    );
  return context;
};
