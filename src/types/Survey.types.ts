// Options for the user's input value
export type TInputAnswer = string | number | boolean | Date;

export interface IAnswer {
  title: string;
  value: TInputAnswer;
}

// If the title of question is dynamic
export type TTemplateParams = { [key: string]: IAnswer };

export type TScreenType =
  | "single-choice"
  | "multiple-choice"
  | "boolean"
  | "input"
  | "info"
  | "date";

export interface IQuestion {
  id: string;
  title: string | ((params: TTemplateParams) => string);
  screenType: TScreenType;
  options: IAnswer[];
  nextQuestionId?: string | ((answer: IAnswer) => string | null);
  description?: string;
}

// To pass to a client component without functions
export interface IClientQuestion {
  id: string;
  title?: string;
  screenType: TScreenType;
  options: IAnswer[];
  description?: string;
  nextQuestionId?: string;
}
