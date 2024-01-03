/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState, useContext, useEffect } from "react";
import { supabase } from "supabaseClient/client";

const userContext = createContext();

export function useAuth() {
  const ctx = useContext(userContext);
  if (ctx === undefined) {
    throw new Error("useAuth must be used within a UserProvider");
  }
  return ctx;
}

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      if (event == "SIGNED_IN" || session) {
        setUser((prev) => prev || session?.user);
      }
    });
    return () => data.subscription.unsubscribe();
  }, [setUser]);

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};
