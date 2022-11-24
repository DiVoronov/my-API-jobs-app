import { Heading } from "../components/Heading";
import { IDataAPI } from "./api/socials";
import styles from "../styles/All.module.scss";
import Head from "next/head";

export const getStaticProps = async () => {

  try {
    const response = await fetch(`${process.env.API_HOST}/socials`);
    const data: IDataAPI[] = await response.json();  

    if (!data) {
      return { notFound: true }
    }

    return {
      props: { listSocials: data },
    };
  } catch {
    return {
      props: { listSocials: null },
    };
  }
  
};

type HomeProps = {
  listSocials: IDataAPI[]
}

const Home: React.FC<HomeProps> = ( { listSocials } ) => { 
  return (
    <div className={styles.wrapper}>
      <Heading title="My Contacts"/>
      <div style={{display: "flex", gap: "1rem"}}>
      { listSocials && listSocials.map( (socialElement: IDataAPI ) => {
        return (
          <span key={socialElement.id}><a href={socialElement.path} target="_blank" rel="noreferrer"><i className={`fab fa-${socialElement.icon}`} aria-hidden="true"/></a></span>
        )
      })}
      </div>
    </div>
  );
};

export default Home;
