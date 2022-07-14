import React from "react";
import Provider from "../../store/contexts/ShoppingContext";
import Header from "../Header/Header";
import { ToastContainer } from "react-toastify";

const Layout = ({ children }) => {
  return (
    <Provider>
      <Header />
      {children}
      <ToastContainer />
    </Provider>
  );
};

export default Layout;
