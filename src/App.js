import React, { useState } from "react";
import Tour from "./Tour";

let defaultTours = [
  {
    id: 25651,
    title: "German Tour: Parliament Quarter & Reichstag glass dome",
    price: "14",
    currency: "$",
    rating: "4.8",
    isSpecialOffer: false,
  },
  {
    id: 6960,
    title: "Skip the Line: Pergamon Museum Berlin Tickets",
    price: "21",
    currency: "$",
    rating: "4.8",
    isSpecialOffer: false,
  },
  {
    id: 80426,
    title: "Berlin WelcomeCard: Transport, Discounts & Guide Book",
    price: "10",
    currency: "$",
    rating: "4.6",
    isSpecialOffer: false,
  },
  {
    id: 23113,
    title: "Skip the Line: Berlin TV Tower Ticket",
    price: "143",
    currency: "$",
    rating: "4.6",
    isSpecialOffer: false,
  },
  {
    id: 26093,
    title: "1-Hour City Tour by Boat with Guaranteed Seating",
    price: "14",
    currency: "$",
    rating: "4.5",
    isSpecialOffer: false,
  },
  {
    id: 97470,
    title: "Berlin Hop-on Hop-off Bus Tour: 1- or 2-Day Ticket",
    price: "210",
    currency: "$",
    rating: "4.3",
    isSpecialOffer: false,
  },
  {
    id: 15647,
    title: "German Tour: Reichstag with Plenary Chamber & Cuppola",
    price: "59",
    currency: "$",
    rating: "4.8",
    isSpecialOffer: false,
  },
  {
    id: 26823,
    title: "Berlin: 2.5-Hour Boat Tour Along the River Spree",
    price: "41",
    currency: "$",
    rating: "4.5",
    isSpecialOffer: true,
  },
  {
    id: 58351,
    title: "Museum Pass Berlin: 3-Day Entry to Over 40 Top Museums",
    price: "14",
    currency: "$",
    rating: "4.5",
    isSpecialOffer: false,
  },
  {
    id: 75009,
    title: "Reichstag: Rooftop Coffee Break at Käfer",
    price: "50",
    currency: "$",
    rating: "4.6",
    isSpecialOffer: true,
  },
  {
    id: 19340,
    title: "Skip the Line: Neues Museum Berlin Tickets",
    price: "46",
    currency: "$",
    rating: "4.9",
    isSpecialOffer: true,
  },
  {
    id: 13399,
    title: "German Tour: Reichstag with dome Chamber &",
    price: "87",
    currency: "$",
    rating: "4.8",
    isSpecialOffer: false,
  },
  {
    id: 86150,
    title: "Berlin Hop-on Hop-off Bus Tour with Live Commentary",
    price: "8",
    currency: "$",
    rating: "4.3",
    isSpecialOffer: false,
  },
  {
    id: 40881,
    title: "Skip the Line: TV Tower Early Bird Tickets",
    price: "140",
    currency: "$",
    rating: "4.5",
    isSpecialOffer: false,
  },
];

function App() {
  const [tours, setTour] = useState(defaultTours);
  //console.log(tours);

  return (
    <div className="App">
      {tours.map((tour) => {
        return <Tour key={tour.id} {...tour}></Tour>;
      })}
    </div>
  );
}

export default App;
