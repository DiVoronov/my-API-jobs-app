import { IPostProps } from ".";
import { DetailComponentPost } from "../../components/DetailComponentPost";
import { Heading } from "../../components/Heading";
import styles from "../../styles/All.module.scss";
import { GetStaticPaths, GetStaticProps } from "next";


export const getStaticPaths: GetStaticPaths = async () => {

  const url = `https://jsonplaceholder.typicode.com/posts`;
  // const searchPost = `posts/${id}`;

  // const response = await fetch(`${url}${searchPost}`);
  const response = await fetch(url);
  const data: IPostProps[] = await response.json();

  const paths = data.map( (value: IPostProps) => ({ 
    params: { id: value.id.toString() }
  } ) );

  return {
    paths: paths,
    fallback: false,
  }
};

export const getStaticProps : GetStaticProps = async (context) => {

  const id = context.params!.id;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data: IPostProps = await response.json();
  // const data = null;


  if (!data) {
    return { notFound: true }
  }

  return {
    props: { listPost: data },
  };
};

export type DetailedInfoProps = {
  listPost: IPostProps
};

export default function DetailedInfo ( { listPost } : DetailedInfoProps ) {

  if (!listPost) {
    return (
      <div className={styles.wrapper}>
        <Heading title="Detailed info about Post" />
        <div>Post is Empty</div> 
      </div>
    )
  }

  return (
    <div className={styles.wrapper}>
      <Heading title="Detailed info about" />
      <DetailComponentPost listPost={listPost}/>
    </div>
  );
};