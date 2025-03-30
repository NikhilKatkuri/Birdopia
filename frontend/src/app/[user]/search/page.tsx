"use client";
import { FC, useState } from "react";
import Image from "next/image";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase/Base";

interface Profile {
  name: string;
  bio: string;
  profilePicture: string;
}

const PageSearch: FC = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState<Profile[]>([]);

  const Searcher = async () => {
    try {
      const userRef = collection(db, "users");
      const q = query(userRef, where("name", "==", search));
      const qSnap = await getDocs(q);

      if (!qSnap.empty) {
        const profiles = qSnap.docs.map((doc) => doc.data() as Profile);
        setUsers(profiles);
      } else {
        setUsers([]);  
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <div className="h-full w-full relative">
      <header className="sticky top-0 h-16 w-full flex items-center justify-between bg-white border-b border-gray-300">
        <div className="w-[calc(100%-5rem)] h-12 flex items-center gap-3 ml-3 px-2 rounded-md">
          <button onClick={Searcher}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search users..."
            className="w-full outline-0 text-base"
          />
        </div>
        <div className="w-12"></div>
      </header>

      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.length > 0 ? (
          users.map((user) => (
            <div
              key={user.name}
              className="p-4 bg-white shadow rounded-lg flex items-center gap-4 hover:bg-black/4 cursor-pointer"
            >
              <Image
                src={user.profilePicture  || "/default-avatar.png"} // Default avatar fallback
                alt={user.name}
                width={50}
                height={50}
                className="rounded-full h-12 w-12 "
              />
              <div className="flex flex-col flex-grow">
                <strong className="text-gray-800 text-sm">{user.name}</strong>
                <span className="text-gray-500 text-xs line-clamp-2">{user.bio}</span>
              </div>
              <button className="h-8 px-4 bg-blue-500 text-white rounded-md text-xs hover:bg-blue-600">
                Connect
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full">
            No users found.
          </p>
        )}
      </div>
    </div>
  );
};

export default PageSearch;
