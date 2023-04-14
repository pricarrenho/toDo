import { Button } from "../Button";
import { CardProps } from "./types";
import * as S from "./styles";

export const Card = ({ text, deleteButton }: CardProps) => {
  return (
    <S.WrapperCard>
      <p>Teste</p>
      <S.ContentText>{text}</S.ContentText>
      <Button styleType="secondary" icon="trash" deleteButton={deleteButton} />
    </S.WrapperCard>
  );
};
