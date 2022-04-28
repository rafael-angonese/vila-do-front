import { createContext, useEffect, useState } from "react";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [name, setName] = useState("");

  useEffect(() => {
    const storagedName = localStorage.getItem("name");
    // const storagedName =  JSON.parse(localStorage.getItem('name'))

    // console.log(storagedName);

    // setName(storagedName.name)
    setName(storagedName);
  }, []);

  const onSaveName = (name) => {
    setName(name);

    // const user ={
    //     name: name,
    //     id: 234
    // }
    // localStorage.setItem('name', JSON.stringify(user));

    localStorage.setItem("name", name);
  };

  const remove = () => {
    localStorage.removeItem("name");
    setName("");
  };

  return (
    <UserContext.Provider value={{ name, onSaveName, remove }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider };
export default UserContext;
