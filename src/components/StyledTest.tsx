'use client';
import styled from "styled-components";

const Box = styled.div`
  background: linear-gradient(135deg, #4b6cb7, #182848);
  padding: 2rem;
  border-radius: 12px;
  color: white;
  font-weight: bold;
  text-align: center;
`;

export default function StyledTest() {
  return <Box>🚀 Styled Components working!</Box>;
}