
import React, { useState } from 'react';
import {FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { AiOutlineEdit, AiOutlinePlus } from 'react-icons/ai';
import { STATUS_MESSAGES } from '@/app/State/InitialState.js';
import BottomNav from '../BottomNav';
import AllTasks from './AllTasks';
import CompletedTask from './CompletedTask';
import {ROOMS as rooms} from '@/app/State/InitialState.js'
import { useSettings } from '@/app/Context/GlobalContext';
import TaskList from '../AllTask/Tasks';
import { useRouter } from 'next/navigation';
import { IoChevronBackOutline } from "react-icons/io5";
import AllTask from '../AllTask/AllTask';
const MyHome = () => {
  const [isRoomClicked,setIsRoomClicked] = useState(false)
  const [roomSelected,setRoomSelected] = useState('');
  const {state,setState} = useSettings()
  let name,color,icon,items;
  console.log(roomSelected);

  // debugger
  const handleclicked =(name : string) => {
    setIsRoomClicked(!isRoomClicked);
    setRoomSelected(name);
  };

  const totalTask = (room) => {
     const filteredTask = state.places[0].tasks.filter(task => task.isCompleted === false && task.room === room);
     const items = filteredTask.length
     if(filteredTask.length === 0) { 
            color = STATUS_MESSAGES[2].color;
            icon = STATUS_MESSAGES[2].icon;
            name = STATUS_MESSAGES[2].name;
            return {color,icon,name,items};
    
    }
     else{
        const hasCurrentDateCompletion = filteredTask.some(task => {
          const completionDate = new Date(task.completionDate).getDate();
          const currentDate = new Date().getDate();
          // debugger
          if(completionDate === currentDate || completionDate < currentDate){
            color = STATUS_MESSAGES[0].color;
            icon = STATUS_MESSAGES[0].icon;
            name = filteredTask.length + STATUS_MESSAGES[0].name;
          } else if(completionDate > currentDate){
            color = STATUS_MESSAGES[1].color;
            icon = STATUS_MESSAGES[1].icon;
            name = STATUS_MESSAGES[1].name;
          }
      });
      return {color,icon,name,items};
     }
  }
  return (
    <div className="max-w-md mx-auto bg-gray-100 h-screen flex flex-col pt-8">
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto px-4 py-6 ">
        <h1 className="text-3xl font-bold mb-4 flex items-center">
          New Home <FaChevronDown className="ml-2 w-6 h-6 text-gray-400" />
        </h1>

        <div className="space-y-3 ">
          <AllTasks />
          <CompletedTask />

          <div className="flex justify-between items-center mt-6 mb-2 pt-4 pb-2">
            <span className="font-semibold text-xl">Rooms</span>
            <div className="flex space-x-4">
              <AiOutlineEdit className="w-6 h-6 text-teal-500" />
              <AiOutlinePlus className="w-6 h-6 text-teal-500" />
            </div>
        </div>
        <div className="space-y-3">
            {rooms.map((room) => (
              <div key={room.name} className="flex items-center justify-between bg-white p-3 rounded-xl shadow-sm"
              onClick={() => handleclicked(room.name)}
              >
                <div className="flex items-center">
                  <div className={`${room.color} p-2 rounded-xl mr-3 text-white`}>
                    {React.cloneElement(room.icon, { className: "w-6 h-6" })}
                  </div>
                  <span className="text-lg">{room.name}</span>
                </div>
                <span className={`text-sm flex items-center ${totalTask(room.name).color}`}>
                    {totalTask(room.name).name} 
                    <div className='ml-2'>
                      {totalTask(room.name).icon}
                    </div>
                </span>
                
                
              </div>
              
            ))}
          </div>
        </div>
      </div>

      {isRoomClicked && totalTask(roomSelected).items >0 &&
      <div className='w-full h-full fixed top-0 bg-blue-50'>
      <header className="flex items-center justify-between px-4 py-3 bg-blue-50 border-b border-gray-200">
        <button className="flex items-center text-cyan-500" onClick={() => setIsRoomClicked(!isRoomClicked)}>
          <IoChevronBackOutline className="text-xl" />
          <span className="ml-1">Back</span>
        </button>
        <button className="text-cyan-500">
          Select
        </button>
      </header>
      <TaskList 
      roomSelected = {roomSelected}
      isRoomClicked = {isRoomClicked}
      />
      </div>
    }
    {
      isRoomClicked && totalTask(roomSelected).items === 0 &&
      <div className='w-full h-full fixed top-0'>
        <AllTask />
      </div>
    }
      <BottomNav />
    </div>
  );
};

export default MyHome;