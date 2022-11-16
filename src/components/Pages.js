/* eslint-disable jsx-a11y/img-redundant-alt */
import { Page } from "./styles/Pages.styled";
import React from 'react'



import databiz from '../images/client-databiz.svg'
import audiophile from '../images/client-audiophile.svg'
import meet from '../images/client-meet.svg'
import maker from '../images/client-maker.svg'
import desktop from '../images/image-hero-desktop.png'
import mobile from '../images/image-hero-mobile.png'




const Pages = () => {
    return (
        <Page>
            <div className="grids" >

                <div className="headings">
                    <div>Make</div>
                    <div>remote work</div>
                </div>
                <p className="description" >Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.  </p>

                <button> Learn More </button>

                <div className="brands">
                    <img src={databiz} alt="client picture databiz"></img>
                    <img src={audiophile} alt="client picture audiophile"></img>
                    <img src={meet} alt="client picture meet"></img>
                    <img src={maker} alt="client picture marker"></img>

                </div>



                <img className="ig" alt="background Image" src={window.innerWidth < 600 ? mobile : desktop}></img>

            </div>
        </Page >
    )
}

export default Pages