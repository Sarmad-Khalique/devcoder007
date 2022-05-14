import React from "react";
import {
  FormInputContainer,
  FormInputLabel,
  GroupContainer,
} from "./FormInput.styles";

const FormInput = ({ handleChange, label, ...otherInputProps }) => {
  return (
    <GroupContainer>
      <FormInputContainer onChange={handleChange} {...otherInputProps} />
      {label ? (
        <FormInputLabel
          className={otherInputProps.value.length ? "shrink" : ""}
        >
          {label}
        </FormInputLabel>
      ) : null}
    </GroupContainer>
  );
};

export default FormInput;
