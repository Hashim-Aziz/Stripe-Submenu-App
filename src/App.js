import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Submenu from "./Submenu";
import Sidebar from "./Sidebar";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </>
  );
}

export default App;
