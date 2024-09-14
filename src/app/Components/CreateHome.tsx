
import React from 'react'
import HomeInput from './HomeInput'

const CreateHome = () => {
  return (
    <div className='min-h-screen flex mt-36'>
       <div className="flex-grow flex flex-col items-center justify-start p-4 mt-20">
            <h1 className="text-2xl font-bold mb-2">Name Your Place</h1>
            <p className="text-gray-600 text-center mb-8">
                Add places to differentiate home chores, work tasks, college life and more.
            </p>
            <HomeInput />
      </div>
    </div>
  )
}

export default CreateHome