import logo from './logo.svg';
import './App.css';

import Course5 from './sample4';
import CardsContainer from './sarting2';
import CardsContainer1 from './starting3';
import BuyNowButton from './buynow';
import Quiz2 from './Quiz2';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>

          <Route path="/sample4" element={<Course5 />} />
          <Route path="/quiz2" element={<Quiz2 />} />
        </Routes>
        <Course5 />
        <CardsContainer1 />

      </div>
    </BrowserRouter>
  );
}

export default App;
