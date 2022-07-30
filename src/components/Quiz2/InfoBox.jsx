import React, { useState, useEffect } from "react";
// import { selectedNations } from "./quizConstants";
import "./InfoBox.css";

const InfoBox = (props) => {
  //   const [showScore, setShowScore] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(-1);
  let [score, setScore] = useState(0);

  const handleLearnButtonClick = () => {
    props.handleResults(false);
    setScore(0);
    setCurrentQuestion(0);
    props.handleLearnClick(true);
    props.handleStartQuizClick(false);
    // props.handleStartModeClick(false);
  };

  const handleQuizButtonClick = () => {
    props.handleStartQuizClick(true);
    props.handleLearnClick(false);
    props.handleStartModeClick(false);
  };

  const handleResetButtonClick = () => {
    props.handleStartQuizClick(true);
    props.handleResults(false);
    setScore(0);
    setCurrentQuestion(0);
  };

  useEffect(() => {
    if (props.answer === props.nationsData[currentQuestion]) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < props.nationsData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      props.handleStartQuizClick(false);
      props.handleResults(true);
    }
  }, [props.answer]);

  return (
    <div className="infobox">
      <div className="title">
        <h4 className="title">
  Russian regions
        </h4>
        <br />
      </div>

      {props.islearn ? (
        <div>
          <p className="textnation">
            {props.info ? (
              <h4> {props.info.Nation}</h4>
            ) : (
              "Information about regions - choose an area"
            )}
          </p>
          <div className="text">
            {props.info ? (
              <div>
                <p className="textnation">
                <h4> {props.info.UNIVERSAL}</h4>
                </p>
                <p>
                  <h6>Area: </h6> {props.info.AREA} square km
                </p>
              </div>
            ) : null}
          </div>
          
          <div className="button_container button_container_learn ">
            <button
              className="button button_play"
              onClick={handleQuizButtonClick}
            >
              Play
            </button>
          </div>
        </div>
      ) : null}

      {props.isQuiz ? (
        <div className="quiz-box">
          <h4 className="title__name">Where is ...</h4>
          <div className="question-section">
            <h1>{props.nationsData[currentQuestion]}?</h1>
            <span>
              ({currentQuestion + 1}/{props.nationsData.length})
            </span>
          </div>
        </div>
      ) : null}

      {props.isResults ? (
        <div className="title__container">
          <div className="button_container">
            <h4> You know where  </h4>
            <h2>
              {score} out of {props.nationsData.length} regions
            </h2>
            <div className="button_container button_container_learn ">
              <button
                className="button button_play"
                onClick={handleResetButtonClick}
              >
                Play again
              </button>
              <button
                className="button button_play"
                onClick={handleLearnButtonClick}
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default InfoBox;
