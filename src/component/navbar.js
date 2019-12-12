import React from 'react'

 function navbar(props) {
    return (
        
<header class="nav-bar">
        
<a href=""><img id="img" class="" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="Docplanner Group"/> </a>
    
        <ul class="header-menu">
            {props.x.map(el =>
            <li className="dropdown-link"><a href="" >{el.link}</a>
                <ul className="dropdown-menu">
                    {!el.drop? null: el.drop.map(edrop =>
                        <li>{edrop}</li>

                    )}
                </ul>
            
            </li>

            )}
            
        </ul>
    
      
</header> 
        
    )
}
export default navbar
