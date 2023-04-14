import { ButtonProps } from "./types";
import { PlusSign } from "../../assets/svg/PlusSign";
import { Trash } from "../../assets/svg/Trash";
import * as S from "./styles";

export const Button = ({
  children,
  icon,
  styleType,
  deleteButton,
}: ButtonProps) => {
  const icons = {
    plus: <PlusSign />,
    trash: <Trash size={24} />,
  };

  return (
    <S.WrapperButton $styleType={styleType} onClick={deleteButton}>
      {children} {icon && icons[icon]}
    </S.WrapperButton>
  );
};
