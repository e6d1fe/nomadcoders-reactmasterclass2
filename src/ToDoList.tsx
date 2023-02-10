import { useRecoilValue } from "recoil";
import CreateToDo from "./components/CreatetoDo";
import { toDoState } from "./components/atoms";
import ToDo from "./components/ToDo";
import styled from "styled-components";

const Title = styled.div`
  font-size: 20px;
  padding: 10px;
`;

function ToDoList() {
  const toDos = useRecoilValue(toDoState);
  console.log(toDos);

  return (
    <div>
      <Title>📝 To Do List</Title>
      <hr />
      <CreateToDo />
      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
