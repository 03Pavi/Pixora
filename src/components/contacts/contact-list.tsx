import React from "react";
import ContactItem from "./contact-item";
import { Box, Typography } from "@mui/material";
import "./styles.css";

interface IProps {
  title: string;
}

const ContactList = ({ title }: IProps) => {
  return (
    <Box className="contact-list">
      <Typography className="contact-list-title">{title}</Typography>
      {[1, 2, 3].map((item, index) => {
        return <ContactItem key={index} />;
      })}
    </Box>
  );
};

export default ContactList;
