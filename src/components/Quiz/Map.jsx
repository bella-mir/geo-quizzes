import React from "react";
import { useState } from "react";
import L from "leaflet";
import {
  MapContainer,
  GeoJSON,
  ScaleControl,
  ZoomControl,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";
import "proj4leaflet";
import "proj4";
import InfoBox from "./InfoBox";
import LearnMap from "./LearnMap";
import QuizMap from "./QuizMap";
import ResultMap from "./QuizMapResult";
import * as myConstClass from "./constants.js";
import world from "../../data/world.json";
import russia from "../../data/russia.json";
import lakes from "../../data/lakes.json";
import { selectedNations } from "./quizConstants";

const Map = () => {
  const [nationsData, setNationsData] = useState(selectedNations);
  let [info, SetInfo] = useState(null);
  let [answer, SetAnswer] = useState(null);
  const [quizMode, setQuizMode] = useState(false);
  const [learnMode, setLearnMode] = useState(true);
  const [resultsMode, setResultsMode] = useState(false);
  const [rightAnswers, setRightAnswers] = useState([]);

  const handleStartQuizClick = (option) => {
    setQuizMode(option);
  };

  const handleLearnClick = (option) => {
    setLearnMode(option);
  };

  const handleResults = (option) => {
    setResultsMode(option);
  };

  const handleAnswers = (answer) => {
    setRightAnswers((rightAnswers) => [...rightAnswers, answer]);
  };

  //create function that shuffles array
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  const crs = new L.Proj.CRS(
    "EPSG:3576",
    "+proj=laea +lat_0=90 +lon_0=90 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
    {
      resolutions: [
        32768, 16384, 8192, 4096, 2048, 1024, 512, 256, 128, 64, 32, 16, 8, 4,
        2, 1, 0.5,
      ],
    }
  );

  return (
    <div className="main">
      <MapContainer
        style={{ height: "100vh" }}
        zoomControl={false}
        zoom={1.5}
        center={[65, 130]}
        minZoom={1.5}
        maxZoom={5}
        crs={crs}
        maxBounds={[
          [20, 75],
          [870, 2000],
        ]}
      >
        <GeoJSON data={world} style={myConstClass.basemapStyle2} />
        <GeoJSON data={russia} style={myConstClass.basemapStyle} />
        <GeoJSON data={lakes} style={myConstClass.waterStyle} />

        {quizMode ? (
          <QuizMap handleSetAnswer={SetAnswer} nationsData={nationsData} handleAnswers={handleAnswers} />
        ) : null}
        {learnMode ? <LearnMap handleSetInfo={SetInfo} /> : null}
        {resultsMode ? <ResultMap rightAnswers={rightAnswers} /> : null}

        <ScaleControl position="bottomleft" />
        <ZoomControl position="bottomleft" />
      </MapContainer>
      <InfoBox
        info={info}
        answer={answer}
        isQuiz={quizMode}
        islearn={learnMode}
        isResults={resultsMode}
        handleStartQuizClick={handleStartQuizClick}
        handleLearnClick={handleLearnClick}
        handleResults={handleResults}
        nationsData={nationsData}
      />
    </div>
  );
};

export default Map;
