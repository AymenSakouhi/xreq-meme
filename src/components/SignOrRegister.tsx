import React from "react";
import { Link } from "react-router-dom";

const SignOrRegister = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="bg-white border border-blue-400 flex flex-col items-center justify-around  shadow-sm  shadow-slate-600 m-10 rounded-lg w-80 h-64">
          <div>You can sign up or register</div>
          <div className="space-x-4">
            <Link
              className="border border-blue-200 bg-blue-500 text-white rounded-sm p-2 hover:bg-blue-600 hover:text-white"
              to={"/login"}
            >
              Sign in
            </Link>
            <Link to={"/register"}>Register</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignOrRegister;
