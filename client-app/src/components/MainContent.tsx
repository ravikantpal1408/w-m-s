import React from "react";
import { Box } from "@mui/material";
import ThemeStatus from "./ThemeStatus"; // adjust import path

const drawerWidth = 240;

const MainContent: React.FC = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
        vheight: "100vh",
        overflow: "auto",
      }}
    >
      {/* Your actual content */}
      <ThemeStatus />
    </Box>
  );
};

export default MainContent;
