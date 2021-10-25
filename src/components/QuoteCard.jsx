import React from "react";

const QuoteCard = ({ quoteSimpson }) => {
  return (
    <div className="quote">
      <img src={quoteSimpson.image} alt="Simpson" />
      <p className="quote-p">{quoteSimpson.quote}</p>
      <p>{quoteSimpson.character}</p>
    </div>
  );
};

export default QuoteCard;
