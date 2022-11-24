
import { Heading } from "./Heading";
import { InferGetServerSidePropsType } from "next";
import { getServerSideProps } from "../pages/TodoList/[id]";

export const DetailComponent = ( { listUser } : InferGetServerSidePropsType<typeof getServerSideProps> ) => {

  if (!listUser) {
    return (<></>)
  };

  const { street, suite, city, zipcode } = listUser.address;
  const { name, username, email } = listUser;

  return (
    <>
      <Heading title={`user ${username}`} />
      <div>Name is {name} has username {username}</div>
      <div>Email: {email}</div>
      <div>Address:</div>
      <div>{`${street + " " + suite + " " + city + " " + zipcode}`}</div>
    </>
  );
};