import { useState } from 'react'
import './App.css'
import AddTodos from './components/AddTodos';
import Todos from './components/Todos';

function App() {

  return (
    /*<>
      <h1>Learn about redux toolkit</h1>
      <AddTodos />
      <Todos />
    </>*/
    <div className='bg-[#172842] min-h-screen py-8'>
        <div className='w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white'>
          <h1 className='text-2xl font-bold text-center mb-8 mt-2'>
            Manage Your Todos
          </h1>
          <div className='mb-4'>
            <AddTodos />
          </div>
          <div className='flex flex-wrap gap-y-3'>
            <Todos />
          </div>
        </div>
      </div>
  )
}

export default App