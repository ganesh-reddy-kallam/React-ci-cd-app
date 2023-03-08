import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import Qui from "./Quiz2";

function navtest() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/quiz">Quiz</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/quiz">
            <Qui />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  const history = useHistory();

  function handleStartQuiz() {
    history.push("/quiz");
  }

  function Quiz() {
    const [score, setScore] = useState(0);
    const history = useHistory();

    function handleQuizSubmit() {
      // send score to the previous page
      history.push({
        pathname: "/",
        state: { score: score },
      });
    }

    return (
      <div>
        <h2>Quiz</h2>
        // your quiz component code here
        <button onClick={handleQuizSubmit}>Submit Quiz</button>
      </div>
    );
  }
}
export default navtest;
