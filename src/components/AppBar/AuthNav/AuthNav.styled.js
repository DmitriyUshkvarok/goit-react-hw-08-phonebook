import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigateLink = styled.nav`
  display: flex;
`;

export const StyleNavLink = styled(NavLink)`
  text-transform: uppercase;
  color: var(--color);

  &:nth-of-type(1) {
    margin-left: auto;
    margin-right: 10px;
  }

  &:nth-of-type(2) {
    margin-right: 10px;
  }
`;
