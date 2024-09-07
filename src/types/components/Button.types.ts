import React from "react";

export type TButton = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: "primary" | "secondary";
  title?: string;
  className?: string;
  variant?: "default" | "light";
};
