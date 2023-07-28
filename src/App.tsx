import React from "react";
import Home from "./components/Home";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { signIn } from "./utils/auth_signing_password";

signIn("", "");

function App() {
  return <Home />;
}

export default App;
