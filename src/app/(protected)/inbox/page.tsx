import Chat from "@/components/chat";
import Contacts from "@/components/contacts";
import { Box } from "@mui/material";
import "./styles.css"

const page = () => {
  return (
    <Box className="inbox-wrapper">
      <Contacts />
      <Chat/>
    </Box>
  );
};

export default page;
