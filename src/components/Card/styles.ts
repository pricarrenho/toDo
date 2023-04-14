import styled, { css } from "styled-components";

export const WrapperCard = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 600px 1fr;
    align-items: start;
    padding: 16px;
    gap: 12px;
    height: 72px;
    width: 100%;
    border-radius: 8px;
    background-color: ${theme.colors.gray[500]};
    margin-top: 16px;
    margin-bottom: 16px;
  `}
`;

export const ContentText = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray[100]};
    font-size: ${theme.font.sizes.md};
    line-height: 19.6px;
    word-wrap: break-word;
  `}
`;
