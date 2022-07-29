import nationsData from "../../data/nations.json";

export const selectedNations = [];
for (var i = 0; i < nationsData.features.length; i++) {
  selectedNations.push(nationsData.features[i].properties.Nation);
}
