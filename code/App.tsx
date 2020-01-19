import * as React from "react";
import { Override, Data } from "framer";

// Learn more: https://framer.com/docs/overrides/

const appState = Data({
  inputAge0Error: null
});

export function Input0(props): Override {
  return {
    errors: {
      firstname: {
        message: "invalid firstname"
      }
    }
  };
}

var patt = new RegExp("^[0-9]+$"); // checking age
export function InputAge0(props): Override {
  return {
    errors: appState.inputAge0Error,
    onChange: e => {
      let userInput = e.target.value;
      var result = userInput.match(patt);
      if (userInput.length > 0 && result === null) {
        console.log("err", userInput);
        appState.inputAge0Error = {
          age: {
            message: "invalid age"
          }
        };
      } else appState.inputAge0Error = null;
    }
  };
}