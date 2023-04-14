import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

export type ButtonStyleType = "primary" | "secondary";

type ButtonType =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  children?: string;
  icon?: "plus" | "trash";
  styleType: ButtonStyleType;
  deleteButton?: () => void;
} & ButtonType;
