import React from "react";
import CardComponent from "../CardComponent";
import "./Home.css";

export default function Home() {
  return (
    <div className="dashboard-home">
      <CardComponent type="info" />
      <br />
      <CardComponent type="balance" />
    </div>
  );
}
