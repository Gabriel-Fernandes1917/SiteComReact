import style from './Style.module.css'
import InputText from '../InputText/InputText'
import Button from '../Button/Button'
import iconGoogle from './iconGoogle.png'


export default function MenuLogin() {
    

    return(
        <div className={style.Menu}>
            <div>
                <p>Bem vindo de volta</p>
                <p><strong>Fazer login com sua conta</strong> </p>
            </div>
            
            <InputText/>

            <div className={style.buttonLogin}>
                <Button /*className={style.x} */texto={"Login com Email"}/>
                
                <Button /*className={style.x}*/ icon={1} img={iconGoogle} texto={"Login com o Google"}>
                    
                </Button>
            </div>
               
            

            
        </div>
    )
}