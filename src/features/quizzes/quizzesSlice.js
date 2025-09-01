import { createSlice } from "@reduxjs/toolkit";

export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            const quizId = action.payload.id;
            state.quizzes[quizId] = action.payload;
        }
    }
});


export const { addQuiz } = quizzesSlice.actions;