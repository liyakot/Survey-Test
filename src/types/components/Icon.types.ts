import { SVGProps } from "react";

export type TIconComponent = SVGProps<SVGSVGElement> & {
  className?: string;
  onClick?: () => void;
  color?: string;
  variant?: "dark" | "light";
};
