import {combineReducers} from '@reduxjs/toolkit';

import settings from './slices/settings';
import userData from './slices/userData';

export const rootReducer = combineReducers({
  settings,
  userData,
});