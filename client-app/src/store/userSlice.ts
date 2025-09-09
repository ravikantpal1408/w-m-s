import { createSlice } from "@reduxjs/toolkit";

interface UserSlice {
    name: String;
    email: String;
}

const initialState: UserSlice = {
    name: '',
    email: ''
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {

    setUser: (state, action) => {
        state.email = action.payload.email;
        state.name = action.payload.name;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
