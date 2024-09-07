"use server";

import { surveyConfig } from "@/data/surveys";

import { IAnswer, TTemplateParams } from "@/types/Survey.types";

export async function getNextQuestionId(
  surveyId: string,
  questionId: string,
  answer: IAnswer,
) {
  const question = await surveyConfig[surveyId]?.find(
    (question) => question.id === questionId,
  );

  if (!question || !question.nextQuestionId) return null;

  if (typeof question.nextQuestionId === "string") {
    return question.nextQuestionId;
  }
  return question.nextQuestionId(answer);
}

export async function getQuestionTitle(
  surveyId: string,
  questionId: string,
  params: TTemplateParams,
) {
  const question = await surveyConfig[surveyId]?.find(
    (question) => question.id === questionId,
  );

  if (!question || !question?.title) return null;

  if (typeof question.title === "string") {
    return question.title;
  }

  return question?.title(params);
}
