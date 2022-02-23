import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Todo from "./Todo";

import styles from "./TodoList.module.css";

const TodoList = (props) => {
  let filteredTodos;

  if (props.filter === "all") {
    filteredTodos = props.todos.map((todo, index) => {
      return (
        <Draggable key={todo.id} draggableId={todo.id} index={index}>
          {(provided) => (
            <li
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              className={
                props.isDark ? styles["list-item--dark"] : styles["list-item"]
              }
            >
              <Todo
                todo={todo}
                isDark={props.isDark}
                onRemoveTodo={removeTodoHandler}
                onChangeTodoCompletedState={changeTodoCompletedStateHandler}
              />
            </li>
          )}
        </Draggable>
      );
    });
  } else if (props.filter === "active") {
    filteredTodos = props.todos
      .filter((todo) => !todo.completed)
      .map((todo) => {
        return (
          <li
            key={todo.id}
            className={
              props.isDark ? styles["list-item--dark"] : styles["list-item"]
            }
          >
            <Todo
              todo={todo}
              isDark={props.isDark}
              onRemoveTodo={removeTodoHandler}
              onChangeTodoCompletedState={changeTodoCompletedStateHandler}
            />
          </li>
        );
      });
  } else if (props.filter === "completed") {
    filteredTodos = props.todos
      .filter((todo) => todo.completed)
      .map((todo) => {
        return (
          <li
            key={todo.id}
            className={
              props.isDark ? styles["list-item--dark"] : styles["list-item"]
            }
          >
            <Todo
              todo={todo}
              isDark={props.isDark}
              onRemoveTodo={removeTodoHandler}
              onChangeTodoCompletedState={changeTodoCompletedStateHandler}
            />
          </li>
        );
      });
  }

  const removeTodoHandler = (todo) => {
    props.onRemoveTodo(todo);
  };

  const changeTodoCompletedStateHandler = (todo) => {
    props.onChangeTodoCompletedState(todo);
  };

  const onDragEndHandler = (result) => {
    if (!result.destination) return;

    const items = Array.from(props.todos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    props.onDragEnd(items);
  };

  return (
    <div>
      <DragDropContext onDragEnd={onDragEndHandler}>
        <Droppable droppableId="todos">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {filteredTodos}

              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default TodoList;
