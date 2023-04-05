import styled from 'styled-components';

export const UserMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const UserName = styled.p`
  color: var(--color);
`;

export const UserEmail = styled.p`
  color: var(--color);
`;

export const BtnLogAut = styled.button`
  background-color: transparent;
  border: 1px solid var(--border-color);
  outline: none;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-item: center;
  color: var(--color);
  padding: 5px;
  box-sizing: border-box;
  cursor: pointer;
  transition: background-color 0.4s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
    border-color: var(--border-color);
    color: white;
  }
`;
