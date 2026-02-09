import { useCallback } from "react";
import { useState } from "react";
import { httpLogin } from "./requests";

function useAuth() {
  const [loginData, saveLoginData] = useState(null);

  const login = useCallback(async () => {
    console.log("Logging in...");
    const response = await httpLogin();
    saveLoginData(response);
  }, []);

  const logout = useCallback(() => {
    saveLoginData(null);
    console.log("Logged out");
  }, []);

  return { loginData, login, logout };
}

export default useAuth;
