import React, { useState } from "react";

export default function From(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const convertToUp = () => {
    setText(text.toUpperCase());
  };
  const convertToLo = () => {
    setText(text.toLowerCase());
  };
  const clearText = () => {
    setText("");
  };

  const capitalizeFirstLetter = () => {
    setText(
      text
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    );
  };

  return (
    <>
      <h3 className="text-center my-2 text-success">{props.heading}</h3>
      <div className="mb-3 my-4">
        <textarea
          value={text}
          onChange={handleOnChange}
          className="form-control border-success"
          id="exampleFormControlTextarea1"
          rows="5"
          spellCheck="true"
        ></textarea>
      </div>
      <button
        type="button"
        onClick={convertToUp}
        className="btn btn-outline-success"
      >
        Convert UpperCase
      </button>
      <button
        type="button"
        onClick={convertToLo}
        className="btn btn-outline-success mx-2"
      >
        Convert LowerCase
      </button>
      <button
        type="button"
        onClick={clearText}
        className="btn btn-outline-success"
      >
        Clear Text
      </button>
      <button
        type="button"
        onClick={capitalizeFirstLetter}
        className="btn btn-outline-success mx-2"
      >
        Capitalize
      </button>
      <h4 className="my-3">Summary</h4>
      words: {text.split(" ").length} Character: {text.split("").length}
      Time to read: {0.008 * text.split(" ").length}
      <h4>Preview</h4>
      <h5>{text}</h5>
    </>
  );
}
