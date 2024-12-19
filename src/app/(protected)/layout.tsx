import Sidebar from "@/components/sidebar";
import { Box } from "@mui/material";
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box className="root-layout">
      <Sidebar/>
      <Box className="children-wrapper">
        {children}
      </Box>
    </Box>
  );
};

export default RootLayout;
