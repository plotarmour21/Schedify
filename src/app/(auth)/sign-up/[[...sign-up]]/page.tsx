import { SignUp } from "@clerk/nextjs";
import React from "react";

export default function page() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white p-8 rounded-lg shadow-lg backdrop-blur-sm bg-opacity-80 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl flex justify-center items-center">
        <SignUp />
      </div>
    </div>
  );
}
