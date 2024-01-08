import classNames from "classnames/bind";
import { NavLink } from "react-router-dom";

import routesConfig from "../../../routesConfig";

import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header() {
   return (
      <header className={cx("wrapper")}>
         <h1 className={cx("header__title")}>Header</h1>
         <nav className={cx("header__nav")}>
            <ul className={cx("header__nav-list")}>
               <li className={cx("header__nav-item")}>
                  <NavLink className={(active) => (active.isActive ? cx("active") : "")} to={routesConfig.home.path}>
                     {routesConfig.home.title}
                  </NavLink>
               </li>
               <li className={cx("header__nav-item")}>
                  <NavLink className={(active) => (active.isActive ? cx("active") : "")} to={routesConfig.stateManagement.path}>
                     {routesConfig.stateManagement.title}
                  </NavLink>
               </li>
               <li className={cx("header__nav-item")}>
                  <NavLink className={(active) => (active.isActive ? cx("active") : "")} to={routesConfig.APIcall.path}>
                     {routesConfig.APIcall.title}
                  </NavLink>
               </li>
               <li className={cx("header__nav-item")}>
                  <NavLink className={(active) => (active.isActive ? cx("active") : "")} to={routesConfig.reactHookForm.path}>
                     {routesConfig.reactHookForm.title}
                  </NavLink>
               </li>
            </ul>
         </nav>
      </header>
   );
}

export default Header;
