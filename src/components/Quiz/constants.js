export const basemapStyle = {
  color: "#E3DFDA",
  weight: 2,
  opacity: 1,
  fillColor: "#8a99a6",
  fillOpacity: 1,
};

export const basemapStyle2 = {
  color: "white",
  weight: 1.2,
  Opacity: 1,
  fillColor: "#E1EAF2",
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
