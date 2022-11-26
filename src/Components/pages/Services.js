import React from "react";
import CardItem from "../CardItem";
import { Link } from 'react-router-dom';
import "./Services.css";

function Cards() {
  return (
    <div className="cards">
      <h1>International Students House offers a number of unique advantages</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://res.cloudinary.com/dbcw3h2dv/image/upload/v1669374578/images-edubroad/HF1_rm4gy0.jpg"
              text="Offering an outdoor swimming pool, a bar and a restaurant, L'Etape Gasconne is a dorm located in Allemans-du-Dropt. Free WiFi access is available."
              label="France, Paris"
              path="/services"
            />
            <CardItem
              src="https://res.cloudinary.com/dbcw3h2dv/image/upload/v1669391206/images-edubroad/HostFamilies/HF1_tvl3aa.jpg"
              text="Located 13 km from California University and 5 km from Cascade de la Beaume,  La Diligence offers a terrace and rooms with a view of the Velay’s Mountains."
              label="Usa, California"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="https://res.cloudinary.com/dbcw3h2dv/image/upload/v1669391206/images-edubroad/HostFamilies/HF3_rx1u7q.jpg"
              text="Featuring free use of the indoor pool and sauna facilities, this former 13th-century palace stands in a large park in the peaceful village of Fürstlich Drehna, set in the Spreewald Forest"
              label="Germany, Fürstlich"
              path="/services"
            />
            <CardItem
              src="https://res.cloudinary.com/dbcw3h2dv/image/upload/v1669391630/images-edubroad/HostFamilies/HF_7_mneyju.jpg"
              text=" Featuring accommodation with free WiFi, air conditioning and flat-screen TV, Tyne Valley Country Inn is situated 31 km from Red Shores at Summerside Raceway and 33 km from Harbourfront Theatre."
              label="Canada, Harbourfront"
              path="/products"
            />
          </ul>

          <ul className="cards__items">
            <CardItem
              src="https://res.cloudinary.com/dbcw3h2dv/image/upload/v1669391204/images-edubroad/HostFamilies/HF2_sqgqo4.jpg"
              text="The First Collection at Jumeirah Village Circle is located in the district of JVC. The 41-storey features 491 fully equipped guestrooms."
              label="United Arab Emirates, Dubai"
              path="/services"
            />
            <CardItem
              src="https://res.cloudinary.com/dbcw3h2dv/image/upload/v1669391203/images-edubroad/HostFamilies/HF5_jj1x7v.jpg"
              text=" Boastingfree WiFi, The Bell Inn, Rickinghall is set in Rickinghall, 26 km from The Apex and 33 km from Ickworth House."
              label="England, Rickinghall"
              path="/products"
            />
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Cards;
