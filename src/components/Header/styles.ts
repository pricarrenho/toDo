import styled, { css } from "styled-components";

export const WrapperHeader = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray[700]};
    height: 152px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 800px) {
      height: 200px;
    }
  `}
`;

export const HeaderImage = styled.img`
  ${() => css``}
`;
