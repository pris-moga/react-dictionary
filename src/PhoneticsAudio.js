import React from "react";

import "./PhoneticsAudio.css";

export default function PhoneticsAudio(props) {
  const audio = new Audio(props.audio);

  function play(event) {
    event.preventDefault();
    audio.play();
  }

  if (props.audio) {
    return (
      <span className="PhoneticsAudio">
        <button onClick={play} className="audio-button">
          <i className="fas fa-volume-off"></i>
        </button>
      </span>
    );
  } else {
    return null;
  }
}
