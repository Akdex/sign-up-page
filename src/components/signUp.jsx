import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faGoogle,
  faApple,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

import ReactPhone from "./ReactPhone/ReactPhone";
import TextInput from "./TextInput";

function signUp() {
  return (
    <div className='glass-container'>
      <form className='glass-form'>
        <div className='glass-form-text'>
          <h1>Sign Up Page</h1>
          <h6>
            Lorem ipsum dolor sit. <br />
            Lorem, ipsum!
          </h6>
        </div>
        <ul>
          <li>
            <TextInput
              type='text'
              name='firstname'
              placeholder='First Name'
              className='glass-form-input'
            />
          </li>

          <li>
            <TextInput
              name='lastname'
              placeholder='Last Name'
              className='glass-form-input'
            />
          </li>

          <li>
            <input
              type='email'
              name='email'
              placeholder='Email'
              className='glass-form-input'
            />
          </li>
          <li>
            <ReactPhone
              country='ind'
              value='+91'
              onChange={(value) => console.log(value)}
            />
          </li>
        </ul>

        <button className='sign-btn' type='submit'>
          Sign up
        </button>

        <div className='form-footer'>
          <a href='/' className='hr'>
            or continue with
          </a>
          <div className='social-container'>
            <a href='/'>
              <FontAwesomeIcon icon={faGoogle} size='2x' />
            </a>
            <a href='/'>
              <FontAwesomeIcon icon={faApple} size='2x' />
            </a>
            <a href='/'>
              <FontAwesomeIcon icon={(fab, faFacebook)} size='2x' />
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}

export default signUp;
