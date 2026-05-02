import style from "./Landing.module.css";

export default function Landing() {
  return (
    <div className={style.landing}>
      <div className={style.header}>
        <h2>
          Iniciar Sesion Dogs, Cuidados / baños / todo para tener bien a tu
          mascota
        </h2>
      </div>
      <div className={style.content}>
        <div className={style.imagen}>imagen </div>

        <form action="submit" className={style.Form}>
          <input
            aria-label="Correo electrónico"
            className={style.correo_electronico_password}
            type="email"
            id="email"
            name="email"
            placeholder="Correo Electronico"
            required
          />

          <input
            aria-label="password"
            className={style.correo_electronico_password}
            type="password"
            id="password"
            name="password"
            placeholder="Contraseña"
            required
          />

          <button className={style.iniciar_sesion} type="submit">
            Iniciar Sesión
          </button>
          <button className={style.has_olvidado_tu_contraseña} type="submit">
            ¿Has olvidado tu contraseña?
          </button>

          <h4 className={style.crear_cuenta}>Crear cuenta</h4>
          <div className={style.google}>Google</div>
        </form>
      </div>
      <div className={style.footer}>
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </div>
  );
}
