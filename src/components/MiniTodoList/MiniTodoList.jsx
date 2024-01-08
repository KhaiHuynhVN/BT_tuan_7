import { useRef } from "react";
import classNames from "classnames/bind";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import miniTodoListSlice, { selectors } from "./miniTodoListSlice";

import styles from "./MiniTodoList.module.scss";

const cx = classNames.bind(styles);

function MiniTodoList() {
   const dispatch = useDispatch();

   const todoInput = useSelector(selectors.todoInput);
   const todos = useSelector(selectors.todos);

   const inputRef = useRef();

   const handleInput = (e) => dispatch(miniTodoListSlice.actions.setTodoInput(e.target.value));

   const handleAddTodo = () => {
      if (!todoInput.trim()) return;

      const todo = {
         id: uuidv4(),
         title: todoInput,
      };
      dispatch(miniTodoListSlice.actions.setTodos(todo));
      dispatch(miniTodoListSlice.actions.setTodoInput(""));
      inputRef.current.focus();
   };

   const handleDelete = (id) => dispatch(miniTodoListSlice.actions.deleteTodo(id));

   return (
      <div className={cx("wrapper")}>
         <h1 className={cx("title")}>Mini Todo List</h1>

         <div className={cx("container")}>
            <div className={cx("input")}>
               <input ref={inputRef} value={todoInput} type="text" placeholder="Add new todo..." onChange={handleInput} />
               <button onClick={handleAddTodo}>Add</button>
            </div>
            <div className={cx("list")}>
               {todos.map((todo) => (
                  <div key={todo.id} className={cx("item")}>
                     <span>{todo.title}</span>
                     <button onClick={() => handleDelete(todo.id)}>Delete</button>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}

export default MiniTodoList;
