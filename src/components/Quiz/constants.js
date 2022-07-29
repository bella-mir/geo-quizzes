export const basemapStyle = {
  color: "white",
  weight: 1,
  opacity: 1,
  fillColor: "#D4D4D9",
  fillOpacity: 1,
};

export const basemapStyle2 = {
  color: "white",
  weight: 1,
  Opacity: 1,
  fillColor: "#EDEDF2",
  fillOpacity: 1,
};

export const waterStyle = {
  color: "white",
  weight: 0.8,
  opacity: 1,
  fillColor: "white",
  fillOpacity: 1,
};

export const quizStyle = {
  color: "white",
  weight: 0.5,
  opacity: 1,
  fillColor: "#91a3bf",
  fillOpacity: 0.6,
};

export const subteStyle = (nations) => {
  return {
    fillColor: nations.properties.color,
    weight: 1,
    fillOpacity: 0.6,
    color: "white",
  };
};
