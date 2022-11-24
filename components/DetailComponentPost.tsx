
import { Heading } from "./Heading";
import { DetailedInfoProps } from "../pages/Posts/[id]";

export const DetailComponentPost = ( { listPost } : DetailedInfoProps) => {

  if (!listPost) {
    return (<></>)
  };

  const { id, title, body } = listPost;

  return (
    <>
      <Heading title={`Post ${title}`} />
      <div>Full text: {body}</div>
      <div>id: {id}</div>
    </>
  );
};