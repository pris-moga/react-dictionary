import React from "react";

export default function PhoneticsAudio(props) {
  if (props.audio) {
    return (
      <span>
        <span>
          <a href={props.audio} target="_blank" rel="noreferrer">
            <i className="fas fa-volume-off"></i>
          </a>
        </span>
        <span>
          <audio src={props.audio} controls></audio>
        </span>
      </span>
    );
  } else {
    return null;
  }
}
