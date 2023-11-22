import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store'

export const todoSlice = createSlice({
  name: 'todo',
  initialState: [] as string[],

  reducers: {
    add: (state, action) => {
      state.push(action.payload.newTodo)
    },
  },
})

export const { add } = todoSlice.actions
export const selectTodo = (state: RootState) => state.todoReducer

export default todoSlice.reducer
