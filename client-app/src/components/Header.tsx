import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { toggleTheme } from "../store/themeSlice";
import {
  Switch,
  FormControlLabel,
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { LightMode, DarkMode } from "@mui/icons-material";

const Header: React.FC = () => {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  const user = useSelector((state: RootState) => state.user);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    console.log("User Info from header component ℹ️:", user);
    if (darkMode) {
      document.body.classList.add("bg-dark", "text-white");
    } else {
      document.body.classList.remove("bg-dark", "text-white");
    }
  }, [darkMode, user]);

  const drawerWidth = 240;

  return (
    <AppBar
      position="fixed"
      className={darkMode ? "navbar-purple" : "navbar-purple"}
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
      }}
    >
      <Toolbar>
        {/* Brand */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {user.name ? `Welcome, ${user.name}` : "MyApp"}
        </Typography>

        {/* Nav Links */}
        <Box sx={{ display: "flex", gap: 2, mr: 3 }}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Contact</Button>
        </Box>

        {/* Dark Mode Toggle */}
        <FormControlLabel
          control={
            <Switch
              checked={darkMode}
              onChange={() => dispatch(toggleTheme())}
              color="default"
            />
          }
          label={darkMode ? <DarkMode /> : <LightMode />}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
