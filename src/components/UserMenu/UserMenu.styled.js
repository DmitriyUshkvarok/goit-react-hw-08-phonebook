import styled from 'styled-components';

export const UserMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const UserName = styled.p`
  color: aqua;
`;

export const UserEmail = styled.p`
  color: aqua;
`;

export const BtnLogAut = styled.button`
  background-color: transparent;
  border: 1px solid aqua;
  outline: none;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-item: center;
  color: aqua;
  padding: 5px;
  box-sizing: border-box;
  cursor: pointer;
  transition: background-color 0.4s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
    border-color: rgba(0, 0, 0, 0.2);
    color: white;
  }
`;
