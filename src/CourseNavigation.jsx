import React, { useState } from "react";

const CourseNavigation = () => {
  const [activeUnit, setActiveUnit] = useState(1);
  const [completedUnits, setCompletedUnits] = useState([]);
  const [isQuizPassed, setIsQuizPassed] = useState(false);

  const handleUnitClick = (unitNum) => {
    if (completedUnits.includes(unitNum - 1)) {
      setActiveUnit(unitNum);
    }
  };

  const handleQuizSubmit = (quizResult) => {
    setIsQuizPassed(quizResult >= 70);
    if (!completedUnits.includes(activeUnit - 1)) {
      setCompletedUnits([...completedUnits, activeUnit - 1]);
    }
  };
  const handleCertificateDownload = () => {
    // code to download certificate
  };

  return (
    <div>
      <h2>Course Navigation</h2>
      <ul>
        <li className={activeUnit === 1 ? "active" : ""}>
          <button onClick={() => handleUnitClick(1)}>
            Unit 1: Introduction and Getting to Know the Program
          </button>
          {activeUnit === 1 && (
            <ul>
              <li>
                <button>Changing your profile</button>
              </li>
              <li>
                <button>Assessments button</button>
              </li>
            </ul>
          )}
        </li>
        <li className={activeUnit === 2 ? "active" : ""}>
          <button
            onClick={() => handleUnitClick(2)}
            disabled={!completedUnits.includes(0)}
          >
            Unit 2: Food Rotation
          </button>
          {activeUnit === 2 && completedUnits.includes(0) && (
            <ul>
              <li>
                <button>Your content video</button>
              </li>
              <li>
                <button>Your content text</button>
              </li>
              <li>
                <button onClick={() => setIsQuizPassed(false)}>
                  Unit 2 Quiz button
                </button>
              </li>
              {isQuizPassed && (
                <li>
                  <button
                    onClick={() => setCompletedUnits([...completedUnits, 1])}
                  >
                    Proceed to Unit 3
                  </button>
                </li>
              )}
            </ul>
          )}
        </li>
        <li className={activeUnit === 3 ? "active" : ""}>
          <button
            onClick={() => handleUnitClick(3)}
            disabled={!completedUnits.includes(1)}
          >
            Unit 3: Safe Knife Handling
          </button>
          {activeUnit === 3 && completedUnits.includes(1) && (
            <ul>
              <li>
                <button>Your content video</button>
              </li>
              <li>
                <button>Your content video</button>
              </li>
              <li>
                <button>Your content text</button>
              </li>
              <li>
                <button onClick={() => setIsQuizPassed(false)}>
                  Unit 3 Quiz button
                </button>
              </li>
              {isQuizPassed && (
                <li>
                  <button
                    onClick={() => setCompletedUnits([...completedUnits, 2])}
                  >
                    Proceed to Unit 4
                  </button>
                </li>
              )}
            </ul>
          )}
        </li>
        <li className={activeUnit === 4 ? "active" : ""}>
          <button
            onClick={() => handleUnitClick(4)}
            disabled={!completedUnits.includes(2)}
          >
            Unit 4: Raw Meat
          </button>
          {activeUnit === 4 && completedUnits.includes(2) && (
            <ul>
              <li>
                <button>Your content video</button>
              </li>
              <li>
                <button>Your content video</button>
              </li>
              <li>
                <button>Your content text</button>
              </li>
              <li>
                <button onClick={() => setIsQuizPassed(false)}>
                  Unit 4 Quiz button
                </button>
              </li>
              {isQuizPassed && (
                <li>
                  <button
                    onClick={() => setCompletedUnits([...completedUnits, 3])}
                  >
                    proceed to unit 5
                  </button>
                </li>
              )}
            </ul>
          )}
        </li>{" "}
        <li className={completedUnits.includes(1) ? "active" : ""}>
          <button
            onClick={() => handleUnitClick(5)}
            disabled={!completedUnits.includes(1)}
          >
            Unit 5: Final Assessment
          </button>
        </li>
      </ul>
      {completedUnits.includes(2) && (
        <button onClick={handleCertificateDownload}>
          Download Certificate
        </button>
      )}
    </div>
  );
};

export default CourseNavigation;
