import React from 'react'

 function card(props) {
    return (
        <section className="section-image">
        {props.cardtab.map(el =>
            <div className="block-image">
                <img src={el.img}  className="block-healthcare-img"/>
                <div className="box-content"> 
                <p>{el.capital}</p>
                 <input type="button" value={el.capital} class="image-button"/>
                </div>

        </div>)}
        </section>
    )
}
export default card