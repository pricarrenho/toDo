import styled, { DefaultTheme, css } from "styled-components";

export const WrapperCard = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 8px;
    align-items: start;
    padding: 16px;
    min-height: 72px;
    width: 100%;
    border-radius: 8px;
    background-color: ${theme.colors.gray[500]};
    margin-top: 16px;
    margin-bottom: 16px;

    @media (min-width: 800px) {
      grid-template-columns: 1fr 600px 1fr;
      gap: 12px;
    }
  `}
`;

type ContentTextProps = {
  done: boolean;
};

const ContentTextModifier = {
  done: (theme: DefaultTheme) => css`
    color: ${theme.colors.gray[300]};
    text-decoration: line-through;
  `,
};

export const ContentText = styled.p<ContentTextProps>`
  ${({ theme, done }) => css`
    color: ${theme.colors.gray[100]};
    font-size: ${theme.font.sizes.md};
    line-height: 19.6px;
    word-wrap: break-word;
    position: relative;
    transition: 0.2s;

    ${done && ContentTextModifier.done(theme)}
  `}
`;

type CheckedProps = {
  active: boolean;
};

const CheckedModifier = {
  active: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.purple[100]};
    border-color: ${theme.colors.purple[100]};

    &::after {
      position: absolute;
      content: "";
      left: 2px;
      top: 2px;
      height: 6px;
      width: 10px;
      border: 2px solid #fff;
      border-top: none;
      border-right: none;
      transform: rotate(-45deg);
      z-index: 1;
    }
  `,
};

export const Checked = styled.div<CheckedProps>`
  ${({ theme, active }) => css`
    cursor: pointer;
    background-color: ${theme.colors.gray[500]};
    border: 2px solid ${theme.colors.blue[100]};
    border-radius: 50%;
    height: 20px;
    width: 20px;
    left: 0;
    top: 0;
    position: relative;

    &:hover {
      background-color: ${theme.colors.blue[200]};
    }

    ${active && CheckedModifier.active(theme)}
  `}
`;
