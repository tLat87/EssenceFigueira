import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isVibrationOn: true,
    isMusicOn: true,
};

const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setVibration: (state, action) => {
            state.isVibrationOn = action.payload;
        },
        setMusic: (state, action) => {
            state.isMusicOn = action.payload;
        },
    },
});

export const { setVibration, setMusic } = settingsSlice.actions;
export default settingsSlice.reducer;
