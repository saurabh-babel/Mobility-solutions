import filter from "./assets/filter.png";
import React from "react";

const Content = () => {
  return (
    <div className="content">
      <div className="filters">
        <img src={filter} alt="" id="icon-id" />
        <p>FILTERS</p>
      </div>
      <div className="container1"></div>
      <div className="filters-container">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          laborum a atque voluptas optio, doloremque voluptatibus quibusdam
          dignissimos possimus eos, reprehenderit architecto! Veritatis autem
          libero laudantium iste voluptate numquam molestiae?
        </p>
      </div>
    </div>
  );
};

export default Content;
