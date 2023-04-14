import { FormEvent, useState } from "react";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { useGlobalContext } from "../context/GlobalContext";
import { Card } from "../components/Card";
import * as S from "./styles";

export const Home = () => {
  const { toDoList, setToDoList } = useGlobalContext();

  const [inputValue, setInputValue] = useState("");

  const taskList = {
    task: inputValue,
    id: Math.random(),
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    setToDoList([...toDoList, taskList]);

    setInputValue("");
  };

  const handleDelete = (value: number) => {
    const idCard = value;

    setToDoList(toDoList.filter((value) => value.id !== idCard));
  };

  return (
    <div>
      <Header />
      <Container>
        <S.Form onSubmit={handleSubmit}>
          <S.InputContent>
            <Input
              placeholder="Adicione uma nova tarefa"
              name="addTask"
              type="text"
              value={inputValue}
              onChange={setInputValue}
            />

            <Button styleType="primary" icon="plus" type="submit">
              Criar
            </Button>
          </S.InputContent>
        </S.Form>

        {toDoList.map((item) => (
          <Card
            text={item.task}
            key={item.id}
            deleteButton={() => handleDelete(item.id)}
          />
        ))}
      </Container>
    </div>
  );
};
