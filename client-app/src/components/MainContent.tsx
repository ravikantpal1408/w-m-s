import React from "react";
import { Box } from "@mui/material";
import ThemeStatus from "./ThemeStatus"; // adjust import path

const MainContent: React.FC = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
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
