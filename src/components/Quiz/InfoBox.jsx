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
          Indigenous small-numbered peoples <br />of the North, Siberia and the Far
          East
        </h4>
        <br />
      </div>

      {props.islearn  ? (
        <div>
          <p className="textnation">
            {props.info ? (
              <h4> {props.info.Nation}</h4>
            ) : (
              "Information about peoples - choose an area"
            )}
          </p>
          <div className="text">
            {props.info ? (
              <p>
                <h6>Население: </h6> {props.info.Population} человек
              </p>
            ) : null}
          </div>
          <div className="text">
            {" "}
            {props.info ? (
              <p>
                <h6>Язык: </h6> {props.info.Language}{" "}
              </p>
            ) : null}
          </div>
          <div className="text">
            {" "}
            {props.info ? (
              <p>
                <h6>Языковая группа: </h6> {props.info.LangFamily}{" "}
              </p>
            ) : null}
          </div>
          <div className="text">
            {" "}
            {props.info ? (
              <p>
                <h6>Регионы проживания: </h6> {props.info.Oblast}{" "}
              </p>
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
          <h4 className="title__name">Where live ...</h4>
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
            <h4>Вы знаете, где проживают </h4>
            <h2>
              {score} из {props.nationsData.length} народов
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

// import React, { useState, useEffect } from "react";
// import "./InfoBox.css";

// const InfoBox = (props) => {
//   const [showScore, setShowScore] = useState(false);
//   const [currentQuestion, setCurrentQuestion] = useState(-1);
//   let [score, setScore] = useState(0);
//   const [quizMode, setQuizMode] = useState(false);

//   const handleQuizButtonClick = () => {
//     setQuizMode(true)
//   };

//   const handleResetButtonClick = () => {
//     props.handleStartQuizClick(true);
//     setShowScore(false);
//     setScore(0);
//     setCurrentQuestion(0);
//   };

//   useEffect(() => {
//     if (props.answer === props.nationsData[currentQuestion]) {
//       setScore(score + 1);
//     }
//     const nextQuestion = currentQuestion + 1;
//     if (nextQuestion < props.nationsData.length) {
//       setCurrentQuestion(nextQuestion);
//     } else {
//       props.handleStartQuizClick(false);
//       setShowScore(true);
//     }
//   }, [props.answer]);

//   return (
//     <div className="infobox">
//       <div className="title">
//         <h4 className="title">
//           Indigenous small-numbered peoples of the North, Siberia and the Far
//           East
//         </h4>

//         <div>
//           <p className="textnation">

//             {props.info  ? (
//               <div>
//                 <h4> {props.info.Nation}</h4>
//                 <div className="text">
//                   <p>
//                     <h6>Population: </h6> {props.info.Population} thousand
//                   </p>
//                   <p>
//                     <h6>Area: </h6> {props.info.Area} square meters
//                   </p>
//                   <p>
//                     <h6>Сapital: </h6> {props.info.Capital}
//                   </p>
//                 </div>
//               </div>
//             ) : (
//               "Information about peoples - choose one on the map"
//             )}
//           </p>

//           {quizMode ? (
//         <div className="quiz-box">
//           <h4 className="title__name">Где живут ...</h4>
//           <div className="question-section">
//             <h1>{props.nationsData[currentQuestion]}?</h1>
//             <span>
//               ({currentQuestion + 1}/{props.nationsData.length})
//             </span>
//           </div>
//         </div>
//       ) : null}

//           <div className="button_container button_container_learn ">
//             <button
//               className="button button_play"
//               onClick={handleQuizButtonClick}
//             >
//               Play
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InfoBox;
