import { RootState } from "@/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProfileState {
  name: string;
  age: number;
  bio: string;
}

const initialState: ProfileState = {
  name: "",
  age: 0,
  bio: "",
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<ProfileState>) => {
      (state.name = action.payload.name),
        (state.age = action.payload.age),
        (state.bio = action.payload.bio);
    },
    updateBio: (state, action: PayloadAction<string>) => {
      state.bio = action.payload;
    },
  },
});

export const { setProfile, updateBio } = profileSlice.actions;
export const selectProfile = (state: RootState) => state.profile;
export default profileSlice.reducer;
