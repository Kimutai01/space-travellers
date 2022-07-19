import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from '../redux/missions/missions';
import rocketReducer from '../redux/rocket/rocket';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
    rockets: rocketReducer,
  },
});

export default store;
