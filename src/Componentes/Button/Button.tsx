import style from './index.module.css'

function Button(props:any) {

  if(props.icon==1){
    return(
      <button>
        <img className={style} src={props.img} alt="Icon" />
          {props.texto}
      </button>
    )
  }else{

    return(
      <button>
  
        {props.texto}
      </button>
    )
  }


  
}
  
  export default Button;