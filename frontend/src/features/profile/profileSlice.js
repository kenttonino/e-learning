import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import UserAuthApi from '../../helpers/UserAuthApi';

export const getProfile = createAsyncThunk('followings/id', async (params) => {
    const response = await UserAuthApi.getFollowings(params);

    return response.json();
  }
);

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    index: [],
    status: null, 
  },

  extraReducers: {
    [ getProfile.pending ]: (state) => {
      state.status = 'loading'
    },

    [ getProfile.fulfilled ]: (state, {payload}) => {
      state.index = payload
      state.status = 'success'
    },

    [ getProfile.rejected ]: (state) => {
      state.status = 'failed'
    }
  }
});

export default profileSlice.reducer;
