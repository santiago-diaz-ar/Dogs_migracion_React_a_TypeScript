import style from "./Home.module.css";
import { perros } from "../Arrays_De_Pruebas/Arrays_De_Pruebas";
import type { Perro } from "../Arrays_De_Pruebas/Arrays_De_Pruebas";

export default function Home() {
  return (
    <div className={style.home}>
      <div className={style.titulo}>
        <div className={style.tituloUno}>
          <img className={style.Logo} alt="logo" />
          <input type="text" placeholder="Buscar" className={style.Buscar} />
          <button type="submit">Buscar</button>
          <div className={style.Descuento}>10% de descuento Mes de Marzo</div>
        </div>

        <div className={style.TituloDos}>
          <div>filtro</div>
          <div>oferta</div>
          <div>contactanos</div>
        </div>
      </div>
      <div className={style.cuerpo}>
        {perros.map((perro: Perro, index: number) => {
          return (
            <div key={perro.id || index}>
              <img
                src={perro.imagen}
                alt={perro.nombre}
                className={style.ImgTargeta}
              />
              <h3>{perro.nombre}</h3>
            </div>
          );
        })}
        <div className={style.footer}>
          <div>Nombre:Javier Santiago Diaz Arcila</div>
          <div>Celular:3007476082</div>
          <div>Direccion:El arenillo</div>
        </div>
      </div>
    </div>
  );
}
