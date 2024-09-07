import { notFound, redirect } from "next/navigation";

import { surveyConfig } from "@/data/surveys";

export default async function HomePage() {
  const surveyIds = Object.keys(surveyConfig);

  if (surveyIds.length === 0) {
    notFound();
  }

  const firstSurveyId = surveyIds[0];
  const firstQuestion = surveyConfig[firstSurveyId]?.[0];

  if (!firstQuestion) {
    notFound();
  }

  redirect(`/${firstSurveyId}/${firstQuestion.id}`);

  return null;
}
