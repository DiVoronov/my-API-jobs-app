import Link from "next/link";
import { Heading } from "../../components/Heading";
import styles from "../../styles/All.module.scss";

export interface Geo {
  lat: string;
  lng: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}
export interface IResponseUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

const url = "https://jsonplaceholder.typicode.com/";
const searchUsers = "users/";

export const getStaticProps = async () => {
  const response = await fetch(`${url}${searchUsers}`);
  const data: IResponseUser[] = await response.json();
  // const data = null;


  if (!data) {
    return { notFound: true }
  }

  return {
    props: { listUser: data },
  };
};

type TodoListProps = {
  listUser: IResponseUser[]
};

const TodoList: React.FC<TodoListProps> = ( { listUser } ) => { 
  return (
    <div className={styles.wrapper}>
      <Heading title="List of Users (SSR)" />
      <ul>
      { listUser && listUser.map( (user: IResponseUser)  => {
        return (
          <li key={user.id}><Link href={`/TodoList/${user.id}`}><strong>{user.name} </strong> - {user.username}</Link></li>
        )
      }) }
      </ul>
    </div>
  )
};

export default TodoList;