import { useState } from 'react'
import { Task } from '../types/Task'

const useLocalStorage = (key: string, initialValue: Task[] = []) => {
  const [value, setValue] = useState(() => {
    try {
      const storedValue = window.localStorage.getItem(key)
      return storedValue ? JSON.parse(storedValue) : initialValue
    } catch (error) {
      console.error(error)
      return initialValue
    }
  })

  const updateLocalStorage = (newValue: Task[]) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(newValue))
    } catch (error) {
      console.error(error)
    }
  }
  const updateTaskById = (taskId: string, updatedData: Partial<Task>) => {
    const updatedTasks = value.map((task: Task) => {
      if (task.id === taskId) {
        return { ...task, ...updatedData };
      }
      return task;
    })
    setValue(updatedTasks)
    updateLocalStorage(updatedTasks)
  }
  
  const deleteTaskById = (taskId: string) => {
    const updatedTasks = value.filter((task: Task) => task.id !== taskId)
    setValue(updatedTasks)
    updateLocalStorage(updatedTasks)
  }
  return [
    value,
    {
      setToStorage: (newValue: Task[]) => {
        setValue(newValue)
        updateLocalStorage(newValue)
      },
      updateTaskById,
      deleteTaskById
    }
  ]
}

export default useLocalStorage