import React, { useState, useEffect } from "react";
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
  //I want to fetch the data as soon as our component is loaded.
  //To run this as soon as our component is rendered, so use useEffect().
  useEffect(() => {
    //create a fetchData function which is called once in the TourList() component and fetch the required data from the API endpoint.
    //call fetch() method with provided URL, then convert the result to JSON object and assign the array to tours
    //use async/await to fetch the data
    const fetchData = async () => {
      let response;
      try {
        response = await fetch("http://localhost:3005/tours");
        const data = await response.json();
        // store the data into our tours variable
        setTour(data);
        //orgTours = data;
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []); //give useEffect a second parameter of a blank array [] so that this effect only runs once

  //We need to have a way to store data that we get from the API. We'll use React's useState:
  const [tours, setTour] = useState(defaultTours);
  //console.log(tours);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
      <div>
        <input
          type="text"
          placeholder="search..."
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>
      <section className="tourlist">
        {tours &&
          tours
            .filter((tour) => {
              if (searchTerm === "") {
                return tour;
              } else if (
                tour.title.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return tour;
              }
            })
            .map((tour) => {
              return <Tour key={tour.id} {...tour}></Tour>;
            })}
      </section>
    </div>
  );
}

export default App;
