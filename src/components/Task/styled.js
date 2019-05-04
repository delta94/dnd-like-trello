import styled from 'styled-components';

export const Task = styled.div`
  &:last-child {
    margin: 0;
  }
  &:active {
    cursor: grabbing;
  }
  cursor: grab;
  padding: 1rem;
  margin: 0 0 8px 0;
  border: 1px solid rgba(140, 140, 140, 0.26);
  border-radius: 2px;
  background: white;
  user-select: none;
`;
