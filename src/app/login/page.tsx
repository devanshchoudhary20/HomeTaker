import React from 'react'
import CreateHome from '../Components/CreateHome'
import LoginHeader from '../Components/TasksComponents/NavigationHeader'

const login = () => {
  return (
    <main className="flex flex-col min-h-screen bg-blue-50">
      <LoginHeader />
      <CreateHome />
    </main>
  )
}

export default login