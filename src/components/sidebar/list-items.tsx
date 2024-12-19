import { Box } from "@mui/material";
import { Bell, Exit, Home, Message, Settings } from "@/assets/icons";
import path from "path";

const IconWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box sx={{ width: "32px", height: "32px", display: "flex", alignItems: "center",zIndex:1 }}>
      {children}
    </Box>
  );
};

export const items = [
  {
    icon: (
      <IconWrapper>
        <Home />
      </IconWrapper>
    ),
    label: "Home",
    path: "/home",
  },
  {
    icon: (
      <IconWrapper>
        <Message />
      </IconWrapper>
    ),
    label: "Message",
    path: "/inbox",
  },
  {
    icon: (
      <IconWrapper>
        <Bell />
      </IconWrapper>
    ),
    label: "Bell",
    path: "/notification",
  },
  {
    icon: (
      <IconWrapper>
        <Settings />
      </IconWrapper>
    ),
    label: "Settings",
    path: "/settings",
  },
  {
    icon: (
      <IconWrapper>
        <Exit />
      </IconWrapper>
    ),
    label: "Exit",
    path: "/",
  },
];
