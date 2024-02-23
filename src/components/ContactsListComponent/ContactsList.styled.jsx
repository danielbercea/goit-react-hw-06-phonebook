import styled from 'styled-components';

export const ContactsListList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  padding: 10px;

  border: 1px solid #f5fc69;
  border-radius: 4px;

  list-style: none;
`;

export const ContactsListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  padding: 5px;

  font-size: 22px;

  backdrop-filter: blur(10px);

  border: 1px solid #f5fc69;
  border-radius: 4px;
`;

export const ContactsListItemContainer = styled.div`
  display: flex;
  gap: 20px;

  color: #f5fc69;
`;

export const ContactsListButton = styled.button`
  width: 100px;
  height: 30px;

  font-size: 20px;
  color: #f5fc69;

  background-color: transparent;

  border: 1px solid #f5fc69;
  border-radius: 4px;

  cursor: pointer;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #111111;
    background-color: #f5fc69;
  }
`;
