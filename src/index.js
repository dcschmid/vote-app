import React from "react";
import ReactDom from "react-dom";

import ChoiceBar from "./components/ChoiceBar";
import "./index.css";

ReactDom.render(
  <ChoiceBar title="JavaScript" percent={37} />,
  document.getElementById("root")
);
