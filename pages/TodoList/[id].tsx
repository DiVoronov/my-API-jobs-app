import { IResponseUser } from ".";
import { DetailComponent } from "../../components/DetailComponent";
import { Heading } from "../../components/Heading";
import styles from "../../styles/All.module.scss";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { ParsedUrlQuery } from "querystring";

export const getServerSideProps: GetServerSideProps<{ listUser: IResponseUser }> = async (context) => {

  const id = context.params!.id;
  const url = `https://jsonplaceholder.typicode.com/`;
  const searchUsers = `users/${id}`;

  const response = await fetch(`${url}${searchUsers}`);
  const data: IResponseUser = await response.json();

  return { props: { listUser: data } };
};

export default function DetailedInfo ( { listUser } : InferGetServerSidePropsType<typeof getServerSideProps> ) {

  if (!listUser) {
    return (
      <div className={styles.wrapper}>
        <Heading title="Detailed info about User" />
        <div>User is Empty</div> 
      </div>
    )
  }

  return (
    <div className={styles.wrapper}>
      <Heading title="Detailed info about" />
      <DetailComponent listUser={listUser}/>
    </div>
  );
};