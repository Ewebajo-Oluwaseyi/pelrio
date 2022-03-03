import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const router = useHistory();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
  }, [token, router]);
  return <>{children}</>;
};

export default PrivateRoute;
