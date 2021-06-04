import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

export const AppProvider = ({ childern }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const OpenSidebar = () => {
    setIsSidebarOpen(true);
  };
  const CloseSidebar = () => {
    setIsSidebarOpen(false);
  };
  const OpenSubmenu = () => {
    setIsSubmenuOpen(true);
  };
  const CloseSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        OpenSidebar,
        CloseSidebar,
        OpenSubmenu,
        CloseSubmenu,
        isSidebarOpen,
        isSubmenuOpen,
      }}
    >
      {childern}
    </AppContext.Provider>
  );
};

//custom hooks
export const useGlobalContext = () => {
  return useContext(AppContext);
};
