import React, { createContext, useState } from "react";

export const FormDataContext = createContext();
const FormDataContextProvider = ({ children }) => {
  const [userInformation, setUserInformation] = useState({
    profile: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      bio: "",
    },
    interset: {
      interests: [],
      moreInformation: "",
    },
    setting: {
      darkMode: false,
      language: "english",
    },
  });
  return (
    <FormDataContext.Provider value={{ userInformation, setUserInformation }}>
      {children}
    </FormDataContext.Provider>
  );
};

export default FormDataContextProvider;
