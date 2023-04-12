import { Container } from "../Container";
import logo from "../../assets/img/logo.png";
import * as S from "./styles";

export const Header = () => {
  return (
    <S.WrapperHeader>
      <Container>
        <S.HeaderImage
          src={logo}
          alt="Logo com um foguete em movimento para cima e ao seu lado escrito To Do"
        />
      </Container>
    </S.WrapperHeader>
  );
};
