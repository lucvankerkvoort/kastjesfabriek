import React, { useContext } from "react";
import { store } from "../../Services/Store";
import { Link } from "react-router-dom";
import SoldBanner from "../SoldBanner/soldBanner";

const Items = ({ title, price, pics, sold }) => {
  const userData = useContext(store);
  const { dispatch } = userData;
  const props = {
    title,
    price,
    pics,
  };

  return (
    <Link
      style={{ textDecoration: "none", color: "black" }}
      onClick={() => dispatch({ type: "current", payload: props })}
      to="/spec"
    >
      <div className="item">
        <div className="picture">
          <div
            style={{
              background: `url(${pics[0]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
        <div className="title">
          <h1>{title}</h1>
        </div>
        {sold ? <SoldBanner /> : null}
        <div className="price">
          <p>€{price},00</p>
        </div>
      </div>
    </Link>
  );
};

export default Items;
