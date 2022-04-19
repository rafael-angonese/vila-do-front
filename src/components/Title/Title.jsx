import React from "react";

import styled from "styled-components";

const Title = styled.h1`
  font-size: ${(props) => props.size}px;
  text-align: center;
  color: ${(props) => props.color};
`;

export default Title;
