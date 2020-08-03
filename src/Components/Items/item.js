import React, { useContext } from "react";
import { store } from "../../Services/Store";
import { Link } from "react-router-dom";
import { db } from "../../Firebase/Firebase";
import SoldBanner from "../SoldBanner/soldBanner";

const Items = ({ title, price, pics, sold, description }) => {
  const userData = useContext(store);
  const { dispatch } = userData;
  const props = {
    title,
    price,
    pics,
    description,
  };

  return (
    <div className="item">
      <Link
        style={{ textDecoration: "none", color: "black" }}
        onClick={() => dispatch({ type: "current", payload: props })}
        to="/spec"
      >
        <div className="picture">
          <div
            style={{
              background: `url(${pics[0]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
      </Link>
      <div className="item-title">
        <h1>{title}</h1>
      </div>
      {sold ? <SoldBanner /> : null}
      <div className="price">
        <p>€{price},00</p>
      </div>
      <div
        className="remove"
        onClick={() =>
          db
            .collection("items")
            .doc(title)
            .delete()
            .then(() =>
              dispatch({ type: "check", payload: !userData.state.check })
            )
        }
      >
        X
      </div>
    </div>
  );
};

export default Items;
