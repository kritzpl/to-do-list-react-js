import { Task } from '../types/task'

interface TaskCardProps {
  task: Task
}

function TaskCard({ task }: TaskCardProps) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '0.5rem', borderRadius: '8px', display: 'flex', alignItems: 'center', opacity: task.completed ? 0.5 : 1 }}>
      <input type="checkbox" checked={task.completed} readOnly style={{ marginRight: '1rem' }} />
      <div>
        <h3 style={{ margin: 0 }}>{task.title}</h3>
        {task.description && <p style={{ margin: 0, fontSize: '0.9rem', color: '#555' }}>{task.description}</p>}
        <small style={{ color: '#999' }}>Priority: {task.priority}</small>
      </div>
    </div>
  )
}

export default TaskCard
