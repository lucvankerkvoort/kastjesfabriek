import React, { useContext, useState } from "react";
import AddPicture from "../Components/AddPicture/addpicture";
import { store } from "../Services/Store";
import { db } from "../Firebase/Firebase";
const Input = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");

  const userData = useContext(store);
  const { dispatch } = userData;
  const submition = (e) => {
    e.preventDefault();
    const info = {
      ...title,
      ...description,
      ...type,
      ...price,
      images: userData.state.images,
    };
    console.log(title.title);
    db.collection("items")
      .doc(title.title)
      .set(info)
      .then((res) =>
        dispatch({ type: "check", payload: !userData.state.check })
      );
    // console.log(info);
  };
  //   console.log(userData);
  return (
    <div className="input">
      <form>
        <input
          type="text"
          placeholder="Titel"
          name="title"
          onChange={(e) => setTitle({ [e.target.name]: e.target.value })}
        />
        <textarea
          type="text"
          placeholder="Beschrijving"
          name="description"
          onChange={(e) => setDescription({ [e.target.name]: e.target.value })}
        />
        <input
          type="text"
          placeholder="Type kast"
          name="type"
          onChange={(e) => setType({ [e.target.name]: e.target.value })}
        />
        <input
          type="text"
          placeholder="Prijs in euros"
          name="price"
          onChange={(e) => setPrice({ [e.target.name]: e.target.value })}
        />
      </form>
      <AddPicture />
      {(userData.state.images || []).map((pics) => (
        <img src={pics} alt="..." />
      ))}
      <button onClick={submition}>Uploaden</button>
    </div>
  );
};

export default Input;
