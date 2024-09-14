'use client'
import React, { useContext, useEffect, useState } from 'react'
import { BiLayer } from 'react-icons/bi';
import { ItemContext } from '@/app/Context/ItemContext';

const AddTaskTitle = ({isEdit,editTask} : any) => {
  const initialValue = !isEdit ? '' : editTask.title 
  // debugger;
  
  const [title,setTitle] = useState(initialValue);
  
  const{task,setTask} = useContext(ItemContext);
  
  const handleTitleChange = (e : any) =>{
    setTitle(e.target.value);
    setTask({...task ,title : e.target.value,id : Date.now()});
    
  }


  return (
    <div>
        <div className="flex flex-col justify-between items-center ">
            <div className='w-full flex '>
                <input
                type="text"
                placeholder="Title"
                value = {title}
                className="w-full text-lg font-semibold placeholder-gray-400 focus:outline-none p-3 rounded-tl-xl"
                onChange={handleTitleChange}
                required
                />
                <button className="w-full flex items-center text-teal-500 bg-white justify-end pr-3 rounded-tr-xl ">
                    <BiLayer className="w-5 h-5 mr-1" />
                    <span className="text-sm">Use Preset</span>
                </button>
            </div>
            <hr/>
            <input
            type="text"
            placeholder="Notes (Optional)"
            className="w-full text-gray-500 focus:outline-none p-3 rounded-b-xl"
            />
        </div>
    </div>
  )
}

export default AddTaskTitle