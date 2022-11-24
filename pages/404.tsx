import { useRouter } from "next/router";
import { useEffect } from "react";
import { Heading } from "../components/Heading";
import styles from "../styles/All.module.scss";

export default function First() { 

  const rout = useRouter();

  useEffect( () => {
    setTimeout( () => {
      rout.push("/");
    }, 3000);
  }, [rout]);

  return (
    <div className={styles.wrapper}>
      <Heading title="ERROR" />
      <h3>Something went wrong</h3>
      <p><a href="./first">1</a></p>
      <p><a href="./second">2</a></p>
      <p><a href="./third">3</a></p>
    </div>
  );
};