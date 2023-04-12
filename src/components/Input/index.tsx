import * as S from "./styles";

export const Input = () => {
  return (
    <S.WrapperInput>
      <S.Label htmlFor="addTask"> Adicione uma nova tarefa</S.Label>
      <S.Input name="addTask" type="text" />
    </S.WrapperInput>
  );
};
