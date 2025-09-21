import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import UserService from "../services/UserService";
import { User } from "../models/UserModel";

interface UserState {
  user: User[] | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
};

export const fetchUser_ = createAsyncThunk<User[]>(
  "user/fetchUser",
  async (_, { rejectWithValue }) => {
    try {
      const data = await UserService.fetchUser();
      return data;
    } catch (err: unknown) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }
      return rejectWithValue("An unknown error occurred");
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User[]>) => {
      if (action.payload && Object.keys(action.payload).length > 0) {
        state.user = action.payload;
      } else {
        state.user = null;
      }
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser_.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser_.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchUser_.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearUser } = userSlice.actions;
export default userSlice.reducer;
