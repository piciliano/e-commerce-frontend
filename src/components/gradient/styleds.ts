import styled from "styled-components";

export const Container = styled.div`
  background: hsla(0, 0%, 100%, 1);

  background: linear-gradient(
    90deg,
    hsla(0, 0%, 100%, 1) 37%,
    hsla(332, 53%, 82%, 1) 77%
  );

  background: -moz-linear-gradient(
    90deg,
    hsla(0, 0%, 100%, 1) 37%,
    hsla(332, 53%, 82%, 1) 77%
  );

  background: -webkit-linear-gradient(
    90deg,
    hsla(0, 0%, 100%, 1) 37%,
    hsla(332, 53%, 82%, 1) 77%
  );

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#ffffff", endColorstr="#e9b7ce", GradientType=1 );

  width: 100%;
  height: 500px;

  @media (max-width: 768px) {
    display: none;
  }

  display: none;
`;
