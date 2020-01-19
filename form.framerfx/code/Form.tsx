// @flow
import * as React from "react";
import { useForm } from "react-hook-form";
import { addPropertyControls, ControlType } from "framer";

export function Form({ children }) {
  const { register, handleSubmit, errors, formState } = useForm(); // initialise the hook
  const onSubmit = data => {
    console.log(data);
  };

  var seen = [];
  console.log("errors", errors);
  console.log("formState", formState);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {children.map((child, id) => {
        return React.cloneElement(
          child.props.children[0]
            ? child.props.children[0]
            : child.props.children,
          {
            key: id,
            register: register,
            errors: errors
          }
        );
      })}
      <input type="submit" />
    </form>
  );
}

addPropertyControls(Form, {
  children: {
    type: ControlType.Array,
    propertyControl: {
      type: ControlType.ComponentInstance
    }
  }
});
