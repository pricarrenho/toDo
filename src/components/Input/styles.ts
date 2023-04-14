import styled, { DefaultTheme, css } from "styled-components";

export const WrapperInput = styled.div`
  ${({ theme }) => css`
    position: relative;
  `}
`;

type LabelProps = {
  active: boolean;
};

const LabelModifier = {
  active: (theme: DefaultTheme) => css`
    top: -10px;
    background: linear-gradient(
      to bottom,
      ${theme.colors.gray[700]} 0% 50%,
      ${theme.colors.gray[500]} 50% 100%
    );
  `,
};

export const Label = styled.label<LabelProps>`
  ${({ theme, active }) => css`
    position: absolute;
    top: 16px;
    left: 16px;
    color: ${theme.colors.gray[300]};
    font-size: ${theme.font.sizes.lg};
    transition: top 0.2s;

    ${active && LabelModifier.active(theme)}
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray[500]};
    color: ${theme.colors.gray[300]};
    border: 1px solid ${theme.colors.gray[700]};
    border-radius: 8px;
    width: 100%;
    height: 54px;
    padding-right: 16px;
    padding-left: 16px;

    &:focus {
      &:focus {
        outline: transparent;
        box-shadow: 0 0 0 1px ${theme.colors.purple[200]};
      }
    }
  `}
`;
