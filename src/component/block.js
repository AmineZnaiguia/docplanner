import React from "react";

function block(props) {
  return (
    <div className="service-section">
      {props.tab.map(el => (
        <div className={el.style} id="patients-margin">
          <h4>{el.title}</h4>
          <h2>{el.parag}</h2>

          {!el.option ? null : (
            <select id="style-select">
              {el.option.map(e => (
                <option>{e}</option>
              ))}
            </select>
          )}
          <img src={el.img} />
        </div>
      ))}
    </div>
  );
}
export default block;
