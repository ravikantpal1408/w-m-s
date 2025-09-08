import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { setTheme } from "../store/themeSlice";

const ThemeStatus: React.FC = () => {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  const dispatch: AppDispatch = useDispatch();

  return (
    <div className="ms-2 ps-2 mt-1 pt-1">
      <h2>Current Theme: {darkMode ? "Dark 🌙" : "Light ☀️"}</h2>
      <div className="form-check form-switch mt-3">
        <input
          className="form-check-input"
          type="checkbox"
          checked={darkMode}
          onChange={(e) => dispatch(setTheme(e.target.checked))}
        />
        <label className="form-check-label">
          Toggle Theme (Two-Way Binding)
        </label>
      </div>
    </div>
  );
};

export default ThemeStatus;
