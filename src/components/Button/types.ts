export type ButtonStyleType = "primary" | "secondary";

export type ButtonProps = {
  children?: string;
  icon?: "plus" | "trash";
  styleType: ButtonStyleType;
};
