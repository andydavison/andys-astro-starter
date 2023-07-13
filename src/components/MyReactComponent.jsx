import { useState } from "react";

const squads = ["Phoenix", "Storm", "Atlas"];
export default function MyReactComponent() {
  const [value, setValue] = useState(0);
  const randomise = () => {
    const newIndex = Math.floor(Math.random() * 3);
    console.log(newIndex)
    setValue(newIndex);
  };
  return (
    <div>
      <p>{squads[value]}</p>
      <button type="button" onClick={randomise}>
        Get a random squad
      </button>
    </div>
  );
}
