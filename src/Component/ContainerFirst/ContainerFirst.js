import React, { useEffect, useRe, useState } from 'react';
import estilos from './ContainerFirst.scss';
import gsap,{Power3, Power0} from 'gsap'; 
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import {Nav, Item, Link} from 'react-bootstrap';
import { LogoFacebook, LogoTwitter, LogoLinkedin, ArrowDownOutline} from 'react-ionicons' 


function ContainerFirst () {
    gsap.registerPlugin(CSSRulePlugin);
    const [mover,setMover] = useState(false)

    let imageReveal = CSSRulePlugin.getRule(".container-fluid.first:after");
    let imageReveal2 = CSSRulePlugin.getRule(".container-fluid.grey:after");
    let textoReveal = CSSRulePlugin.getRule(".mensaje3r:after");

    var tl = gsap.timeline();

    useEffect(()=>{

        tl.from('.container-fluid.first', {
                duration: 1.8,
                scale: 2,
                ease: Power3.easeInOut,
            }, )
            .from('.mensaje3r', {
               // opacity:0, 
               // y: 40, 
                easy:Power3.easeOut, 
                duration:1.5
            }, '<=')
            .to(textoReveal,{ 
                width: "0%", 
                ease: Power3.easeInOut,
                duration:0.8
            },)
            .to(
                imageReveal,
                { duration: 0.8, 
                width: "50%", 
                ease: Power3.easeInOut }
                
            )
            .to(
                imageReveal2,
                { duration: 1, 
                width: "100%", 
                ease: Power3.easeInOut }
                , '<='
            )
            .to('.mensaje3r',{
                y: -20, 
                easy:Power3.easeOut, 
                duration:0.8
            })
            .from('.subtitle',{
                opacity:0, 
                y: 40, 
                easy:Power3.easeOut, 
                duration:0.8
            }, '<='
            )
            .from('.nav.justify-content-center',{
                opacity:0, 
                y: -20, 
                easy:Power3.easeOut, 
                duration:0.6
            })
            .from('.nav.flex-column.align-content-end',{
                opacity:0, 
                x: 20, 
                easy:Power3.easeOut, 
                duration:0.6
            }
            ,'<='
            )
            .from('.flecha',{
                opacity:0, 
                y: 20, 
                easy:Power3.easeOut, 
                duration:0.6
            }
            ,'<=' 
            )
            .from('.arrowDown',{
                y: -3, 
                duration:1,
                delay:0.5, 
                repeat:-1, yoyo:true,
            }
             
            )

    },[])

useEffect(()=>{
    function getSamePageAnchor (link) {
        if (
          link.protocol !== window.location.protocol ||
          link.host !== window.location.host ||
          link.pathname !== window.location.pathname ||
          link.search !== window.location.search
        ) {
          return false;
        }
    
        return link.hash;
      }
    
        // Scroll to a given hash, preventing the event given if there is one
        function scrollToHash(hash, e) {
          const elem = hash ? document.querySelector(hash) : false;
          if(elem) {
            if(e) e.preventDefault();
            gsap.to(window, {scrollTo: elem});
          }
        }
    
        // If a link's href is within the current page, scroll to it instead
        document.querySelectorAll('a[href]').forEach(a => {
        
          a.addEventListener('click', e => {
            console.log("holis" + e)
            scrollToHash(getSamePageAnchor(a), e);
          });
        });
    
        // Scroll to the element in the URL's hash on load
        scrollToHash(window.location.hash);

},[mover])

 return(

    <div className="container-fluid first" >

        <div className="container-fluid grey"> 

            <view class="navigation">
                <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <a class="nav-link" href="#containerFirst" onClick={()=>{setMover(!mover)}}>Home</a>
                    </li>   
                    <li class="nav-item">
                        <a class="nav-link" href='#containerSecond' onClick={()=>{setMover(!mover)}}>Surf</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#containerThird" onClick={()=>{setMover(!mover)}}>About us</a>
                    </li>
                </ul>
            </view>

            <div className="mensaje3r" >
                <p>  Paseos Surf  </p>
            </div>
            <div className="subtitle" >
                <p className="textSub"> “Surf and feel your life be changed forever” </p>
            </div>

            <div class="row align-items-center">
                <div class="col-lg-6 offset-lg-6 d-none d-lg-block">
                    <ul class="nav flex-column align-content-end">
                        <li class="nav-item icons">
                            <LogoFacebook
                                color={'#FFFF'}
                                height="25px"
                                width="25px"
                                onClick={() => alert('Hi i am Jose Calvano!')}
                            />
                        </li>
                        <li class="nav-item icons">
                            <LogoTwitter
                                color={'#FFFF'}
                                height="25px"
                                width="25px"
                                onClick={() => alert('Hi i am Jose Calvano!')}
                            />
                        </li>
                        <li class="nav-item icons">
                            <LogoLinkedin
                                color={'#FFFF'}
                                height="25px"
                                width="25px"
                                onClick={() => alert('Hi i am Jose Calvano!')}
                            />
                        </li>
                    </ul>
                </div>
            </div>

            <div class="flecha">
                <ArrowDownOutline
                    style={{ verticalAlign: 'middle' }}
                    color={'#FFFF'}
                    height='100%'
                    width='100%'
                    cssClasses="arrowDown"
                />
            
            </div>
        </div>
        

    </div>

 )
}
export default ContainerFirst