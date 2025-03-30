"use client"
import BottomBar from "@/component/nonResuable/Bottombar.mobile";
import Sidebar from "@/component/nonResuable/Sidebar.nonMobile";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface DM {
  width: number;
  height: number;
}

// Define the context type
type LayoutContextType = {
  Dimention: DM;
  setDimention: (Dimention: DM) => void;
};

// Create the context
const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

// Provider component
export const LayoutContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [Dimention, setDimention] = useState<DM>({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    const upDation = () => {
      setDimention({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    upDation();
    window.addEventListener("resize", upDation);
    return () => {
      window.removeEventListener("resize", upDation);
    };
  }, []);
  const value = { Dimention, setDimention };
  if (Dimention.width <= 600) {
    return (
      <LayoutContext.Provider value={value}>
        <div className="relative flex flex-col">
          <main className="">{children}</main>
          <footer className="fixed bottom-0 z-20">
            <BottomBar />
          </footer>
        </div>
      </LayoutContext.Provider>
    );
  }
  return (
    <LayoutContext.Provider value={value}>
      <div className="flex items-center  h-screen">
        <aside className="h-full w-20 border-r border-gray-300 bg-white">
          <Sidebar />
        </aside>
        <main className="h-full w-[calc(100%-5rem)]">{children}</main>
      </div>
    </LayoutContext.Provider>
  );
};

// Custom Hook
export const useLayoutContext = () => {
  const context = useContext(LayoutContext);
  if (!context)
    throw new Error(
      "useLayoutContext must be used within a LayoutContextProvider"
    );
  return context;
};
