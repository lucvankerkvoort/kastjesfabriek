import React, { useContext } from "react";
import { store } from "../../Services/Store";
import { Link } from "react-router-dom";

const Items = ({ title, price, pics }) => {
  const userData = useContext(store);
  const { dispatch } = userData;
  const props = {
    title,
    price,
    pics,
  };

  return (
    <div className="item">
      <div className="picture">
        <Link
          onClick={() => dispatch({ type: "current", payload: props })}
          to="/spec"
        >
          <div
            style={{
              background: `url(${pics[0]})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />
        </Link>
      </div>
      <div className="title">
        <h1>{title}</h1>
      </div>
      <div className="price">
        <p>€{price},00</p>
      </div>
    </div>
  );
};

export default Items;
