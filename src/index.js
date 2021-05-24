import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import VotingComponent from "./components/VotingComponent";
import "./index.css";

const vote = {
  title: "How is your day?",
  description: "Tell me: how has your day been so far?",
  choices: [
    { id: "choice_1", title: "Good", count: 7 },
    { id: "choice_2", title: "Bad", count: 12 },
    { id: "choice_3", title: "Not sure yet", count: 1 },
  ],
};

ReactDom.render(
  <App>
    <VotingComponent vote={vote} />
  </App>,
  document.getElementById("root")
);
