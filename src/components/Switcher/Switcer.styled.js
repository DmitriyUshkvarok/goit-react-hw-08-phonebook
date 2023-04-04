import styled from 'styled-components';
import { FaSun, FaMoon } from 'react-icons/fa';

export const SwitcerBtnWrapper = styled.div`
  width: 50px;
  margin-left: auto;
  margin-right: auto;
`;

export const StyleFaSun = styled(FaSun)`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: var(--color);
`;

export const StyleFaMoon = styled(FaMoon)`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: var(--color);
`;
