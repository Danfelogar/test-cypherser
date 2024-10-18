import {APP_URL} from '@env';
import {PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import { serviceBase } from '../../services/coreService';
import { UserDataState } from '../../types/userData';
import {isIOS, transformUserDataToUserFront, TypeActions, TypeMSMErrorGeneric, TypeSlices} from '../../utils';

const initialState: UserDataState = {
  loading: false,
  arrUserData: [],
  msmError: '',
  showMsmError: false,
  msmSuccessful: '',
  showMsmSuccessful: false,
};

export const userDataSlice = createSlice({
  name: TypeSlices.UserData,
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setArrUserData: (state, action) => {
      state.arrUserData = [...state.arrUserData, ...action.payload];
    },
    resetArrUserData: state => {
      state.arrUserData = [];
    },
    setMsmError: (state, action: PayloadAction<string>) => {
      state.msmError = action.payload;
      state.showMsmError = true;
    },
    clearMsmError: state => {
      state.msmError = '';
      state.showMsmError = false;
    },
    setMsmSuccessful: (state, action: PayloadAction<string>) => {
      state.msmSuccessful = action.payload;
      state.showMsmSuccessful = true;
    },
    clearMsmSuccessful: state => {
      state.msmSuccessful = '';
      state.showMsmSuccessful = false;
    },
  },
});

export const {
  setLoading,
  setArrUserData,
  clearMsmError,
  setMsmError,
  clearMsmSuccessful,
  setMsmSuccessful,
  resetArrUserData,
} = userDataSlice.actions;

//extensions

export const getDataUsers = createAsyncThunk(
  TypeActions.UserDataGet,
  async (_, {dispatch}) => {
    try {
      // : ResGeneric<{
      //   data: SingleUserData[];
      //   total: number;
      //   page: number;
      //   limit: number;
      // }>
      console.log(isIOS(),{APP_URL});
      const response = await serviceBase.get('/api/usuarios/');
      const { data } = response;

      if (data) {
        dispatch(setArrUserData(transformUserDataToUserFront(data)));
      }
    } catch (error) {
      const err = error as {message: string};
      if (err.message) {
        dispatch(setMsmError(err.message));
        console.error({err});
      } else {
        dispatch(setMsmError(TypeMSMErrorGeneric.GenericError));
      }
    } finally {
      dispatch(setLoading(false));
    }
  },
);

export const postDataUser = createAsyncThunk(
  TypeActions.UserDataCreate,
  async (_, {dispatch, getState}) => {
    const {userData} = getState() as {userData: UserDataState};
    try {
      dispatch(setLoading(true));
      const data = JSON.stringify({
        nombre: `Danfelogar ${userData.arrUserData.length + 1}`,
        edad: `${Math.floor(Math.random() * 100)}`,
      });

      const response = await serviceBase.post('/api/usuarios/', data);

      if (response.data) {
        // definir un msm de exito aqui con toast de react native
        dispatch(setMsmSuccessful('Usuario creado exitosamente'));
        dispatch(resetArrUserData());
        dispatch(getDataUsers());
      }
    } catch (error) {
      const err = error as {message: string};
      if (err.message) {
        dispatch(setMsmError(err.message));
      } else {
        dispatch(setMsmError(TypeMSMErrorGeneric.GenericError));
      }
    } finally {
      dispatch(setLoading(false));
    }
  },
);

export const deleteSingleDataUser = createAsyncThunk(
  TypeActions.UserDataDelete,
  async (id: string | number, {dispatch}) => {
    try {
      dispatch(setLoading(true));
      const response =
        await serviceBase.delete(`/api/usuarios/${id}/`);
        console.log({response}, response?.data);
        // definir un msm de exito aqui con toast de react native
        dispatch(
          setMsmSuccessful(
            `Usuario con id:${id} fue eliminado exitosamente`,
          ),
        );
        dispatch(resetArrUserData());
        dispatch(getDataUsers());
    } catch (error) {
      const err = error as {message: string};
      if (err.message) {
        dispatch(setMsmError(err.message));
      } else {
        dispatch(setMsmError(TypeMSMErrorGeneric.GenericError));
      }
    } finally {
      dispatch(setLoading(false));
    }
  },
);

export default userDataSlice.reducer;