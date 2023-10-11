import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { Task } from '../../types/types'

const initialState: Task[] = []

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.push(action.payload)
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      return state.filter((task) => task.id !== action.payload)
    },
    editTask: (state, action: PayloadAction<Task>) => {
      const { id } = action.payload
      const existingTaskIndex = state.findIndex((task) => task.id === id)

      if (existingTaskIndex !== -1) {
        state[existingTaskIndex] = action.payload 
      }
    }
  }
}) 
export const { addTask, deleteTask, editTask } = tasksSlice.actions
export const selectTasks = (state: RootState) => state.tasks
export default tasksSlice.reducer