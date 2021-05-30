import React, { lazy, Suspense } from "react";
import ReactDom from "react-dom";
import App from "./App";
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

const VotingComponent = lazy(() =>
  import(
    /* webpackChunkName: "VotingComponent" */
    "./components/VotingComponent"
  )
);

ReactDom.render(
  <App>
    <Suspense fallback="Bitte warten Sie...">
      <VotingComponent vote={vote} />
    </Suspense>
  </App>,
  document.getElementById("root")
);
