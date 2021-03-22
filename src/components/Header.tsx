import React, { useState } from "react";
import styled from "styled-components";

const HeaderStyle = styled.h1`
  text-align: center;
  font-size: 3em;
`;

export const Header: React.FC = () => {
  return <HeaderStyle>Chess Game</HeaderStyle>;
};
