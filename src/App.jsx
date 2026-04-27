import "./App.css";
import ButtonComponent from "./componets/Button";
import Image from "./componets/Image";

function App() {
  return (
    <>
      <ButtonComponent label="Clicca qui!" />
      <ButtonComponent label="Non cliccare qui!" />
      <ButtonComponent label="Quale vuoi cliccare ?" />
      <div>
        <Image link="https://placecats.com/neo/50/50" description="cat1" />
        <Image link="https://placecats.com/neo/300/200" description="cat2" />
      </div>
    </>
  );
}

export default App;
