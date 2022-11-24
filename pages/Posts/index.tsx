import Link from "next/link";
import { Heading } from "../../components/Heading";
import styles from "../../styles/All.module.scss";

export interface IPostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const url = "https://jsonplaceholder.typicode.com/";
const searchPosts = "posts/?_start=0&_limit=20";

export const getStaticProps = async () => {
  const response = await fetch(`${url}${searchPosts}`);
  const data: IPostProps[] = await response.json();
  // const data = null;


  if (!data) {
    return { notFound: true }
  }

  return {
    props: { listPosts: data },
  };
};

type TodoListProps = {
  listPosts: IPostProps[]
};

const TodoList: React.FC<TodoListProps> = ( { listPosts } ) => { 
  return (
    <div className={styles.wrapper}>
      <Heading title="List of Posts (SSG)" />
      <ul>
      { listPosts && listPosts.map( (post: IPostProps)  => {
        return (
          <li key={post.id}><Link href={`/Posts/${post.id}`}><strong>{post.title}</strong></Link></li>
        )
      }) }
      </ul>
    </div>
  );
};

export default TodoList;