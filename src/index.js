import r from "react";
import rd from "react-dom";
import Heading from "/src/heading";
import List from "./list";
rd.render(
  <div>
    <Heading />
    <List />
  </div>,

  document.getElementById("root")
);
