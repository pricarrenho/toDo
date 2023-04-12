import styled, { css } from "styled-components";

export const WrapperHeader = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray[700]};
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const HeaderImage = styled.img`
  ${() => css``}
`;
