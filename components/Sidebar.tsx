import React from "react";
import { useState } from "react";
import { Menu, MenuList } from "@chakra-ui/react";
import styles from "./Sidebar.module.css";
import SidebarItem from "./SidebarItem";

function Sidebar({
  isOpen,
  children,
}: {
  isOpen: boolean;
  children: React.ReactNode;
}) {
  return (
    // contraction and retraction of sidebar
    <div
      className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}
    >
      {/* Sidebar content goes here */}
      <div className={styles.menu}>
        {/* Header of sidebar */}
        <div>
          <h1 className={styles.appName}>Enchanted Oasis</h1>
          <br />
          <nav>{children}</nav>
        </div>

        {/* Footer of the sidebar */}
        <div className={styles.out}>
          <li>Logout</li>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;