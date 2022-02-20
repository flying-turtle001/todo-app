import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Todo from "./Todo";

// eslint-disable-next-line no-unused-vars
import styles from "./TodoList.module.css";

const TodoList = (props) => {
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
              {/* Show all todos  */}
              {props.filter === "all" &&
                props.todos.map((todo, index) => {
                  return (
                    <Draggable
                      key={todo.id}
                      draggableId={todo.id}
                      index={index}
                    >
                      {(provided) => (
                        <li
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <Todo
                            todo={todo}
                            onRemoveTodo={removeTodoHandler}
                            onChangeTodoCompletedState={
                              changeTodoCompletedStateHandler
                            }
                          />
                        </li>
                      )}
                    </Draggable>
                  );
                })}

              {/* Show active todos */}
              {props.filter === "active" &&
                props.todos
                  .filter((todo) => !todo.completed)
                  .map((todo) => {
                    return (
                      <li key={todo.id}>
                        <Todo
                          todo={todo}
                          onRemoveTodo={removeTodoHandler}
                          onChangeTodoCompletedState={
                            changeTodoCompletedStateHandler
                          }
                        />
                      </li>
                    );
                  })}

              {/* Show completed todos */}
              {props.filter === "completed" &&
                props.todos
                  .filter((todo) => todo.completed)
                  .map((todo) => {
                    return (
                      <li key={todo.id}>
                        <Todo
                          todo={todo}
                          onRemoveTodo={removeTodoHandler}
                          onChangeTodoCompletedState={
                            changeTodoCompletedStateHandler
                          }
                        />
                      </li>
                    );
                  })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default TodoList;
