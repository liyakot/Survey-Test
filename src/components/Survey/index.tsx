"use client";

import { FC, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useAppDispatch, useAppSelector } from "@/lib/store";
import { addAnswer } from "@/lib/features/SurveySlice";

import {
  getNextQuestionId,
  getQuestionTitle,
} from "@/app/actions/surveyActions";

import { BackIconComponent } from "@/components/ui/BackIcon";
import { ButtonComponent } from "@/components/ui/Button";
import { LogoIconComponent } from "@/components/ui/LogoIcon";

import { IAnswer, IClientQuestion } from "@/types/Survey.types";

import { isFirstQuestion } from "@/utils/survey";

import styles from "./index.module.scss";

interface ISurveyProps {
  question: IClientQuestion;
  surveyId: string;
}

const SurveyQuestion: FC<ISurveyProps> = ({ question, surveyId }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const answers = useAppSelector((state) => state.survey.answers[surveyId]);

  const [title, setTitle] = useState(question.title);
  const [loading, setLoading] = useState(false);

  // Handle navigation back
  const handleBackClick = () => {
    router.back();
  };

  const handleOptionClick = async (answer: IAnswer) => {
    // Info screenType for intermediate pages that contain only additional information
    if (question.screenType !== "info") {
      dispatch(addAnswer({ surveyId, questionId: question.id, answer }));
    }

    let nextQuestionId: string | null;
    if (question.nextQuestionId) {
      nextQuestionId = question.nextQuestionId;
    } else {
      nextQuestionId = await getNextQuestionId(surveyId, question.id, answer);
    }

    if (nextQuestionId) {
      router.push(`/${surveyId}/${nextQuestionId}`);
    } else {
      router.push(`/not-found`);
    }
  };

  // Update the dynamic question title
  const updateTitle = async () => {
    setLoading(true);
    const newTitle = await getQuestionTitle(surveyId, question.id, answers);
    if (newTitle) {
      setTitle(newTitle);
    } else {
      router.push(`/not-found`);
    }
    setLoading(false);
  };

  useEffect(() => {
    /*When the page reloads, direct the user to the home page
    (if the data is stored in the database or cookies in the future, then change this logic)*/
    if (!answers && !isFirstQuestion(surveyId, question.id)) {
      router.push("/");
    }
    if (question && !question.title && answers) {
      updateTitle();
    }
  }, []);

  return (
    <div
      className={`global-container ${styles.container} ${question.screenType === "info" && styles.info}`}
    >
      {loading ? (
        <div className={styles.loader}>Loading...</div>
      ) : (
        <>
          <div className={styles.header}>
            {!isFirstQuestion(surveyId, question.id) && (
              <BackIconComponent
                variant={question.screenType === "info" ? "light" : "dark"}
                onClick={handleBackClick}
              />
            )}
            <LogoIconComponent
              variant={question.screenType === "info" ? "light" : "dark"}
            />
          </div>

          <div className={styles.content}>
            <h1 className={`h1 ${styles.title}`}>{title}</h1>
            {question?.description && (
              <div className={`body-text ${styles.description}`}>
                {question?.description}
              </div>
            )}

            <ul className={styles.optionsList}>
              {question.options?.map((option, key) => (
                <li key={key}>
                  <ButtonComponent
                    title={option.title}
                    variant={
                      question.screenType === "info" ? "light" : "default"
                    }
                    onClick={() => handleOptionClick(option)}
                  />
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default SurveyQuestion;
