import * as React from "react";
import Style from "./TextInput.module.css";

export default React.forwardRef(function TextInput(props, ref) {
  const { id, isInValid, validationMessage, type, value, onChange, ...rest } =
    props;
  return (
    <>
      <input
        ref={ref}
        id={id}
        type={type}
        onChange={onChange}
        value={value}
        {...rest}
        aria-invalid={props.isInValid}
        aria-describedby={`helper-text-for-${id}`}
      />
      {validationMessage && (
        <p className={`${isInValid ? "text-danger" : "text-light"}`}>
          {validationMessage}
        </p>
      )}
    </>
  );
});
