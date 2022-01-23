import React from "react";

export default function PhoneticsAudio(props) {
  if (props.audio) {
    return (
      <a href={props.audio} target="_blank">
        <i className="fas fa-volume-off"></i>
      </a>
    );
  } else {
    return null;
  }
}
