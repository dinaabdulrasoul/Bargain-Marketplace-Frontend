import React from "react";
import CardComponent from "../CardComponent";
export default function Home() {
  return (
    <div>
      <CardComponent type="info" />
      <CardComponent type="balance" />
    </div>
  );
}
