"use client"
import { createContext, useContext, useState, ReactNode } from "react";

interface UL{
    userBasic:string;
    userSecure:string;
}
interface US{
    userBasic:string;
    userSecure:string;
    userFirstName:string;
    userLastName:string;
}

// Define the context type
type UserAuthDetailsType = {
 userLoginNode:UL ;
 setUserLoginNode:( userLoginNode:UL )=>void;
 userSignInNode:US ;
 setUserSignInNode:( userLoginNode:US )=>void;
};

// Create the context
const UserAuthDetails = createContext<UserAuthDetailsType | undefined>(undefined);

// Provider component
export const UserAuthDetailsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [ userLoginNode, setUserLoginNode] = useState<UL >({
    userBasic:"",
    userSecure:""
  });
  const [ userSignInNode, setUserSignInNode] = useState<US >({
    userBasic:"",
    userSecure:"",
    userFirstName:"",
    userLastName:""
  });
   const values={userLoginNode, setUserLoginNode, userSignInNode, setUserSignInNode}
  return (
    <UserAuthDetails.Provider value={values}>
      {children}
    </UserAuthDetails.Provider>
  );
};

// Custom Hook
export const useUserAuthDetails = () => {
  const context = useContext(UserAuthDetails);
  if (!context) throw new Error("useUserAuthDetails must be used within a UserAuthDetailsProvider");
  return context;
};