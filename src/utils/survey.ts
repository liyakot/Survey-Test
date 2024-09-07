import { surveyConfig } from "@/data/surveys";

export const isFirstQuestion = (surveyId: string, questionId: string) => {
  const firstSurveyId = Object.keys(surveyConfig)[0];
  const firstQuestionId = surveyConfig[firstSurveyId]?.[0]?.id;

  // Check if current survey and question are the first in the config
  return surveyId === firstSurveyId && questionId === firstQuestionId;
};
