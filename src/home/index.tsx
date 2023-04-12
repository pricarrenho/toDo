import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { Header } from "../components/Header";
import { Input } from "../components/Input";

export const Home = () => {
  return (
    <div>
      <Header />
      <Container>
        <Input />
        <Button styleType="primary" icon="plus">
          Criar
        </Button>
      </Container>
    </div>
  );
};
