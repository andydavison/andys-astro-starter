import { useState } from "react";

const divStyle = {
  border: '2px solid black',
  backgroundColor: 'deepskyblue',
  color: 'black',
  padding: '1em'
};

const squads = ["Phoenix", "Storm", "Atlas"];
export default function MyReactComponent() {
  const [value, setValue] = useState(0);
  const randomise = () => {
    const newIndex = Math.floor(Math.random() * 3);
    console.log(newIndex)
    setValue(newIndex);
  };
  return (
    <div style={divStyle}>
      <p><b>{squads[value]}</b></p>
      <button type="button" onClick={randomise}>
        Get a random squad
      </button>
    </div>
  );
}
