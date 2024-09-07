import { IQuestion, IAnswer } from "@/types/Survey.types";

export const surveyConfig: { [key: string]: IQuestion[] } = {
  survey1: [
    {
      id: "gender",
      title: "Select your gender:",
      screenType: "single-choice",
      options: [
        {
          value: "female",
          title: "Female",
        },
        { value: "male", title: "Male" },
      ],
      nextQuestionId: "relationship-status",
    },
    {
      id: "relationship-status",
      title:
        "So we can get to know you better, tell us about your relationship status.",
      screenType: "single-choice",
      options: [
        {
          value: "single",
          title: "Single",
        },
        { value: "relationship", title: "In a relationship" },
      ],
      nextQuestionId: (answer: IAnswer) =>
        answer.value === "single" ? "single-parent" : "parent",
    },
    {
      id: "single-parent",
      title: "Are you a single parent?",
      screenType: "boolean",
      options: [
        {
          value: true,
          title: "Yes",
        },
        { value: false, title: "No" },
      ],
      nextQuestionId: "single-problem",
    },
    {
      id: "relationship-problem",
      title: (params) =>
        `${params.gender.title} ${params["parent"].value ? "who have children" : ""} need a slightly different approach to improve their relationship. Which statement best describes you?`,
      screenType: "single-choice",
      options: [
        {
          value: "veryUnhappy",
          title:
            "I’m very unhappy with how things are going in my relationship",
        },
        {
          value: "unhappyWithParts",
          title:
            "I’m unhappy with parts of my relationship, but some things are working well",
        },
        {
          value: "generallyHappy",
          title: "I’m generally happy in my relationship",
        },
      ],
      nextQuestionId: "partner-personality",
    },
    {
      id: "tend-to-overthink",
      title: "Do you tend to overthink?",
      screenType: "boolean",
      options: [
        {
          value: true,
          title: "Yes",
        },
        { value: false, title: "No" },
      ],
      nextQuestionId: "how-it-works",
    },
    {
      id: "how-it-works",
      title: "So how does it work?",
      description:
        "We analyze hundreds of data points to create your unique astrological blueprint. This is combined with AI to tailor-make your astrological insights, based on your answers. We’re going to change your relationship with astrology.",
      screenType: "info",
      options: [{ value: true, title: "Next" }],
      nextQuestionId: (answer: IAnswer) =>
        answer.value ? "traits-most-important" : "traits-emotional-control",
    },
    {
      id: "traits-most-important",
      title: "What is most important to you?",
      screenType: "single-choice",
      options: [
        { value: "success", title: "Success" },
        { value: "romance", title: "Romance" },
        { value: "stability", title: "Stability" },
        { value: "freedom", title: "Freedom" },
      ],
      nextQuestionId: "relationship-about-us",
    },
    {
      id: "traits-emotional-control",
      title: "Is emotional control tricky for you?",
      screenType: "single-choice",
      options: [
        { value: "yes", title: "Yes" },
        { value: "sometimes", title: "Sometimes" },
        { value: "rarely", title: "Rarely" },
        { value: "not", title: "Not at all" },
      ],
      nextQuestionId: "relationship-about-us",
    },
    {
      id: "relationship-about-us",
      title: "Where did you hear about us?",
      screenType: "single-choice",
      options: [
        { value: "posterOrBillboard", title: "Poster or Billboard" },
        { value: "friendOrFamily", title: "Friend or Family" },
        { value: "instagram", title: "Instagram" },
        {
          value: "directMailOrPackageInsert",
          title: "Direct Mail or Package Insert",
        },
        { value: "onlineTvOrStreamingTv", title: "Online TV or Streaming TV" },
        { value: "tv", title: "TV" },
        { value: "radio", title: "Radio" },
        { value: "searchEngine", title: "Search Engine (Google, Bing, etc.)" },
        { value: "newspaperOrMagazine", title: "Newspaper or Magazine" },
        { value: "facebook", title: "Facebook" },
        {
          value: "blogPostOrWebsiteReview",
          title: "Blog Post or Website Review",
        },
        { value: "podcast", title: "Podcast" },
        { value: "influencer", title: "Influencer" },
        { value: "youtube", title: "Youtube" },
        { value: "pinterest", title: "Pinterest" },
        { value: "other", title: "Other" },
      ],
      nextQuestionId: undefined,
    },
    {
      id: "parent",
      title: "Are you a parent?",
      screenType: "boolean",
      options: [
        {
          value: true,
          title: "Yes",
        },
        { value: false, title: "No" },
      ],
      nextQuestionId: "relationship-problem",
    },
    {
      id: "single-problem",
      title: (params) =>
        `Single ${params.gender.title.toLowerCase()} ${params["single-parent"].value ? "who have children" : ""} need a slightly different approach to find their perfect partner. But first, how did you feel in your last relationship?`,
      screenType: "single-choice",
      options: [
        {
          value: "unhappy",
          title: "I was unhappy with how things were going in my relationship",
        },
        {
          value: "unhappyWithParts",
          title:
            "I was unhappy with parts of my relationship, but some things were working",
        },
        {
          value: "generallyHappy",
          title: "I was generally happy with my relationship",
        },
        {
          value: "neverBeenInRelationship",
          title: "I’ve never been in a relationship",
        },
      ],
      nextQuestionId: "tend-to-overthink",
    },
    {
      id: "partner-personality",
      title: "Is your partner an introvert or extrovert?",
      screenType: "single-choice",
      options: [
        { value: "introvert", title: "Introvert" },
        { value: "extrovert", title: "Extrovert" },
        { value: "bitOfBoth", title: "A bit of both" },
      ],
      nextQuestionId: "partner-gender",
    },
    {
      id: "partner-gender",
      title: "What is your partner’s gender?",
      screenType: "single-choice",
      options: [
        { value: "male", title: "Male" },
        { value: "female", title: "Female" },
      ],
      nextQuestionId: "partner-priority",
    },
    {
      id: "partner-priority",
      title: "What is your partner’s gender?",
      description: "“My partner and I make sex a priority in our relationship”",
      screenType: "single-choice",
      options: [
        { value: "stronglyAgree", title: "Strongly agree" },
        { value: "agree", title: "Agree" },
        { value: "neutral", title: "Neutral" },
        { value: "disagree", title: "Disagree" },
        { value: "stronglyDisagree", title: "Strongly disagree" },
      ],
      nextQuestionId: "relationship-goals",
    },
    {
      id: "relationship-goals",
      title: "When you think about your relationship goals, you feel...?",
      screenType: "single-choice",
      options: [
        {
          value: "optimistic",
          title: "Optimistic! They are totally doable, with some guidance.",
        },
        {
          value: "cautious",
          title: "Cautious. I’ve struggled before, but I’m hopeful.",
        },
        { value: "anxious", title: "I’m feeling a little anxious, honestly." },
      ],
      nextQuestionId: "relationship-about-us",
    },
  ],
};
