import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import surveySlice from "@/lib/features/SurveySlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      survey: surveySlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type TRootState = ReturnType<AppStore["getState"]>;
export type TAppDispatch = AppStore["dispatch"];

export const useAppDispatch = () => useDispatch<TAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
