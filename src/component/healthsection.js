import React from 'react'
import logo from './logo.png'
 function healthsection(props) {
    return (
        <section className="healthcare-section">
        <div className="healthcare-image">
            <h1>The world's biggest healthcare platform</h1>
            <p>We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries. </p>
            <img  src={logo}/>

        </div>

        <div className="block-healthcare">
            <div>
                {props.helthtab.map(el =>
                <div className="block-healthcare-box">
                        <img src={el.img} className="block-healthcare-img"/>
                        <h2>{el.title}</h2>
                        <p>{el.dsecription} </p>

                </div>
                )}
            </div>

            <div class="box-margin">
                {props.healthtab2.map(el =>
                <div className="block-healthcare-box">
                        <img src={el.img} class="block-healthcare-img"/>
                        <h2>{el.title}</h2>
                        <p>{el.dsecription} </p>

                </div>)}
            </div>

        </div>

    </section>
    )
}
export default healthsection