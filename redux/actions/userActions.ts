import {createAsyncThunk} from '@reduxjs/toolkit';
import {UserType} from '../../constants/types/userType';
import {LoginType, RegisterType} from '../../constants/types/authType';
import authApi from '../../utils/api/authApi';

const userActions = {
  login: createAsyncThunk<{user: UserType; token: string}, LoginType>(
    'user/login',
    async ({email, password}, thunkAPI) => {
      try {
        const res = await authApi.login({email, password});
        return res.data;
      } catch (error: any) {
        if (error.data) {
          return thunkAPI.rejectWithValue(error.data);
        }
        throw error;
      }
    },
  ),
  register: createAsyncThunk<{user: UserType; token: string}, RegisterType>(
    'user/login',
    async (InitialRegiter, thunkAPI) => {
      try {
        const res = await authApi.register(InitialRegiter);
        return res.data;
      } catch (error: any) {
        if (error.data) {
          return thunkAPI.rejectWithValue(error.data);
        }
        throw error;
      }
    },
  ),
};

export default userActions;
