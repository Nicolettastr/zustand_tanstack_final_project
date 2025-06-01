import { createContext, useContext, useEffect, useState } from "react";
import { InsertarUsuario, MostrarUsuarios, supabase } from "../index";
const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session?.user == null) {
          setUser(null);
        } else {
          setUser(session?.user);
          InsertarUser(session?.user);
        }
      }
    );
    return () => {
      authListener.subscription;
    };
  }, []);
  async function InsertarUser(p) {
    const response = await MostrarUsuarios({ id_auth: p.id });
    if (response) {
      return;
    } else {
      const puser = {
        names: p.email,
        email: p.email,
        id_auth_supabase: p.id,
      };
      await InsertarUsuario(puser);
    }
  }
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
export const UserAuth = () => {
  return useContext(AuthContext);
};
