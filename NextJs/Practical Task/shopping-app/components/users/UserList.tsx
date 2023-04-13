import { UserListProps } from "@/pages/users";
import { userAgent } from "next/server";
import { useDispatch } from "react-redux";
import { setLoadingCondition } from "../../src/action/index";
import React from "react";
import Link from "next/link";
import classes from "./UserList.module.css";
const UserList: React.FC<{ user: UserListProps }> = ({ user }) => {
  const dispatch = useDispatch();
  return (
    <div key={user.id} className={classes.cont}>
      <div>
        <ul>
          {/* <Link href={`/users/${user.id}`}>{user.firstName}</Link> */}
          <Link href={`/users/${user.id}`}>
            <p onClick={() => dispatch(setLoadingCondition())}>
              {user.firstName}
            </p>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default UserList;
