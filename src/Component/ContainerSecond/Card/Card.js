import React ,{useEffect}from 'react';
import estilos from './Card.scss'
import gsap,{Power3, Power0} from 'gsap';
const Card = (props) => {


    return(
        <div class="col-md-4 col-sm-12 justify-content-center prueba" >
            <div class="card">
            {/* class=""  class="mx-auto d-block" */}
                <img src={props.foto} alt=""  class="img-fluid" />
                    <div class="cardesc"> 
                        <h3>{props.descripcion}</h3>
                        <h5>{props.subDes}</h5>
                    </div>
            </div>
        </div>
    )
}

export default Card;