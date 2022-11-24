
interface IHeadingType {
  title: string
}

export const Heading: React.FC<IHeadingType> = ( { title } ) => {

  return <h1> { title } </h1> ;
};
