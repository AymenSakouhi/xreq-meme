import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { Link } from "react-router-dom";

type Props = {
  user: any;
};

const Home = ({ user }: Props) => {
  useEffect(() => {
    console.log("user", user);
  }, [user]);

  const singOut = () => {
    console.log("sign out");
    signOut(auth)
      .then(() => {
        console.log("sign out success");
      })
      .catch((error) => {
        console.log("sign osut error");
      });
  };

  return (
    <div>
      <div>Hello {user?.email}</div>
      {user ? (
        <button onClick={singOut}>Sign out</button>
      ) : (
        <Link
          className="border border-blue-200 bg-blue-500 text-white rounded-sm p-2 hover:bg-blue-600 hover:text-white"
          to={"/login"}
        >
          Sign in
        </Link>
      )}
    </div>
  );
};

export default Home;
