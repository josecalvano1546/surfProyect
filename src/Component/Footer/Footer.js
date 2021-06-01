import React from 'react';
import estilos from './Fotter.scss';
import { LogoFacebook, LogoTwitter, LogoLinkedin, ArrowDownOutline} from 'react-ionicons' 

const Footer = () =>{
    return (
        <footer class="footer" >
            <div class="row redes">
                       <div class="icons">
                            <LogoFacebook
                                color={'#FFFF'}
                                height="25px"
                                width="25px"
                                onClick={() => alert('Hi i am Jose Calvano!')}
                            />
                       </div>

                       <div class="icons">
                            <LogoTwitter
                                color={'#FFFF'}
                                height="25px"
                                width="25px"
                                onClick={() => alert('Hi i am Jose Calvano!')}
                            />
                        </div>

                       <div class="icons">
                            <LogoLinkedin
                                color={'#FFFF'}
                                height="25px"
                                width="25px"
                                onClick={() => alert('Hi i am Jose Calvano!')}
                            />
                      </div>
            </div>
            <div class="text-center p-3 text-white">
                © 2020 Copyright: 
                <a class="text-white" href=""> @front_vibes</a>
            </div>
           
        </footer>

    )
}

export default Footer ;