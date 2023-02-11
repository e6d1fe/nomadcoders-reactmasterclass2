import { useRecoilValue } from "recoil";
import CreateToDo from "./components/CreatetoDo";
import { toDoSelector, toDoState } from "./components/atoms";
import ToDo from "./components/ToDo";
import styled from "styled-components";

const Title = styled.div`
  font-size: 20px;
  padding: 10px;
`;

const SubTitle = styled.div`
  margin: 10px 0px 15px 10px;
  font-weight: 600;
  border-bottom: 1px solid gray;
`;

function ToDoList() {
  const [toDo, inProgress, done] = useRecoilValue(toDoSelector);
  console.log(toDo, inProgress, done);

  return (
    <div>
      <Title>📝 To Do List</Title>
      <hr />
      <CreateToDo />
      <SubTitle>To Do</SubTitle>
      <ul>
        {toDo.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <SubTitle>In Progress</SubTitle>
      <ul>
        {inProgress.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <SubTitle>Done</SubTitle>
      <ul>
        {done.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
