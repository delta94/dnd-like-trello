import React from 'react';
import { Task } from './styled';
import { Draggable } from 'react-beautiful-dnd';

export default ({ data, index }) => {
  return (
    <Draggable draggableId={data.id} index={index}>
      {provided => (
        <Task
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {data.content}
        </Task>
      )}
    </Draggable>
  );
};
