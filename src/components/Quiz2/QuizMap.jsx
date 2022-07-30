import React from "react";
import { useRef } from "react";
import L from "leaflet";
import { GeoJSON } from "react-leaflet";
import * as myConstClass from "./constants.js";
import regions from "../../data/rus_regions_2.json";

export default function QuizMap(props) {
  let selected = null;
  let counter = -1;

  const HighlightFeature = (layer) => {
    if (selected == null || selected._leaflet_id !== layer._leaflet_id) {
      layer.setStyle({
        weight: 1.5,
        dashArray: "",
        fillOpacity: 1,
      });
      if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
      }
    }
  };

  const geoJsonRefQuiz = useRef();

  const ResetHighlight = (layer) => {
    if (selected == null || selected._leaflet_id !== layer._leaflet_id) {
      geoJsonRefQuiz.current.resetStyle(layer);
    }
  };

  const Select = (layer) => {
    if (selected !== null) {
      var previous = selected;
    }
    console.log(props.nationsData[counter]);
    if (layer.feature.properties.UNIVERSAL === props.nationsData[counter]) {
      layer.setStyle({
        weight: 3,
        color: "#A4D6A5",
        fillOpacity: 0.5,
        fillColor: "#A4D6A5",
      });
      props.handleRightAnswers(layer.feature.properties.UNIVERSAL);
    } else {
      layer.setStyle({
        weight: 1,
        color: "white",
        fillColor: "#F27272",
        fillOpacity: 0.5,
      });
      props.handleWrongAnswers(props.nationsData[counter]);
    }

    selected = layer;
    if (previous) {
      ResetHighlight(previous);
      selected.closeTooltip();
    }
  };

  const onEachFeatureFQuiz = (feature, layer) => {
    layer.on({
      click: function (e) {
        counter = counter + 1;
        console.log(counter);
        Select(e.target);
        props.handleSetAnswer(e.target.feature.properties.UNIVERSAL);
        e.target
          .bindTooltip(feature.properties.UNIVERSAL, {
            direction: "center",
            position: "auto",
          })
          .openTooltip();
      },
      mouseover: function (e) {
        HighlightFeature(e.target);
      },
      mouseout: function (e) {
        ResetHighlight(e.target);
      },
    });
  };
  return (
    <GeoJSON
      data={regions}
      style={myConstClass.quizStyle}
      onEachFeature={onEachFeatureFQuiz}
      ref={geoJsonRefQuiz}
    />
  );
}
