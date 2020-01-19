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
    // errors: appState.inputAge0Error, // To directly show error with default style
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

export function ErrorContainer0(props): Override {
  return {
    isError: appState.inputAge0Error,
    variants: {
      show: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.28
        }
      },
      hide: {
        opacity: 0,
        x: -300
      }
    }
  };
}

export function ErrorText0(props): Override {
  return {
    text: appState.inputAge0Error ? appState.inputAge0Error.age.message : "..."
  };
}
