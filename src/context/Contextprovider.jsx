import { createContext, useContext, useEffect, useState } from "react";
import fectching from "../API/fetching";

const statement = createContext();

export const Appcontext = ({ children }) => {
  
  const [listcard, setListcard] = useState([]);
  useEffect(() => {
    const fetchapi = async () => {
      try {
        const response = await fectching.get(
          "https://holiday-planner-4lnj.onrender.com/api/v1/tour"
        );
        console.log(response.data);
        setListcard(response.data);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data.message);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(listcard);
          console.log("errorr");
        }
      }
    };
    fetchapi();
  }, []);

  return (
    <statement.Provider value={{ listcard, setListcard }}>
      {children}
    </statement.Provider>
  );
};
export const mycontext = () => useContext(statement);
