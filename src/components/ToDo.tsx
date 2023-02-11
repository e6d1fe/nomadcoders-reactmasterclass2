import { IToDo, toDoState } from "./atoms";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";

const ToDoItems = styled.li`
  margin-left: 10px;
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
    // console.log("I want to add this item to ", name);
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      console.log(targetIndex);
      const oldToDo = oldToDos[targetIndex];
      const newToDo = { text, id, category: name as any };
      console.log(oldToDo, newToDo);
      return [...oldToDos.slice(0, targetIndex), newToDo, ...oldToDos.slice(targetIndex + 1)];
    });
  };

  return (
    <ToDoItems>
      <span>{text}</span>
      {category !== "TO_DO" && (
        <StatusButton name="TO_DO" onClick={onClick}>
          TO DO
        </StatusButton>
      )}
      {category !== "IN_PROGRESS" && (
        <StatusButton name="IN_PROGRESS" onClick={onClick}>
          IN PROGRESS
        </StatusButton>
      )}
      {category !== "DONE" && (
        <StatusButton name="DONE" onClick={onClick}>
          DONE
        </StatusButton>
      )}
    </ToDoItems>
  );
}

export default ToDo;
