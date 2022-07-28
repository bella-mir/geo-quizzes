import React  from "react";
import "./InfoBox.css";

const InfoBox = (props) => {

  return (
    <div className="infobox">
      <div className="title">
        <h4 className="title">
          Russian Regions
        </h4>

        <div>
          <p className="textnation">
            {props.info ? (
                <div>
              <h4> {props.info.Nation}</h4>
              <div className="text">
              <p><h6>Population: </h6> {props.info.Population} thousand</p>
              <p><h6>Area: </h6> {props.info.Area} square meters</p>
              <p><h6>Сapital: </h6> {props.info.Capital}</p>
            </div>
            </div>

            ) : (
              "Information about regions - choose one on the map"
            )}
          </p>
          <div className="button_container button_container_learn ">
            <button
              className="button button_play"
            >
              Play
            </button>
          </div>
        </div>

      </div>
      
    
    </div>
  );
};

export default InfoBox;