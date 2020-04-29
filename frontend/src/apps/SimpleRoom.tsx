import React from "react";
import { useLocation } from "react-router-dom";

export default function SimpleRoom() {
  let location2: any = useLocation();
  return (
    <React.Fragment>
      <h1>Simple Room {location2.state.name}</h1>
    </React.Fragment>
  );
}
