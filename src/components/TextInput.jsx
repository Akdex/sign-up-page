import React, { useState } from "react";

const toInputUppercase = (e) => {
  e.target.value = ("" + e.target.value).toUpperCase();
};

function TextInput(props) {
  const [name, setName] = useState("");
  return (
    <input
      className='glass-form-input'
      type={props.text}
      name={props.name}
      placeholder={props.placeholder}
      value={name}
      onChange={(e) => setName(e.target.value)}
      onInput={toInputUppercase} 
    />
  );
}

export default TextInput;
