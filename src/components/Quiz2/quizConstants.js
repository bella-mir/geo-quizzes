import regions from "../../data/rus_regions_2.json";

export const selectedNations = [];
for (var i = 0; i < regions.features.length; i++) {
  selectedNations.push(regions.features[i].properties.UNIVERSAL);
}
