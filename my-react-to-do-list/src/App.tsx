import { useState } from 'react'
import type { Task } from './types/task'
import TaskCard from './components/TaskCard'
import FilterBar from './components/FilterBar'
import Modal from './components/Modal'

function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  const addTask = (task: Task) => {
    setTasks(prev => [task, ...prev])
  }

  return (
    <main style={{ maxWidth: '600px', margin: '2rem auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>My Tasks</h1>

      <FilterBar />

      <Modal addTask={addTask} />

      {tasks.length === 0 && <p style={{ color: '#777', marginTop: '1rem' }}>No tasks yet. Add your first one!</p>}

      {tasks.map(task => (
        <TaskCard key={task.id} task={task} />
      ))}
    </main>
  )
}

export default App
