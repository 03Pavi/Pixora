import { Box, Typography } from "@mui/material";
import "./styles.css";
import Image from "next/image";
const ContactItem = () => {
  return (
    <Box className="contact-item">
      <Image
        src="https://cdn-icons-png.flaticon.com/512/6858/6858504.png"
        alt="Contact Icon"
        width={50}
        height={50}
      />
      <Box className="contact-info-wrapper">
        <Box className="contact-info">
          <Typography className="contact-name">John Doe</Typography>
          <Typography className="contact-last-message">Last message</Typography>
        </Box>
        <Box className="contact-time">
          <Typography className="contact-time">Today, 10:00 AM</Typography>
          <Typography className="contact-unread-message">5</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactItem;
