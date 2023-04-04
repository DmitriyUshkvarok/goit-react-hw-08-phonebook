import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigateLink = styled.nav`
  display: flex;
`;

export const StyleNavLink = styled(NavLink)`
  text-transform: uppercase;
  color: var(--color);

  & > ${NavLink}:nth-of-type(1) {
    margin-left: auto;
  }

  & > ${NavLink}:nth-of-type(1) {
    margin-right: 10px;
  }
`;
