import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainNavWrapper = styled.div`
  display: flex;
  align-item: center;
  justify-content: center;
  gap: 10px;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: auto;
`;

export const MainLink = styled(Link)`
  text-transform: uppercase;
  color: var(--color);
  margin-left: 10px;
  transition: color 0.4s;

  &:hover {
    color: rgba(0, 0, 0, 0.5);
  }
`;
