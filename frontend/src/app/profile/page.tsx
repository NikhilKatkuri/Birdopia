"use client";
import InputField from "@/component/reusable/InputFeild";
import StarEffect from "@/component/reusable/StarsEffect";
import { useUserInfoContext } from "@/context/handlers/info.uploads";
import Image from "next/image";
import { FC } from "react";
// profile

const Page: FC = () => {
  const { imageUploadRef, imageUri, ProfileImageHandler } =
    useUserInfoContext();
  return (
    <div className="min-h-screen w-screen bg-[radial-gradient(#1D2B41_0%,#1D2B41_0%,#020509_100%)] flex items-center justify-center py-6 px-4 overflow-y-scroll">
      <StarEffect />
      <main className="z-[20] max-sm:min-h-[54rem]  md:h-[36rem] w-full max-w-[900px] bg-white/5 rounded-2xl backdrop-blur-sm md:p-4 ">
        <div className="grid grid-cols-1 sm:grid-cols-[0.4fr_0.6fr] gap-6 min-h-full w-full p-3">
          <div className="h-full flex flex-col items-center justify-center bg-slate-900 rounded-2xl p-6 shadow-lg">
            <div className=" flex flex-col items-center">
              <div className="relative">
                <div className="absolute   right-2 top-2 bg-slate-700 text-white rounded-full p-2 shadow-md *:cursor-pointer hover:bg-slate-600 transition">
                  <label htmlFor="upload_file">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </label>
                  <input
                    type="file"
                    hidden
                    ref={imageUploadRef}
                    accept=".png, .jpg, .jpeg, .gif, .svg, .webp"
                    onChange={(e) => {
                      ProfileImageHandler(true, e);
                    }}
                    id="upload_file"
                  />
                </div>

                <div className="h-36 w-36 rounded-full overflow-hidden border-4 border-slate-700 shadow-md">
                  <Image
                    src={imageUri?.uri}
                    alt="Profile Picture"
                    width={144}
                    height={144}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div
                className={`grid grid-cols-2 gap-4 py-4 transition-all duration-150 ease-in-out ${
                  imageUri.changed ? "opacity-[100]" : "opacity-0"
                } `}
              >
                <button
                  onClick={() => {
                    ProfileImageHandler(false);
                  }}
                  className="h-8 w-8 rounded-full flex items-center justify-center text-red-600 bg-red-300 active:scale-95 transition-all ease-in-out duration-150"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="size-6 stroke-[2]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <button className="h-8 w-8 rounded-full flex items-center justify-center text-green-600 bg-green-300 active:scale-95 transition-all ease-in-out duration-150">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="size-6 stroke-[2]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </button>
              </div>
              <div className="text-center mt-4">
                <h2 className="text-white font-semibold text-2xl">
                  Complete Your Profile
                </h2>
                <p className="text-gray-400 mt-2 px-4 text-sm">
                  Set up your profile to personalize your experience and get the
                  most out of our platform.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full max-md:h-[30rem] h-full   bg-slate-800 rounded-2xl p-6 shadow-lg">
            <div className="h-64 grid grid-cols-1 gap-4 max-w-sm">
              <div className="grid gap-2">
                <label htmlFor="input" className="text-slate-400">
                  User name
                </label>
                <InputField placeholder="" id="input" className="" />
              </div>
              <div className="grid gap-2">
                <div className="flex justify-between items-center">
                  <label htmlFor="bio" className="text-slate-400 text-sm">
                    Bio
                  </label>
                  <span className="text-slate-300 text-xs">0 / 160</span>
                </div>

                <textarea
                  id="bio"
                  name="bio"
                  maxLength={160}
                  placeholder="Write something about yourself..."
                  className="h-12 bg-gray-50/5 placeholder:text-slate-500 text-slate-50 p-3 rounded-md resize-none outline-none border-2 border-transparent focus:border-slate-500 transition-all"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="date" className="text-slate-400 text-sm">
                  Date of Birth
                </label>
                <input
                  type="date"
                  className="p-2 bg-gray-50/5 text-slate-400 rounded-md outline-none border-2 border-transparent focus:border-slate-500 transition-all"
                />
              </div>
              <div className="grid gap-2 ">
                <label htmlFor="gender" className="text-slate-400 text-sm">
                  Gender
                </label>
                <select
                  id="gender"
                  defaultValue="gender"
                  className="h-10 px-4 bg-gray-50/5 text-slate-400 rounded-md outline-none border-2 border-transparent focus:border-slate-500 transition-all"
                >
                  <option value="  Select Gender" hidden>
                    Select Gender
                  </option>
                  <option value="male" className="bg-slate-800 text-white">
                    Male
                  </option>
                  <option value="female" className="bg-slate-800 text-white">
                    Female
                  </option>
                  <option value="other" className="bg-slate-800 text-white">
                    Other
                  </option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <button className="p-2 rounded-md  border-2 border-slate-600 text-white hover:bg-gray-600 transition-all">
                  Cancel
                </button>
                <button className="p-2 rounded-md bg-green-600 text-white hover:bg-green-500 transition-all">
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
