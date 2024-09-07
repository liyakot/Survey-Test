import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IAnswer } from "@/types/Survey.types";

interface SurveyState {
  answers: { [surveyId: string]: { [questionId: string]: IAnswer } };
}

const initialState: SurveyState = {
  answers: {},
};

const surveySlice = createSlice({
  name: "survey",
  initialState,
  reducers: {
    addAnswer: (
      state,
      action: PayloadAction<{
        surveyId: string;
        questionId: string;
        answer: IAnswer;
      }>,
    ) => {
      const { surveyId, questionId, answer } = action.payload;
      if (!state.answers[surveyId]) {
        state.answers[surveyId] = {};
      }
      state.answers[surveyId][questionId] = answer;
    },
  },
});

export const { addAnswer } = surveySlice.actions;
export default surveySlice.reducer;
