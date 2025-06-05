import { createSlice } from '@reduxjs/toolkit';

const livesSlice = createSlice({
    name: 'lives',
    initialState: {
        livesCount: 0,
    },
    reducers: {
        addLives: (state, action) => {
            state.livesCount += action.payload;
        },
        resetLives: (state) => {
            state.livesCount = 0;
        },
    },
});

export const { addLives, removeLife, resetLives } = livesSlice.actions;

export default livesSlice.reducer;
