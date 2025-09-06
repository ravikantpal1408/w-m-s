import React, { useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { toggleTheme } from "../store/themeSlice";
import { Switch, FormControlLabel } from "@mui/material";
import { LightMode, DarkMode } from "@mui/icons-material";

const Header: React.FC = () => {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("bg-dark", "text-white");
    } else {
      document.body.classList.remove("bg-dark", "text-white");
    }
  }, [darkMode]);

  return (
    <Navbar
      expand="lg"
      className={darkMode ? "navbar-purple" : "navbar-purple"}
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="#">MyApp</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Contact</Nav.Link>
        </Nav>

        {/* Material UI Toggle Switch */}
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
      </Container>
    </Navbar>
  );
};

export default Header;
