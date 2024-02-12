//creating context is like creating a provider

import { createContext } from "react";

export const AuthContext = createContext<{
  authStatus: boolean;
  setAuthStatus: (status: boolean) => void;
}>({
  //giving boolean value, and ability to update the value
  authStatus: false,
  setAuthStatus: () => {},
});

//provider(wrap everything, it's a wrapping box)

export const AuthProvider = AuthContext.Provider;
export default AuthContext;
