import style from "./Home.module.css";

export default function Home() {
  return (
    <div className={style.home}>
      <div className={style.titulo}>
        <div className={style.tituloUno}>
          <img className={style.Logo} alt="logo" />
          <input type="text" placeholder="Buscar" className={style.Buscar} />
          <button>Buscar</button>
          <div className={style.Descuento}>10% de descuento Mes de Marzo</div>
        </div>

        <div className={style.TituloDos}>
          <div>filtro</div>
          <div>oferta</div>
          <div>contactanos</div>
        </div>
      </div>
      <div className={style.cuerpo}>Cuerpo</div>
      <div className={style.footer}>Footer</div>
    </div>
  );
}
