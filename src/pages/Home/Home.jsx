import classNames from "classnames/bind";

import styles from "./Home.module.scss";

const cx = classNames.bind(styles);

function Home() {
   return (
      <div className={[cx("wrapper"), "bg-red-600"]}>
         <h1 className={cx("wrapper")}>Home page</h1>
         <h2>This page is used to demo React Router</h2>
      </div>
   );
}

export default Home;
