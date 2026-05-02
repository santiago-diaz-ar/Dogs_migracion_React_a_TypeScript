import style from "./Home.module.css";

export default function Home() {
  return (
    <div className={style.home}>
      <div className={style.titulo}>Titulo</div>
      <div className={style.cuerpo}>Cuerpo</div>
      <div className={style.footer}>Footer</div>
    </div>
  );
}
