import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import UserAuthApi from '../../helpers/UserAuthApi';

export const getDashboard = createAsyncThunk('dashboard/id', async (params) => {
    const response = await UserAuthApi.getAll(params);

    return response.json();
  }
)

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    index: [],
    status: null, 
  },

  extraReducers: {
    [ getDashboard.pending ]: (state) => {
      state.status = 'loading'
    },

    [ getDashboard.fulfilled ]: (state, {payload}) => {
      state.index = payload
      state.status = 'success'
    },

    [ getDashboard.rejected ]: (state) => {
      state.status = 'failed'
    }
  }
});

export default dashboardSlice.reducer;
