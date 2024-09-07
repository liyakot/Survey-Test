import React, { FC } from "react";

import { TButton } from "@/types/components/Button.types";

import styles from "./index.module.scss";

export const ButtonComponent: FC<TButton> = ({
  color = "primary",
  title,
  className,
  variant = "default",
  ...props
}) => {
  const classes = `${styles.button} ${styles[color]} ${styles[variant]} ${className ? className : ""}`;
  return (
    <button className={classes} {...props}>
      {title}
    </button>
  );
};
