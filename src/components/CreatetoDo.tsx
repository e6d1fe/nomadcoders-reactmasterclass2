import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "./atoms";
import styled from "styled-components";

interface IForm {
  toDo: string;
}

const ToDoInput = styled.input`
  border: none;
  border-bottom: 1px solid gray;
  margin-left: 10px;
  margin-bottom: 15px;
`;

const ToDoButton = styled.button`
  margin-left: 5px;
  border-radius: 20px;
  border: none;
  background-color: gray;
  color: white;
  padding: 6px;
`;

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [{ text: toDo, category, id: Date.now() }, ...oldToDos]);
    setValue("toDo", "");
  };

  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <ToDoInput
        {...register("toDo", { required: "Please enter a to do item." })}
        placeholder="enter to do item"
      />
      <ToDoButton>Add</ToDoButton>
    </form>
  );
}

export default CreateToDo;
