import React from "react";

function Tour(props) {
  const { id, title, price, currency, rating, isSpecialOffer } = props;

  return (
    <article className="tour" key={id}>
      <h1>{title}</h1>
      <h4>{price + " " + currency}</h4>
      <h4>{rating + " ★"}</h4>
      <h4>
        {isSpecialOffer ? (
          <span className="special cr cr-bottom cr-right cr-red">
            <div>Special</div>
            <div>Offer</div>
          </span>
        ) : (
          ""
        )}
      </h4>
    </article>
  );
}

export default Tour;
