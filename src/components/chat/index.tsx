import { Call, Mic, More, Video } from "@/assets/icons";
import { Box, IconButton, TextField, Typography } from "@mui/material";
import Image from "next/image";
import "./styles.css";

const Chat = () => {
  return (
    <Box className="chat-wrapper">
      <Box className="user-information-action">
        <Image
          src="https://cdn-icons-png.flaticon.com/512/6858/6858504.png"
          alt="User Icon"
          width={50}
          height={50}
        />
        <Box className="user-details">
          <Typography className="user-name">John Doe</Typography>
          <Typography className="user-last-seen">online . LastSeen</Typography>
        </Box>
        <Box className="user-action">
          <IconButton>
            <Call />
          </IconButton>
          <IconButton>
            <Video />
          </IconButton>
          <IconButton>
            <More />
          </IconButton>
        </Box>
      </Box>
      <Box className="chat-area-wrapper">
        <Box className="chat-area">
          <Typography className="chat-message">Hello</Typography>
          <Typography className="chat-message">Hello</Typography>
          <Typography className="chat-message">Hello</Typography>
          <Typography className="chat-message">Hello</Typography>
          <Typography className="chat-message">Hello</Typography>
          <Typography className="chat-message">Hello</Typography>
          <Typography className="chat-message">Hello</Typography>
        </Box>
      </Box>
      <Box className="chat-input-wrapper">
        <TextField className="chat-input" />
      </Box>
    </Box>
  );
};

export default Chat;
