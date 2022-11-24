import { Heading } from "../../components/Heading";
import styles from "../../styles/All.module.scss";

export default function Second() { 
  return (
    <div className={styles.wrapper}>
      <Heading title="Second page" />
      <p><a href="./first">1</a></p>
      <p><a href="./second">2</a></p>
      <p><a href="./third">3</a></p>
    </div>
  )
};