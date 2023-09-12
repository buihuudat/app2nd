import {createSlice} from '@reduxjs/toolkit';
import {followActions} from '../actions/followActions';
import {FollowType} from '../../constants/types/followType';

interface Props {
  follow?: FollowType;
  loading: boolean;
}

const initialState: Props = {
  loading: false,
};

const userSlice = createSlice({
  name: 'follow',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(followActions.getFollow.fulfilled, (state, action) => {
      state.follow = action.payload;
    });
  },
});

export default userSlice.reducer;
