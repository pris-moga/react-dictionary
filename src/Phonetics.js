import React from "react";
import PhoneticsAudio from "./PhoneticsAudio";

export default function Phonetics(props) {
  console.log(props.phonetics);

  return (
    <div className="Phonetics">
      <PhoneticsAudio audio={props.phonetics.audio} />
      <div>{props.phonetics.text}</div>
    </div>
  );
}
