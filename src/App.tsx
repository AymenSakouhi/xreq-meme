import React, { useEffect } from "react";
import Home from "./components/Home";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";

export type User = {
  email?: string;
  password?: string;
};

function App() {
  const [user, setUser] = React.useState<any>(null);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("user", user);
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  return <Home user={user} />;
}

export default App;
