import styled, { css } from "styled-components";

export const WrapperInput = styled.div`
  ${({ theme }) => css``}
`;

export const Label = styled.label`
  ${({ theme }) => css``}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray[500]};
    color: ${theme.colors.gray[300]};
    border: 1px solid ${theme.colors.gray[700]};
    border-radius: 8px;
    width: 100%;
    height: 54px;

    &:focus {
      &:focus {
        outline: transparent;
        box-shadow: 0 0 0 1px ${theme.colors.purple[200]};
      }
    }
  `}
`;
