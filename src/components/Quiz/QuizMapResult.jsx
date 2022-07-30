import React from "react";
import { useRef } from "react";
import { GeoJSON } from "react-leaflet";
import nations from "../../data/nations.json";

export default function ResultMap(props) {
  const geoJsonRef = useRef();

  const onEachFeatureF = (feature, layer) => {
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
