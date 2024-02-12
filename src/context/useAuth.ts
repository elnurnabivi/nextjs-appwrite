//designing my hook

import { useContext } from "react";
import AuthContext from "./authContext";

//when we use hook, it will provide data which is in AuthContext

const useAuth = () => {
  const data = useContext(AuthContext);
  return data;
};

export default useAuth;
