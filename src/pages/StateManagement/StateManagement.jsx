import classNames from "classnames/bind";

import MiniTodoList from "../../components/MiniTodoList";

import styles from "./StateManagement.module.scss";
import { useState } from "react";

const cx = classNames.bind(styles);

function StateManagement() {
   const [isShow, setIsShow] = useState(false);

   const handleToggleTodo = () => setIsShow(!isShow);

   return (
      <div className={cx("wrapper")}>
         <h1>State Management page</h1>
         <h2>This page is used to demo State Management</h2>

         <button className={cx("button")} onClick={handleToggleTodo}>
            Toogle Todo
         </button>

         {isShow && <MiniTodoList />}
      </div>
   );
}

export default StateManagement;
