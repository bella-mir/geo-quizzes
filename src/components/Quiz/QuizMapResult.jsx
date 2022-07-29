import React from "react";
import { useRef } from "react";
import L from "leaflet";
import { GeoJSON } from "react-leaflet";
import * as myConstClass from "./constants.js";
import nations from "../../data/nations.json";

export default function ResultMap(props) {
  let selected = null;

//   const HighlightFeature = (layer) => {
//     if (selected == null || selected._leaflet_id !== layer._leaflet_id) {
//       layer.setStyle({
//         /*weight: 3,
//             color: 'white',*/
//         weight: 1.5,
//         dashArray: "",
//         fillOpacity: 0.9,
//       });
//       layer
//         .bindTooltip(layer.feature.properties.Nation, {
//           permanent: true,
//           direction: "center",
//           position: "auto",
//         })
//         .openTooltip();

//       if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
//         layer.bringToFront();
//       }
//     }
//   };

  const geoJsonRef = useRef();

//   const ResetHighlight = (layer) => {
//     if (selected == null || selected._leaflet_id !== layer._leaflet_id) {
//       geoJsonRef.current.resetStyle(layer);
//     }
//   };

  const onEachFeatureF = (feature, layer) => {
    // layer.on({
    //   mouseover: function (e) {
    //     HighlightFeature(e.target);
    //   },
    //   mouseout: function (e) {
    //     ResetHighlight(e.target);
    //   },
    // });
    console.log(props.rightAnswers);
    layer
      .bindTooltip(feature.properties.Nation, {
        permanent: true,
        direction: "center",
        position: "auto",
      })
      .openTooltip();
    if (props.rightAnswers.includes(layer.feature.properties.Nation)) {
        layer.setStyle({
          fillColor: "#A4D6A5",
          color: "white",
          weight: 1.5,
          dashArray: "",
          fillOpacity: 0.7,
        });
      } else {
        layer.setStyle({
          fillColor: "#F27272",
          color: "white",
          weight: 1.5,
          dashArray: "",
          fillOpacity: 0.7,
        });
      }
  };

  

  
  
  return (
    <GeoJSON data={nations} onEachFeature={onEachFeatureF} ref={geoJsonRef} />
  );
}
