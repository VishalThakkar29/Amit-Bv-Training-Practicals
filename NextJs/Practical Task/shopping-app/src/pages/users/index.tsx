import React, { use } from "react";
import { useState } from "react";
import classes from "./index.module.css";
import { useSelector } from "react-redux";
import { Loading } from "@nextui-org/react";
import UserList from "../../../components/users/UserList";
import AddUser from "../../../components/users/AddUser";

export type UserListProps = {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  image: string;
};
export type Users = {
  users: UserListProps[];
};
const USersPage: React.FC<{ users: Users }> = ({ users }) => {
  const loading = useSelector((state: any) => state.loading);
  const [showForm, setShowForm] = useState(false);
  const [data1, setData1] = useState<UserListProps[]>(users.users);
  const [search, setSearch] = useState("");
  if (search.length >= 4) {
    fetch(`https://dummyjson.com/users/search?q=${search.toLowerCase()}`)
      .then((res) => res.json())
      .then((data) => {
        setData1(data.users);
      });
  }
  const userName = data1.map((data) => {
    // console.log(data);
    return <UserList key={data.id} user={data} />;
  });
  const addUserHandler = () => {
    setShowForm(true);
  };
  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  // console.log(search);
  return (
    <>
      {loading && <Loading />}
      <div className={classes.cont}>
        <div>
          <div className={classes.secondDiv}>
            <input
              className={classes.input}
              type="text"
              placeholder="Search.."
              onChange={inputChangeHandler}
              value={search}
            ></input>
            <button className={classes.button} onClick={addUserHandler}>
              Add New User
            </button>
            <div className={classes.form}>
              {showForm && (
                <AddUser showForm={setShowForm} setData={setData1} />
              )}
            </div>
          </div>

          <div>
            <h1> UserList </h1>
          </div>
        </div>
        <div className={classes.userList}>{userName}</div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch(process.env.USER!);
  const data = await res.json();
  console.log(data);
  return {
    props: {
      users: data,
    },
  };
}

export default USersPage;
