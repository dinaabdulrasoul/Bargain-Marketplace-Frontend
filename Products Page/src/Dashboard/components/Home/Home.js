import React from "react";

import CardComponent from "../CardComponent";
import "./Home.css";

export default function Home({ user }) {
  return (
    <div className="dashboard-home">
      <CardComponent type="info" user={user} />
      <br />
      <CardComponent type="balance" />
    </div>
  );
}
