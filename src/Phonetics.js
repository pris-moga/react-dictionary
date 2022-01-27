import React from "react";
import PhoneticsAudio from "./PhoneticsAudio";

import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <span className="Phonetics">
      <PhoneticsAudio audio={props.phonetics.audio} />
      <span className="ms-3 phonetic">/{props.phonetics.text}/</span>
    </span>
  );
}
