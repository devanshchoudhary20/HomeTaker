'use client'
import { useRouter } from 'next/navigation';
import React from 'react'
import {FaChevronRight} from 'react-icons/fa'
import { useSettings } from '@/app/Context/GlobalContext';

const AllTasks = () => {
    
const router = useRouter();
  const {state,setState} = useSettings();
  const handleClick = (path : any) => {
    router.push(path);
  };
  // debugger
  return (
    <div>
        <div className="bg-white p-3 rounded-xl shadow-sm flex justify-between items-center">
            <span className="text-blue-500 font-semibold text-lg">All Tasks</span>
            <span className="text-gray-400 flex items-center">
            {state.places[0].tasks.filter(task=>task.isCompleted===false).length}
            <FaChevronRight className="w-5 h-5 ml-1" onClick ={() =>{handleClick('/home/tasks')}} />
            </span>
        </div>
    </div>
  )
}

export default AllTasks;