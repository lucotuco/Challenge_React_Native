import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false); 

  const login = async (email, password) => {
    setLoading(true);

    try {
      const response = await fakeLogin(email, password); 
      setUser({ email, response });
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    } finally {
      setLoading(false);
    }
  };

  const fakeLogin = async (email, password) => {
    let token;
    try {
      const response = await fetch("http://challenge-react.alkemy.org/?email="+ email +"&password=" + password, {
        method: "POST",
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        token = data;
      } else {
        console.log("Request failed:", response.status);
        alert("Usuario o contraseña incorrectos");
      }
    } catch (error) {
      console.error(error);
    }
    return token;
  };

  const logout = async () => {
    setUser(null);
  };

  const signup = async (email, password) => {

  };

  const value = {
    user,
    loading,
    login,
    logout,
    signup,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

