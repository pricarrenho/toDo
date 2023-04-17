export type CardProps = {
  task: string;
  status: boolean;
  deleteButton?: () => void;
  handleChange?: () => void;
};
