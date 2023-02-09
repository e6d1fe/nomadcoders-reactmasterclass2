import { IToDo } from "./atoms";
import styled from "styled-components";

const ToDoItems = styled.li`
  margin-left: 10px;
`;

const StatusButton = styled.button`
  margin-left: 5px;
  border: none;
  font-weight: 700;
`;

function ToDo({ text }: IToDo) {
  return (
    <ToDoItems>
      <span>{text}</span>
      <StatusButton>TO DO</StatusButton>
      <StatusButton>IN PRORESS</StatusButton>
      <StatusButton>DONE</StatusButton>
    </ToDoItems>
  );
}

export default ToDo;
