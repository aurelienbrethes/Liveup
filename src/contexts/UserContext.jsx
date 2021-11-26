import { createContext, useState } from "react";

const UserContext = createContext(null);

export default UserContext;

export const UserContextProvider = ({ children }) => {
  const [userLogin, setUserLogin] = useState([]);

  return (
    <UserContext.Provider value={{ userLogin, setUserLogin }}>
      {children}
    </UserContext.Provider>
  );
};
