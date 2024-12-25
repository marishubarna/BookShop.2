import React from "react";

const ShopCard = () => {
  return (
    <div>
      <div className="ShopListDiv">
        <h1>Picked books :{} </h1>
        <div className="pickedCostTitle">
          <h2 className="TitleShopBook">{}</h2>
          <h2 className="CountBook">{}</h2>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
