import r from "react";
import rd from "react-dom";
rd.render(
  <div>
    <h1 className="heading" contentEditable="true">
      My favourite food
    </h1>
    <ul>
      <li>Paneer</li>
      <li>Sweets</li>
      <li>Bacon</li>
    </ul>
  </div>,
  document.getElementById("root")
);
