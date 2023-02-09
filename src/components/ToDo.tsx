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
  const onClick = (newCategory: IToDo["category"]) => {
    console.log("I want to go to ", newCategory);
  };

  return (
    <ToDoItems>
      <span>{text}</span>
      {category !== "TO_DO" && <StatusButton onClick={() => onClick("TO_DO")}>TO DO</StatusButton>}
      {category !== "IN_PROGRESS" && (
        <StatusButton onClick={() => onClick("IN_PROGRESS")}>IN PRORESS</StatusButton>
      )}
      {category !== "DONE" && <StatusButton onClick={() => onClick("DONE")}>DONE</StatusButton>}
    </ToDoItems>
  );
}

export default ToDo;
