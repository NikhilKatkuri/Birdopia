"use client";
import { FC, useEffect, useRef, useState } from "react";
import "./globals.css";
import RainEffect from "@/component/reusable/RainEffect";
const Page: FC = () => {
  const [isPasswordView, setisPasswordView] = useState(false);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [password, setPassword] = useState("");
  const [visibility, setvisibility] = useState(false);
  const [isLogin, setisLogin] = useState(true)
  useEffect(() => {
    if (passwordRef.current && passwordRef.current.value.length > 0) {
      setvisibility(true);
    } else {
      setvisibility(false);
    }
  }, [password]);

  return (
    <main className="relative min-h-screen h-auto  bg-[radial-gradient(#1D2B41_0%,#1D2B41_0%,#020509_100%)] ">
      <RainEffect />
      <div className="z-[200] relative overflow-hidden no-scroll-bar text-slate-400  py-8 min-h-screen    max-lg:gap-12  grid grid-cols-1 xl:grid-cols-[0.6fr_0.4fr]   px-2 sm:px-6 md:px-8 md:gap-4">
        <div className="h-full w-full  flex justify-center items-center">
          <div className="lg:flex">
            <div className="flex-auto">
              <h1 className="bg-[radial-gradient(138.06%_1036.51%_at_95.25%_-2.54%,_#7ED4FD_14.06%,#709DF7_51.02%,#4D78EF_79.09%)] bg-clip-text text-4xl sm:text-5xl leading-[1.2] tracking-tighter text-transparent sm:text-center sm:text-[3.8rem] sm:leading-[4.75rem] lg:text-left">
                Seamless Messaging, Zero Distractions
              </h1>
              <p className="mt-6 max-w-3xl text-xl leading-[2rem] sm:text-2xl sm:leading-[2.5rem] tracking-tight sm:text-center lg:text-left">
                Stay focused and connected with a clutter-free messaging
                experience designed for meaningful conversations.
              </p>
            </div>
          </div>
        </div>

        <div className="h-[44rem]  max-sm:py-6 max-md:py-12 backdrop-blur-lg lg:h-[90vh] w-full p-8 bg-white/5   rounded-xl flex items-center justify-center  max-w-[600px] max-xl:mx-auto">
          {isLogin? (
            <div className="flex items-center justify-between flex-col h-full w-full">
              <div className=""></div>
              <div className="flex items-center justify-center flex-col gap-8">
                <div className="text-center flex flex-col">
                  <h1 className="text-2xl md:text-3xl text-slate-100 font-medium ">
                    Welcome Back to Birdopia!
                  </h1>
                  <h2 className="text-center text-wrap max-w-80 mx-auto">
                    Experience seamless, distraction-free messaging for
                    meaningful conversations
                  </h2>
                </div>
                <div className="w-96 mx-auto">
                  <form action="" className="">
                    <div className="flex flex-col gap-6 w-80   mx-auto">
                      <div className="grid gap-2">
                        <label htmlFor="email">Email</label>
                        <input
                          className="h-12 sm:h-11 bg-gray-50/5 placeholder:text-slate-500 text-slate-50  px-2 rounded-md outline-0 focus:border-slate-500 w-full border-2 border-white/0"
                          id="email"
                          type="email"
                          placeholder="m@example.com"
                          required
                        />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="email">Password</label>
                        <div className="relative">
                          <input
                            ref={passwordRef}
                            value={password}
                            onChange={(e) => {
                              setPassword(e.target.value);
                            }}
                            className="h-12 sm:h-11 bg-gray-50/5 placeholder:text-slate-500 text-slate-50  px-2 rounded-md outline-0 focus:border-slate-500 w-full border-2 border-white/0"
                            id="password"
                            type={isPasswordView ? "text" : "password"}
                            required
                          />
                          {visibility && (
                            <button
                              onClick={() => {
                                setisPasswordView((prev) => !prev);
                              }}
                              type="button"
                              className="absolute right-4 my-2"
                            >
                              {isPasswordView ? (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="size-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                                  />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                  />
                                </svg>
                              ) : (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="size-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                                  />
                                </svg>
                              )}
                            </button>
                          )}
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="w-full py-3 bg-amber-500 text-white rounded-3xl shadow active:scale-90"
                      >
                        <span className="font-medium">Continue</span>
                      </button>
                      <div className="mt-6 text-center flex flex-col items-center text-slate-400">
                        <div className="flex gap-1 text-sm">
                          <p className="">Don&apos;t have an account?</p>
                          <button type="button"onClick={()=>{setisLogin(prev=>!prev)}} >Create new</button>
                        </div>
                        <div className="">
                          <span className="text-sm">forgotten password?</span>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <span className="text-sm text-slate-400 font-medium tracking-wide">
                By clicking continue, you agree to our Terms of Service and
                Privacy Policy.
              </span>
            </div>
          ) : (
            <div className="flex  justify-between flex-col h-full w-full">
              <div className="flex justify-between flex-col gap-4 w-full">
                <button onClick={()=>{setisLogin(prev=>!prev)}} className="flex gap-1 items-center hover:text-white">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                      />
                    </svg>
                  </span>
                  <span>Back</span>
                </button>
                <div className="text-left flex flex-col">
                  <h1 className="text-2xl md:text-3xl text-slate-100 font-medium ">
                    Welcome to Birdopia!
                  </h1>
                  <h2 className=" text-wrap">Let&apos;s create your account</h2>
                </div>
              </div>
              <div className="flex items-center justify-center flex-col gap-8 w-full h-full">
                <div className="w-full sm:w-96 md:w-[28rem] mx-auto">
                  <form action="" className="">
                    <div className="flex flex-col gap-6 w-full sm:w-96 md:w-[26rem]   mx-auto">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <label htmlFor="Name">First Name</label>
                          <input
                            className="h-12  sm:h-11 bg-gray-50/5 placeholder:text-slate-500 text-slate-50  px-2 rounded-md outline-0 focus:border-slate-500 w-full border-2 border-white/0"
                            id="Name"
                            type="text"
                            required
                          />
                        </div>
                        <div className="grid gap-2">
                          <label htmlFor="Name">Second Name</label>
                          <input
                            className="h-12  sm:h-11 bg-gray-50/5 placeholder:text-slate-500 text-slate-50  px-2 rounded-md outline-0 focus:border-slate-500 w-full border-2 border-white/0"
                            id="Name"
                            type="text"
                            required
                          />
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="email">Email</label>
                        <input
                          className="h-12 sm:h-11 bg-gray-50/5 placeholder:text-slate-500 text-slate-50  px-2 rounded-md outline-0 focus:border-slate-500 w-full border-2 border-white/0"
                          id="email"
                          type="email"
                          placeholder="m@example.com"
                          required
                        />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="email">Password</label>
                        <div className="relative">
                          <input
                            ref={passwordRef}
                            value={password}
                            onChange={(e) => {
                              setPassword(e.target.value);
                            }}
                            className="h-12 sm:h-11 bg-gray-50/5 placeholder:text-slate-500 text-slate-50  px-2 rounded-md outline-0 focus:border-slate-500 w-full border-2 border-white/0"
                            id="password"
                            type={isPasswordView ? "text" : "password"}
                            required
                          />
                          {visibility && (
                            <button
                              onClick={() => {
                                setisPasswordView((prev) => !prev);
                              }}
                              type="button"
                              className="absolute right-4 my-2"
                            >
                              {isPasswordView ? (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="size-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                                  />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                  />
                                </svg>
                              ) : (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="size-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                                  />
                                </svg>
                              )}
                            </button>
                          )}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 ">
                        <button
                          type="reset"
                          className="w-full py-2  border-2 border-slate-800 hover:bg-white/3 text-white rounded-3xl shadow active:scale-90"
                        >
                          <span className="font-medium">Cancel</span>
                        </button>
                        <button
                          type="submit"
                          className="w-full py-2  bg-green-500 text-white rounded-3xl shadow active:scale-90"
                        >
                          <span className="font-medium">Next</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <span className="text-sm text-slate-400 font-medium tracking-wide w-full mx-auto">
                By clicking continue, you agree to our Terms of Service and
                Privacy Policy.
              </span>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Page;
