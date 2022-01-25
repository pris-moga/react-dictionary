import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

import "./Results.css";

export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="Results">
        <div className="row word-section mt-5">
          <div className="col">
            <h2>{props.results.word}</h2>
            {props.results.phonetics.map(function (phonetic, index) {
              return (
                <span key={index}>
                  <Phonetics phonetics={phonetic} />
                </span>
              );
            })}
          </div>
        </div>
        <div className="row mt-4">
          <div className="col definition">
            {props.results.meanings.map(function (meaning, index) {
              return (
                <div key={index} className="section">
                  <Meaning meaning={meaning} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
