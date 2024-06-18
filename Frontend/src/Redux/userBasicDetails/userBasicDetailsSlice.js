import { createSlice } from "@reduxjs/toolkit";


export const userBasicDetailsSlice = createSlice({
  name: "user_basic_details",
  initialState: {
    name: null,
    profile_pic: null,
  },

  reducers: {
    set_user_basic_details: (state, actions) => {
      state.name = actions.payload.name;
      state.profile_pic = actions.payload.profile_pic;
    },

  },

});


export const {set_user_basic_details} = userBasicDetailsSlice.actions
export default userBasicDetailsSlice.reducer



