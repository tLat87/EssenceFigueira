import { createSlice } from '@reduxjs/toolkit';

const savedFactsSlice = createSlice({
    name: 'savedFacts',
    initialState: {
        facts: [],
    },
    reducers: {
        addFact: (state, action) => {
            const newFact = action.payload;
            const isAlreadySaved = state.facts.some(fact => fact.id === newFact.id);

            if (!isAlreadySaved) {
                state.facts.push(newFact);
            }
        },
        removeFact: (state, action) => {
            const idToRemove = action.payload;
            state.facts = state.facts.filter(fact => fact.id !== idToRemove);
        },
        clearFacts: (state) => {
            state.facts = [];
        },
    },
});

export const { addFact, removeFact, clearFacts } = savedFactsSlice.actions;

export default savedFactsSlice.reducer;
