import React, { useState } from "react";
import "./sarting.css";
import data from "./products.json";

function Card({ item }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className="card-front">
        <img src={item.image} alt={item.title} />
        <div className="card-info">
          <h3>{item.title}</h3>
          <p>{item.Author}</p>
          <p>{item.description}</p>
        </div>
      </div>
      <div className="card-back">
        <h2>{item.title}</h2>
        <p>{item.details}</p>
        <span>{item.price}</span>
      </div>
    </div>
  );
}

function CardsContainer() {
  return (
    <div className="cards-container">
      {data.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}

export default CardsContainer;
