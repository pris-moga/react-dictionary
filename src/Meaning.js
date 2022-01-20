import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Menaing mt-5">
      <h5>{props.meaning.partOfSpeech}</h5>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>{definition.definition}</p>
            <p>
              <small>
                <em>{definition.example}</em>
              </small>
            </p>
          </div>
        );
      })}
    </div>
  );
}
