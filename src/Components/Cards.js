import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check Out Some Of Our Features!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://res.cloudinary.com/dbcw3h2dv/image/upload/v1666102667/images-edubroad/Carousel2_uh7xpp.jpg"
              text="A forum dedicated to students for discussing any topic related to traveling and studying abroad."
              label="Student Forum"
              path="/services"
            />
            <CardItem
              src="https://res.cloudinary.com/dbcw3h2dv/image/upload/v1666102689/images-edubroad/Networking_ceseuz.webp"
              text="Connect with alumni from your destination university and grow your network."
              label="Networking"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="https://res.cloudinary.com/dbcw3h2dv/image/upload/v1666102685/images-edubroad/map_zg9sjw.jpg"
              text="A map showcasing all lebanese owned businesses abroad!"
              label="Businesses on the Map"
              path="/services"
            />
            <CardItem
              src="https://res.cloudinary.com/dbcw3h2dv/image/upload/v1666102661/images-edubroad/Carousel1_bsq8b4.webp"
              text="You'll have the opportunity to stay with an approved host family of your choice who will welcome you, your child or family into their home during your year/semester, or become a host yourself!"
              label="Host Families"
              path="/products"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;