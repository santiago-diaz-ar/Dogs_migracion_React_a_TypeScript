import style from "./Detail.module.css";

interface DetailProps {
  name: string;
  image: string;
}

const Detail = ({ name, image }: DetailProps) => {
  return (
    <div className={style.container}>
      {name} - {image}
    </div>
  );
};

export default Detail;
