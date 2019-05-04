export default {
  tasks: {
    'task-1': { id: 'task-1', content: 'Welcome to react' },
    'task-2': { id: 'task-2', content: 'Learn programming' },
    'task-3': { id: 'task-3', content: 'Coders.Tokyo' },
    'task-4': { id: 'task-4', content: 'Learn code for free' }
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To Do',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
    }
  },
  columnOrder: ['column-1']
};
