import React from "react";

export default function PhoneticsAudio(props) {
  if (props.audio) {
    return (
      <a href={props.audio} target="_blank">
        Listen
      </a>
    );
  } else {
    return null;
  }
}
