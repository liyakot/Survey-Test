import { FC } from "react";

import { TIconComponent } from "@/types/components/Icon.types";

import styles from "./index.module.scss";

export const BackIconComponent: FC<TIconComponent> = ({
  onClick,
  className,
  variant,
  ...props
}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={`${className} ${styles.icon}`}
      {...props}
    >
      <path
        d="M7.5 12L15 4.5L16.05 5.55L9.6 12L16.05 18.45L15 19.5L7.5 12Z"
        fill={`${variant === "light" ? "#fafafa" : "#333333"}`}
      />
    </svg>
  );
};
