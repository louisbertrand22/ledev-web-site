import { useState, createContext, useContext } from "react";

const UserContext = createContext();

function Test() {
  const [user] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component5 />
    </UserContext.Provider>
  );
}


function Component5() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}
export default Test;