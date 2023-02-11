import { atom, selector } from "recoil";
import ToDo from "./ToDo";

export interface IToDo {
  text: string;
  id: number;
  category: "TO_DO" | "IN_PROGRESS" | "DONE";
}

export const toDoState = atom<IToDo[]>({ key: "toDo", default: [] });
// this atom only gives me an array
// the selector will transform the output of the atom. (it'll take the state and return sth)

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    return [
      toDos.filter((toDo) => toDo.category === "TO_DO"),
      toDos.filter((toDo) => toDo.category === "IN_PROGRESS"),
      toDos.filter((toDo) => toDo.category === "DONE"),
    ];
  },
});
