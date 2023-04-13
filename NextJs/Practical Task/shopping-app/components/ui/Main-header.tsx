import Link from "next/link";
import { useDispatch } from "react-redux";
import { setLoadingCondition } from "../../src/action/index";
import classes from "./Main-header.module.css";

function MainHeader() {
  const dispatch = useDispatch();
  return (
    <header className={classes.header}>
      <nav className={classes.navigation}>
        <ul className={classes.flex}>
          <li className={classes.list}>
            <Link href={"/"}>
              <p onClick={() => dispatch(setLoadingCondition())}>Home Page</p>
            </Link>
          </li>
          <li className={classes.list}>
            <Link href={"/users"}>
              <p onClick={() => dispatch(setLoadingCondition())}>Users</p>
            </Link>
          </li>
          <li className={classes.list}>
            <Link href={"/posts"}>
              <p onClick={() => dispatch(setLoadingCondition())}>Posts</p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
