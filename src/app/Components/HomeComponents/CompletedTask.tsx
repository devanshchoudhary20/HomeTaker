'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import {FaChevronRight} from 'react-icons/fa'
import { useSettings } from '@/app/Context/GlobalContext';

const CompletedTask = () => {
    const [isCompleted,setIsCompleted] = useState(false);
const router = useRouter();
  const {state,setState} = useSettings();
  const handleClick = (path : any) => {
    router.push(path);
    setIsCompleted(!isCompleted);
  };
  // debugger
  return (
    <div>
        <div className="bg-white p-3 rounded-xl shadow-sm flex justify-between items-center ">
            <span className="font-semibold text-lg">Completed Tasks</span>
            <span className="text-gray-400 flex items-center">
            {state.places[0].tasks.filter(task=>task.isCompleted===true).length}
            <FaChevronRight className="w-5 h-5 ml-1" onClick ={() =>{handleClick('/home/completedTask')}}/>
            </span>
        </div>
    </div>
  )
}

export default CompletedTask;