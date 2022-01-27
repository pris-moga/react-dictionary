import React from "react";

import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos">
        <div className="row section">
          {props.photos.map(function (photo, index) {
            return (
              <div key={index} className="col-sm-2 col-md-4 mb-3">
                <a
                  href={photo.src.original}
                  target="_blank"
                  rel="noreferrer"
                  title="Cick to open"
                >
                  <img
                    src={photo.src.landscape}
                    className="img-fluid"
                    alt={photo.alt}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
