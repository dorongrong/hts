type PhotoInfo = {
    description: string;
    adress: string;
  }

const Photo = (props: PhotoInfo) => {
    const { description, adress } = props;
    return (
        <>
          <img src={adress}/>    
          <article> {description} </article>
        </>
    );
};
 export default Photo;