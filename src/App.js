import React, { useState } from 'react';
import './App.css';

import initialData from './constant/initial-data';
import Column from './components/Column';

import { DragDropContext } from 'react-beautiful-dnd';

function App() {
  const [data, setData] = useState(initialData);

  const onDragEnd = result => {
    // TODOS: reorder our column
    const { destination, source, draggableId } = result;
    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    const column = data.columns[destination.droppableId];
    const newTaskIds = Array.from(column.taskIds);
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);

    const newColumn = { ...column, taskIds: newTaskIds };
    const nextState = {
      ...data,
      columns: {
        ...data.columns,
        [newColumn.id]: newColumn
      }
    };

    setData(nextState);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {data.columnOrder.map(columnId => {
        const column = data.columns[columnId];
        const tasks = column.taskIds.map(taskId => data.tasks[taskId]);

        return <Column key={columnId} column={column} tasks={tasks} />;
      })}
    </DragDropContext>
  );
}

export default App;
