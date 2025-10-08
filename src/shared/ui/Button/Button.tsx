import * as React from "react";
import "./Button.css";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "danger";
}

export const Button = ({ className, variant, ...props }: Props) => (
  <button
    {...props}
    className={`button ${variant ? `button-${variant}` : ""} ${
      className || ""
    }`}
  />
);
