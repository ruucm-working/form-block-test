// @flow
import * as React from "react";
import { addPropertyControls, ControlType } from "framer";

export function Input({
  type,
  name,
  placeholder,
  register,
  errors,
  // unusing props, but eject it to avoid error
  willChangeTransform,
  __slotKeys,
  children,
  ...props
}) {
  let registerValidation;
  if (type === "age")
    registerValidation = {
      pattern: {
        value: /\d+/,
        message: "not valid age"
      }
    };
  else
    registerValidation = {
      required: true
    };

  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder ? placeholder : `Type ${name}...`}
        ref={register && register(registerValidation)}
        {...props}
      />
      {errors && errors[name] && "error - " + errors[name].message}
    </div>
  );
}
Input.defaultProps = {
  type: "",
  name: "firstname",
  placeholder: ""
};
addPropertyControls(Input, {
  type: {
    type: ControlType.Enum,
    options: ["", "password", "email", "phone", "age"]
  },
  name: {
    type: ControlType.String
  },
  placeholder: {
    type: ControlType.String
  }
});
