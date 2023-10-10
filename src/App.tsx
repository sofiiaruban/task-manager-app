import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Dashboard } from './pages/Dashboard'
import { TaskPage } from './pages/TaskPage'
//import React from 'react'

export const App = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/task" element={<TaskPage />}></Route>
          <Route path="/task/:id" element={<TaskPage/>}></Route>
        </Routes>
      </HashRouter>
    </>
  )
}
