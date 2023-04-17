import { FormEvent, useState } from "react";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { useGlobalContext } from "../context/GlobalContext";
import { Card } from "../components/Card";
import * as S from "./styles";

export const Home = () => {
  const { toDoList, handleToDoList } = useGlobalContext();

  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const taskList = {
      task: inputValue,
      id: Math.random(),
      status: false,
    };

    handleToDoList([...toDoList, taskList]);

    setInputValue("");
  };

  const handleDelete = (idCard: number) => {
    handleToDoList(toDoList.filter((value) => value.id !== idCard));
  };

  const handleChange = (idCard: number) => {
    const newState = toDoList.map((card) => {
      if (card.id === idCard) {
        return {
          ...card,
          status: !card.status,
        };
      }

      return card;
    });

    handleToDoList(newState);
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

        {toDoList?.map((item) => (
          <Card
            status={item.status}
            handleChange={() => handleChange(item.id)}
            task={item.task}
            key={item.id}
            deleteButton={() => handleDelete(item.id)}
          />
        ))}
      </Container>
    </div>
  );
};
