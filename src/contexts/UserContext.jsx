import axios from "axios";
import { createContext, useEffect, useState } from "react";

const UserContext = createContext(null);

export default UserContext;

export const UserContextProvider = ({ children }) => {
  const [userLogin, setUserLogin] = useState([]);
  console.log(userLogin);
  useEffect(() => {
    axios
      .get("https://wild-liveup.herokuapp.com/login", { withCredentials: true })
      .then((res) => res.data)
      .then((data) => setUserLogin(data));
  }, []);

  return (
    <UserContext.Provider value={{ userLogin, setUserLogin }}>
      {children}
    </UserContext.Provider>
  );
};
