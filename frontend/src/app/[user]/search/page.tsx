import { FC } from "react";
import Image from "next/image";

const users = [
  { id: 1, name: "Sharanya", bio: "Web Developer", img: "/cherry.png" },
  { id: 2, name: "Nikhil", bio: "Software Engineer", img: "/profile2.png" },
  { id: 3, name: "Cherry", bio: "UI/UX Designer", img: "/profile3.png" },
];

const PageSearch: FC = () => {
  return (
    <div className="h-full w-full">
      <header className="h-16 w-full flex items-center justify-between bg-white border-b border-gray-300">
        <div className="w-[calc(100%-5rem)] h-12 flex items-center gap-3 ml-3 px-2 rounded-md">
          <span>
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
          </span>
          <input type="text" placeholder="Search users..." className="w-full outline-0 text-base" />
        </div>
        <div className="w-12"></div>
      </header>

      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <div key={user.id} className="p-4 bg-white shadow rounded-lg flex items-center gap-4">
            <Image src={user.img} alt={user.name} width={50} height={50} className="rounded-full" />
            <div className="flex flex-col flex-grow">
              <strong className="text-gray-800 text-sm">{user.name}</strong>
              <span className="text-gray-500 text-xs">{user.bio}</span>
            </div>
            <button className="h-8 px-4 bg-blue-500 text-white rounded-md text-xs hover:bg-blue-600">Connect</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageSearch;
