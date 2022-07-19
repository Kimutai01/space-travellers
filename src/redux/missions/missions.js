import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = createAsyncThunk(
  'missions/FETCH_MISSIONS',
  async () => {
    const response = await fetch(url);
    const data = await response.json();
    const mappedData = data.map((mission) => ({
      id: mission.mission_id,
      name: mission.mission_name,
      description: mission.description,
      manufacturer: mission.manufacturers[0],
      wiki: mission.wikipedia,
      joined: false,
    }));
    return mappedData;
  },
);

export const missionsSlice = createSlice({
  name: 'missions',
  initialState: [],
  reducers: {
    updateMission: (state, action) => state.map((mission) => {
      if (mission.id === action.payload) {
        return { ...mission, joined: !mission.joined };
      }
      return mission;
    }),
  },
  extraReducers: {
    [fetchMissions.fulfilled]: (state, action) => action.payload,
  },
});

export const { updateMission } = missionsSlice.actions;

export default missionsSlice.reducer;
