import { useState } from "react";
import * as S from "./styles";
import { InputProps } from "./types";

export const Input = ({
  placeholder,
  name,
  type,
  value,
  onChange,
}: InputProps) => {
  const [labelActive, setLabelActive] = useState(false);

  const handleFocus = () => {
    setLabelActive(true);
  };

  const handleBlur = () => {
    setLabelActive(false);
  };

  return (
    <S.WrapperInput>
      <S.Label htmlFor={name} active={labelActive || !!value}>
        {placeholder}
      </S.Label>
      <S.Input
        id={name}
        name={name}
        type={type}
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={(event) => onChange(event.target.value)}
      />
    </S.WrapperInput>
  );
};
