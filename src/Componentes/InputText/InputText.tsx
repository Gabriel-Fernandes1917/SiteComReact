import style from './index.module.css'

export default function InputText(props: any) {
    
    return(
        <div className={style.inputs}>
            <form action="">

                <div className={style.emailSenha}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder='jose123@gmail.com'/>
                </div>

                <div className={style.emailSenha}>
                <label htmlFor="senha">Senha</label>
                <input type="password" name="senha" id="senha" placeholder='********'/>
                </div>
                
                <div className={style.checkEsqueci}>
                <input type="checkbox" name="LembrarSenha" id="LembrarSenha" />
                <label htmlFor="LembrarSenha">Lembrar de mim</label>

                </div>
            </form>

        </div>
    )
}