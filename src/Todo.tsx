import { VFC } from "react";
import { TodoType } from "./types/todo";

export const Todo: VFC<Omit<TodoType, "id">> = (props) => {
  const { title, userId, completed = true } = props;
  const completeMark = completed ? "[完]" : "[末]";
  return <p>{`${completeMark} ${title}(ユーザー:${userId})`}</p>;
};
