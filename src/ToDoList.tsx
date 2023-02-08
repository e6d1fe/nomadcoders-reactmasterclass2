import { useForm } from "react-hook-form";
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

const toDoState = atom<IToDo[]>({ key: "toDo", default: [] });

interface IForm {
  toDo: string;
}

interface IToDo {
  text: string;
  id: number;
  category: "TO_DO" | "IN PROGRESS" | "DONE";
}

function ToDoList() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [{ text: toDo, category: "TO_DO", id: Date.now() }, ...oldToDos]);
    setValue("toDo", "");
  };
  console.log(toDos);

  return (
    <div>
      <h1>To Do List</h1>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("toDo", { required: "Please enter a to do item." })}
          placeholder="enter to do item"
        />
        <button>Add</button>
      </form>
      <hr />
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>{toDo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
