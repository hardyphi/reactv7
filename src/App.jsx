import { render } from "react-dom";
import Pet from "./Pet.jsx";

const App = () => {
  return (
    <div id="my-app">
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="dog" breed="Havanese" />
      <Pet name="Pepper" animal="bird" breed="Cockatiel" />
      <Pet name="Doink" animal="pig" breed="Mix" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
