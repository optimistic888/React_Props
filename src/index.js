import React from "react";
import ReactDom from "react-dom";
import "/public/styles.css";
function Card(props) {
  return (
    <div>
      <h2 className="my-name"> {props.name} </h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.phoneNo}</p>
      <p> {props.email}</p>
    </div>
  );
}
ReactDom.render(
  <div>
    <h1>MY CONTACT LIST</h1>
    <Card
      name="DARSHAN RAWAL"
      img="https://sf.ezoiccdn.com/ezoimgfmt/biographymafia.com/wp-content/uploads/2021/03/Darshan_Raval_Height-274x300.jpg?ezimgfmt=ng:webp/ngcb4"
      phoneNo="+91 7240529457"
      email="ravalDarshan218@gmail.com"
    />
    <Card
      name="KARTIK ARYAN"
      img="https://cdn.bollywoodmdb.com/celebrities/images-1/225x350/kartik-aaryan-34034.jpg"
      phoneNo="+91 7409255996"
      email="aaryankartik888@gmail.com "
    />

    <Card
      name="YASH KGF"
      img="https://media2.bollywoodhungama.in/wp-content/uploads/2022/04/Yash-346x260.jpg"
      phoneNo="91 8446748583"
      email="yash9787@gmail"
    />
  </div>,
  document.getElementById("root")
);
