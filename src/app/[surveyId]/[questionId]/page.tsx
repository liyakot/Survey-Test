"use server";

import { notFound } from "next/navigation";

import { surveyConfig } from "@/data/surveys";

import { IClientQuestion } from "@/types/Survey.types";

import SurveyQuestion from "@/components/Survey";

interface ScreenProps {
  params: {
    surveyId: string;
    questionId: string;
  };
}

export async function generateStaticParams() {
  const paths = Object.keys(surveyConfig).flatMap((surveyId) => {
    return surveyConfig[surveyId].map((question) => ({
      surveyId,
      questionId: question.id,
    }));
  });

  return paths.map(({ surveyId, questionId }) => ({
    params: { surveyId, questionId },
  }));
}

const SurveyPage = async ({ params }: ScreenProps) => {
  const { surveyId, questionId } = params;

  if (!surveyConfig[surveyId]) {
    notFound();
  }

  const question = surveyConfig[surveyId].find(
    (question) => question.id === questionId,
  );

  if (!question) {
    notFound();
  }

  // New object to pass to SurveyQuestion and checking the title and nextQuestionId types
  const clientQuestion: IClientQuestion = {
    ...question,
    title: typeof question.title === "string" ? question.title : undefined,
    nextQuestionId: !question.nextQuestionId
      ? "/final"
      : typeof question.nextQuestionId === "string"
        ? question.nextQuestionId
        : undefined,
  };

  return <SurveyQuestion question={clientQuestion} surveyId={surveyId} />;
};

export default SurveyPage;
