import React, { SetStateAction } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../utils/auth_signing_password";

// type Props = {
//   cb: React.Dispatch<SetStateAction<string>>;
// };

const NotAuthenticated = () => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const Navigate = useNavigate();

  const inputOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>you may identify below</h1>
      <div className="grid grid-cols-6 gap-3 mx-3">
        <input
          name="email"
          type="text"
          className="col-span-3 p-2 border rounded-2xl space-x-4"
          placeholder="email"
          value={email}
          onChange={inputOnchange}
        />
        <input
          name="password"
          type="password"
          className="col-span-3 p-2 border rounded-2xl space-x-2"
          placeholder="password"
          value={password}
          onChange={inputOnchange}
        />
        <button
          className="col-span-2 bg-blue-500 text-yellow-300 rounded-xl hover:bg-slate-500 hover:text-white"
          onClick={() => {
            signIn(email, password).then(() => {
              Navigate("/");
            });
          }}
        >
          Login
        </button>
        <button className="col-span-2 bg-blue-500 text-yellow-300 rounded-xl hover:bg-slate-500 hover:text-white">
          <Link to="/">register</Link>
        </button>
      </div>
    </div>
  );
};

export default NotAuthenticated;
