import React, { useState } from "react";

function Course2() {
  const [activeUnit, setActiveUnit] = useState(1);
  const [completedUnits, setCompletedUnits] = useState([]);

  const handleUnitClick = (unitIndex) => {
    setActiveUnit(unitIndex);
  };

  const handleQuizSubmit = (quizScore) => {
    if (quizScore >= 70) {
      const updatedCompletedUnits = [...completedUnits, activeUnit];
      setCompletedUnits(updatedCompletedUnits);
    }
  };

  return (
    <div>
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
            disabled={!completedUnits.includes(1)}
          >
            Unit 2: Food Rotation
          </button>
          {activeUnit === 2 && completedUnits.includes(1) && (
            <ul>
              <li>
                <button>Your content video</button>
              </li>
              <li>
                <button>Your content text</button>
              </li>
              <li>
                <button onClick={() => handleUnitClick(2)}>
                  Unit 2 Quiz button
                </button>
              </li>
            </ul>
          )}
        </li>
        <li className={activeUnit === 3 ? "active" : ""}>
          <button
            onClick={() => handleUnitClick(3)}
            disabled={!completedUnits.includes(2)}
          >
            Unit 3: Safe Knife Handling
          </button>
          {activeUnit === 3 && completedUnits.includes(2) && (
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
                <button onClick={() => handleUnitClick(3)}>
                  Unit 3 Quiz button
                </button>
              </li>
            </ul>
          )}
        </li>
        <li className={activeUnit === 4 ? "active" : ""}>
          <button
            onClick={() => handleUnitClick(4)}
            disabled={!completedUnits.includes(3)}
          >
            Unit 4: Raw Meat
          </button>
          {activeUnit === 4 && completedUnits.includes(3) && (
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
                <button onClick={() => handleUnitClick(4)}>
                  Unit 4 Quiz button
                </button>
              </li>
            </ul>
          )}
        </li>
        <li className={activeUnit === 5 ? "active" : ""}>
          <button
            onClick={() => handleUnitClick(5)}
            disabled={!completedUnits.includes(4)}
          >
            Unit 5: Final Assessment
          </button>
          {activeUnit === 5 && completedUnits.includes(4) && (
            <ul>
              <li>
                <button onClick={() => handleUnitClick(5)}>
                  Cumulative Assessment of all Units button
                </button>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}
export default Course2;
