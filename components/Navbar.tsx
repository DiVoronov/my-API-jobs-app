import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/All.module.scss";

type NavigationType = {
  id: number,
  title: string,
  path: string
};

export function Navbar () {
  
  const navigation: NavigationType[] = [
    { id: 1, title: "Users", path: "/TodoList"},
    { id: 2, title: "Posts", path: "/Posts"},
    { id: 3, title: "Third", path: "/TodoList/third"},
  ];

  const { pathname } = useRouter();

  return (
    <div className={styles.nav}>
      <div>
        <Link href="/"><Image src="/logoBig.png" alt={"logo"} width={30} height={30}/></Link>
      </div>
      <div>
        {
          navigation.map( (element: NavigationType) => {
            return (
              <Link href={element.path} key={element.id} className={`${styles.link} ${pathname === element.path && styles.active}`}>
                {element.title}
              </Link>
            );
          })
        }
        </div>
    </div>
  );
};