import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

export const signIn = async (email: string, password: string) => {
  let authenticated = false;
  const user = signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("connection succeeded");
    })
    .catch((error) => {
      authenticated = false;
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });

  return authenticated;
};
