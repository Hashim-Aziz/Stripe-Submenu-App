import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
  const {
    isSubMenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();

  //useRef hook is use fro inline styling of submenu box
  const container = useRef(null);
  const [columns, setColumns] = useState("col-2");

  //useEffect hook is use to dynamically se the position/style of submenu box with respect to hover navbar link
  useEffect(() => {
    setColumns("col-2");
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;

    if (links.length === 3) {
      setColumns("col-3");
    }
    if (links.length > 3) {
      setColumns("col-4");
    }
  }, [location, links]);

  return (
    <aside
      className={`${isSubMenuOpen ? "submenu show" : "submenu"}`}
      ref={container}
    >
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <a href={url} key={index}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
