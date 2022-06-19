import style from './PageLogin.module.css'
import MenuLogin from "../MenuLogin/MenuLogin"

export default function PageLogin() {
  return (
    <div className={style.body}>
      <div className={style.img}>
        <img src={require('./img.png')} alt="lol" />
      </div>
      <div className={style.Menu}>
        <MenuLogin/>
      </div>
    </div>
  );
}
