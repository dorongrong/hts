type TitleText = {
  title: string;
  subTitle?: string;
}

const Title = (text: TitleText) => {
  const { title, subTitle } = text;
  return (
      <>
          <h1>{title}</h1>
          <br/>
          <hr></hr>
          {subTitle !== undefined && <h3>{subTitle}</h3>}    
      </>
  );
};
export default Title;