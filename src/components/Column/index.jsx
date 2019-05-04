import React from 'react';
import { Wrapper, Title, TaskList } from './styled';
import Task from '../Task';

import { Droppable } from 'react-beautiful-dnd';

export default ({ column, tasks }) => {
  return (
    <Wrapper>
      <Title>{column.title}</Title>
      <Droppable droppableId={column.id}>
        {provided => (
          <TaskList ref={provided.innerRef} {...provided.droppableProps}>
            {tasks.map((task, index) => (
              <Task key={task.id} data={task} index={index} />
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Wrapper>
  );
};
