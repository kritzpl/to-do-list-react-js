import { useState } from 'react'
import { Task, Priority } from '../types/task'

interface ModalProps {
  addTask: (task: Task) => void
}

function Modal({ addTask }: ModalProps) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState<Priority>('low')

  const handleSubmit = () => {
    if (!title) return alert('Title is required')
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      description,
      priority,
      completed: false,
      createdAt: new Date().toISOString()
    }
    addTask(newTask)
    setTitle('')
    setDescription('')
    setPriority('low')
  }

  return (
    <div style={{ marginTop: '1rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
      <h2>Add Task</h2>
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} style={{ display: 'block', marginBottom: '0.5rem', width: '100%' }} />
      <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} style={{ display: 'block', marginBottom: '0.5rem', width: '100%' }} />
      <select value={priority} onChange={e => setPriority(e.target.value as Priority)}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button onClick={handleSubmit} style={{ marginLeft: '1rem' }}>Add Task</button>
    </div>
  )
}

export default Modal
