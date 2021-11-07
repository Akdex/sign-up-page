import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import "./ReactPhone.css";

import React from "react";

function ReactPhone() {
  const [value, setValue] = useState();
  return (
    <PhoneInput
      className='ReactPhone'
      placeholder='Enter phone number'
      value={value}
      onChange={setValue}
    />
  );
}

export default ReactPhone;
