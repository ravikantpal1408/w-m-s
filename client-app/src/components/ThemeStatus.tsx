import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { setTheme } from "../store/themeSlice";
import { fetchUser_ } from "../store/userSlice";

const ThemeStatus: React.FC = () => {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  const { user, loading, error } = useSelector(
    (state: RootState) => state.user
  );
  const dispatch: AppDispatch = useDispatch();

  if (loading) return <p>Loading user...</p>;

  if (error) return <p style={{ color: "red" }}>{error}</p>;

  const handleUser = async () => {
    await dispatch(fetchUser_());
  };

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
      <button className="btn btn-primary mt-3" onClick={handleUser}>
        Log User Info
      </button>
      {user && (
        <div className="mt-3">
          <h4>User Details</h4>
          <p>ID: {user[0].id}</p>
          <p>Name: {user[0].name}</p>
          <p>Email: {user[0].email}</p>
        </div>
      )}
    </div>
  );
};

export default ThemeStatus;
