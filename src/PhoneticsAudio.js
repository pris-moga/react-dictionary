import React from "react";

export default function PhoneticsAudio(props) {
  if (props.audio) {
    return (
      <a href={props.audio} target="_blank" rel="noreferrer">
        <i className="fas fa-volume-off"></i>
      </a>
    );
  } else {
    return null;
  }
}
