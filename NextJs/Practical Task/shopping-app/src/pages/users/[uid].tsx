import React from "react";
import { UserListProps } from ".";
import classes from "./[uid].module.css";
import Image from "next/image";
import { useSelector } from "react-redux";
import { Loading } from "@nextui-org/react";
// import Image from "next/image";
const UserDetails: React.FC<{ id: string; user: UserListProps }> = ({
  id,
  user,
}) => {
  const loading = useSelector((state: any) => state.loading);
  return (
    <>
      {loading && <Loading />}
      <div className={classes.card} key={user.id}>
        <div className={classes.cont1}>
          <Image
            className={classes.image}
            src={user.image}
            width="250"
            height="250"
            alt={user.firstName}
          />
        </div>
        <div className={classes.cont2}>
          <h2>Gender:{user.gender}</h2>
          <h3>Phone:{user.phone}</h3>

          <h3> Age:{user.age}</h3>
          <h3>UserName :{user.username}</h3>
          {/* <h3>{user.description}</h3> */}
        </div>
      </div>
    </>
  );
};
export async function getServerSideProps(context: { params: { uid: string } }) {
  const { params } = context;
  const { uid } = params;
  const res = await fetch(`https://dummyjson.com/users/${uid}`);
  const data = await res.json();

  return {
    props: {
      id: uid,
      user: data,
    },
  };
}
export default UserDetails;
