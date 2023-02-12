import { useRecoilState, useRecoilValue } from "recoil";
import CreateToDo from "./components/CreatetoDo";
import { categoryState, toDoSelector, toDoState } from "./components/atoms";
import ToDo from "./components/ToDo";
import styled from "styled-components";

const Title = styled.div`
  font-size: 20px;
  padding: 10px;
`;

const SelectBox = styled.select`
  margin: 10px;
`;

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };

  console.log(toDos);

  return (
    <div>
      <Title>📝 To Do List</Title>
      <hr />
      <SelectBox value={category} onInput={onInput}>
        <option value="TO_DO">TO DO</option>
        <option value="IN_PROGRESS">IN PROGRESS</option>
        <option value="DONE">DONE</option>
      </SelectBox>
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}

export default ToDoList;
