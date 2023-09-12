import {createAsyncThunk} from '@reduxjs/toolkit';
import {FollowType} from '../../constants/types/followType';
import {followApi} from '../../utils/api/followApi';

export const followActions = {
  getFollow: createAsyncThunk<FollowType, string>(
    'follow/getFollow',
    async userId => {
      try {
        const res = await followApi.getFollow(userId);
        return res.data;
      } catch (error) {
        throw error;
      }
    },
  ),

  followAction: createAsyncThunk('follow/action', async () => {}),
};
