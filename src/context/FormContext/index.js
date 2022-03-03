import React, { useContext, createContext, useState } from "react";
export const FormContext = createContext(null);

export const useFormContext = () => {
  return useContext(FormContext);
};
const FormContextWrapper = ({ children }) => {
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [pageLoader, setPageLoader] = useState(false);
  const [info, setInfo] = useState();
  const [status, setStatus] = useState(1);
  const [isDisabled, setIsDisabled] = useState(false);
  const handleChange = ({ target: { name, value } }) => {
    setDetails((form) => {
      return {
        ...form,
        [name]: value,
      };
    });
  };
  return (
    <FormContext.Provider
      value={{
        details,
        pageLoader,
        info,
        status,
        isDisabled,
        setDetails,
        setPageLoader,
        setInfo,
        setStatus,
        setIsDisabled,
        handleChange,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContextWrapper;
