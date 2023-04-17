import { Button } from "../Button";
import { CardProps } from "./types";
import * as S from "./styles";

export const Card = ({
  task,
  status,
  deleteButton,
  handleChange,
}: CardProps) => {
  return (
    <S.WrapperCard>
      <S.Checked active={status} onClick={handleChange} />

      <S.ContentText done={status}>{task}</S.ContentText>

      <Button styleType="secondary" icon="trash" deleteButton={deleteButton} />
    </S.WrapperCard>
  );
};
