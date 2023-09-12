import {createSlice} from '@reduxjs/toolkit';
import {UserType} from '../../constants/types/userType';
import userActions from '../actions/userActions';
import storageData from '../../utils/handlers/asyncStore';
import {
  FulfilledAction,
  PendingAction,
  RejectedAction,
} from '../../constants/types/reduxType';

interface Props {
  user: UserType | null;
  loading: boolean;
}
const initialState: Props = {
  user: null,
  loading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(userActions.login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        storageData.setItem('user', action.payload.token);
      })
      .addMatcher<PendingAction>(
        action => action.type.endsWith('/pending'),
        state => {
          state.loading = true;
        },
      )
      .addMatcher<FulfilledAction | RejectedAction>(
        action =>
          action.type.endsWith('/fulfilled') ||
          action.type.endsWith('/rejected'),
        state => {
          state.loading = false;
        },
      );
  },
});

export default userSlice.reducer;
