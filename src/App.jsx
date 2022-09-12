import { render } from "react-dom";
import { StrictMode } from "react";
import SearchParams from "./SearchParams.jsx";

const App = () => {
  return (
    <StrictMode>
      <div id="my-app">
        <h1>Adopt Me!</h1>
        <SearchParams />
      </div>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
