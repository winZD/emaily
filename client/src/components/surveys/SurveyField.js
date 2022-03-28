//contains logic to render single label and text input

import React from "react";

export default ({ input, label, meta: { error, touched } }) => {
  //console.log("Survey field props: ", input);
  //console.log("Meta data: ", meta);
  //onChange={input.onChange}==={input}
  return (
    <div>
      <label>{label}</label>
      <input style={{ marginBottom: "10px" }} {...input} />
      <div className="red-text" style={{ marginBottom: "20px" }}>
        {touched && error}
      </div>
    </div>
  );
};

/*
export default (props) => {
  console.log("Survey field props: ", props);
  return (
    <div>
      <input />
    </div>
  );
};
*/
