import React, { useState } from "react";
import "./Cards.css";

const Cards = () => {
  const [showData, setShowData] = useState(false);

  const cardData = [
    {
      id: 1,
      image: "https://via.placeholder.com/150",
      title: "Product 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
      price: 9.99,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      title: "Product 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
      price: 19.99,
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150",
      title: "Product 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
      price: 14.99,
    },
    {
      id: 4,
      image: "https://via.placeholder.com/150",
      title: "Product 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
      price: 29.99,
    },
    {
      id: 5,
      image: "https://via.placeholder.com/150",
      title: "Product 5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
      price: 39.99,
    },
  ];

  const toggleData = (id) => {
    setShowData(id === showData ? null : id);
  };

  return (
    <div className="cards">
      {cardData.map((card) => (
        <div key={card.id} className="card" onClick={() => toggleData(card.id)}>
          <img src={card.image} alt={card.title} />
          <div className="card-content">
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            <span className="price">${card.price}</span>
          </div>
          {showData === card.id && (
            <div className="card-data">
              <p>More information about {card.title}:</p>
              <ul>
                <li>ID: {card.id}</li>
                <li>Price: ${card.price}</li>
                <li>Description: {card.description}</li>
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Cards;
