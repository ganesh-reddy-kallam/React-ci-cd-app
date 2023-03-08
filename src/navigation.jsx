import { useState } from "react";

function Course() {
  const [activeUnit, setActiveUnit] = useState(1);
  const [completedUnits, setCompletedUnits] = useState([]);

  const handleUnitClick = (unitNumber) => {
    if (completedUnits.includes(unitNumber - 1)) {
      setActiveUnit(unitNumber);
    }
  };

  const handleContentOpen = (unitNumber) => {
    if (!completedUnits.includes(unitNumber - 1)) {
      setCompletedUnits([...completedUnits, unitNumber - 1]);
    }
  };

  const handleCertificateDownload = () => {
    // code to download certificate
  };

  return (
    <div>
      <h1>Course</h1>
      <ul>
        <li className={activeUnit === 1 ? "active" : ""}>
          <button onClick={() => handleUnitClick(1)}>
            Unit 1: Introduction and Getting to Know the Program
          </button>
          {activeUnit === 1 && (
            <ul>
              <li>
                <button onClick={() => handleContentOpen(1)}>
                  Your content video
                </button>
              </li>
              <li>
                <button onClick={() => handleContentOpen(1)}>
                  Your content text
                </button>
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
                <button onClick={() => handleContentOpen(2)}>
                  Your content video
                </button>
              </li>
              <li>
                <button onClick={() => handleContentOpen(2)}>
                  Your content text
                </button>
              </li>
              <li>
                <button>Unit 2 Quiz button</button>
              </li>
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
                <button onClick={() => handleContentOpen(3)}>
                  Your content video
                </button>
              </li>
              <li>
                <button onClick={() => handleContentOpen(3)}>
                  Your content text
                </button>
              </li>
              <li>
                <button>Unit 3 Quiz button</button>
              </li>
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
                <button onClick={() => handleContentOpen(4)}>
                  Your content video
                </button>
              </li>
              <li>
                <button onClick={() => handleContentOpen(4)}>
                  Your content text
                </button>
              </li>
              <li>
                <button>Unit 4 Quiz button</button>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}
export default Course;
