import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    "name": "Blue Mountain",
    "trails": {
        "Rinus Run": {
            "isCompleted": false,
            "runCounter": 0
        },
        "Crooked Oak": {
            "isCompleted": false,
            "runCounter": 0
        },
        "Apple Bowl": {
            "isCompleted": false,
            "runCounter": 0
        }
    }
};

//increment runs by one
//change run status boolean value

export const trailsSlice = createSlice({
    name: 'trails',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        increment: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.trails[action.payload].runCounter += 1;
        },
        decrement: (state, action) => {
            state.trails[action.payload].runCounter -= 1;
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        isCompleted: (state, action) => {
            state.trails[action.payload].isCompleted = !state.trails[action.payload].isCompleted;
        },
    },
    // The `extraReducers` field lets the slice handle actions defined elsewhere,
    // including actions generated by createAsyncThunk or in other slices.
});

export const { increment, decrement, isCompleted } = trailsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectTrails = (state) => state.trails;

export default trailsSlice.reducer;
