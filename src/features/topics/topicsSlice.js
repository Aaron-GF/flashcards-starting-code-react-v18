import { createSlice } from "@reduxjs/toolkit";
import { addQuiz } from "../quizzes/quizzesSlice";

export const topicsSlice = createSlice({
  name: "topics",
  initialState: {
    topics: {},
  },
  reducers: {
    addTopic: (state, action) => {
      const topicId = action.payload.id;
      state.topics[topicId] = action.payload;
      state.topics[topicId].quizIds = [];
    },
  },
  extraReducers: {
    "quizzes/addQuiz": (state, action) => {
      const { topicId, id } = action.payload;
      state.topics[topicId].quizIds.push(id);
    }
  }
});

export const { addTopic, addQuizIdForTopic } = topicsSlice.actions;
