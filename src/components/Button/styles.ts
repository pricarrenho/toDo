import styled, { DefaultTheme, css } from "styled-components";
import { ButtonStyleType } from "./types";

type WrapperProps = {
  $styleType: ButtonStyleType;
};

const WrapperModifier = {
  primary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.blue[200]};
    color: ${theme.colors.gray[100]};
    padding: 16px;
    height: 52px;

    &:hover {
      background-color: ${theme.colors.blue[100]};
    }
  `,

  secondary: (theme: DefaultTheme) =>
    css`
      background-color: transparent;
      svg {
        color: ${theme.colors.gray[300]};
      }

      &:hover {
        background-color: ${theme.colors.gray[400]};

        svg {
          color: ${theme.colors.red};
        }
      }
    `,
};

export const WrapperButton = styled.button<WrapperProps>`
  ${({ theme, $styleType }) => css`
    font-size: ${theme.font.sizes.md};
    font-weight: 700;
    border: none;
    border-radius: 8px;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    ${$styleType && WrapperModifier[$styleType](theme)}
  `}
`;
