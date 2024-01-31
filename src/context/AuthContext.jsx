import { useContext, createContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import {
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInAnonymously,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const signUp = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", email), {
        savedShows: [],
      });
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  };

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const anonymousLogin = async () => {
    try {
      await signInAnonymously(auth);
    } catch (error) {
      console.log(error);
    }
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{ signUp, user, logIn, logOut, anonymousLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
