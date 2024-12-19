"use client";

import { List, ListItem } from "@mui/material";
import { useState } from "react";
import { items } from "./list-items";
import Image from "next/image";
import "./styles.css";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0);
  const router = useRouter();

  const handleItemClick = (index: number) => {
    setSelectedIndex(index);
    router.push(items[index].path);
  };

  return (
    <List className="sidebar-wrapper">
      <ListItem className="avatar-icon">
        <Image
          src="https://cdn-icons-png.flaticon.com/512/6858/6858504.png"
          alt="Sidebar Icon"
          width={50}
          height={50}
        />
      </ListItem>
      {items.map((item, index) => (
        <ListItem
          key={index}
          onClick={() => handleItemClick(index)}
          className={`list-item ${selectedIndex === index ? "selected" : ""}`}
        >
          {item.icon}
        </ListItem>
      ))}
    </List>
  );
};

export default Sidebar;
