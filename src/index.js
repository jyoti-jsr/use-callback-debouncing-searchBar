import React from "react";
import ReactDOM from "react-dom";
import { fakeNames } from "./fakeNames";
import { FilterList } from "./FilterList";

import "./styles.css";

function App() {
  return <FilterList names={fakeNames} />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
