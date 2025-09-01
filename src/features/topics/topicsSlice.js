import { createSlice } from "@reduxjs/toolkit";

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
    }
  }
});

export const { addTopic } = topicsSlice.actions;
