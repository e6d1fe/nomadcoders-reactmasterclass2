import { Categories, IToDo, toDoState } from "./atoms";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";

const ToDoItems = styled.li`
  margin-left: 15px;
  margin-bottom: 5px;
  font-size: 15px;
`;

const StatusButton = styled.button`
  margin-left: 5px;
  border: none;
  font-weight: 700;
`;

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as any };
      return [...oldToDos.slice(0, targetIndex), newToDo, ...oldToDos.slice(targetIndex + 1)];
    });
  };

  const deleteButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as any };
      return [...oldToDos.slice(0, targetIndex), ...oldToDos.slice(targetIndex + 1)];
    });
  };

  return (
    <ToDoItems>
      <span>{text}</span>
      {category !== Categories.TO_DO && (
        <StatusButton name={Categories.TO_DO} onClick={onClick}>
          TO DO
        </StatusButton>
      )}
      {category !== Categories.IN_PROGRESS && (
        <StatusButton name={Categories.IN_PROGRESS} onClick={onClick}>
          IN PROGRESS
        </StatusButton>
      )}
      {category !== Categories.DONE && (
        <StatusButton name={Categories.DONE} onClick={onClick}>
          DONE
        </StatusButton>
      )}
      <StatusButton onClick={deleteButton}>🗑️</StatusButton>
    </ToDoItems>
  );
}

export default ToDo;
