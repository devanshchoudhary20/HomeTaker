'use client';

import React ,{createContext, useContext, useEffect, useState} from 'react'
import { ItemContext } from '../Context/ItemContext';
import { useSettings } from '../Context/GlobalContext';
import { getFromLocalStorage } from '../LocalHelp/LocalHelp';
import { getChangedValues, updateTaskInLocalStorage } from '../Utils/Utils';
import { emptyTask } from '../State/InitialState';
import { useRouter } from 'next/navigation';
const NewTaskHeader = ({...props} : any) => {
    const [isComplete, setIsComplete] = useState(false);
    const {task,setTask} = useContext(ItemContext);
    const {state,setState} = useSettings();
    const router = useRouter()


    const handleSaveClick =() =>{
      // console.log(task);
      if(props.isEdit){
        const changedValues = getChangedValues(emptyTask, task);
        const updateSuccessful = updateTaskInLocalStorage(props.editTask.id, changedValues);
        // debugger
        if (updateSuccessful.isUpdated) {
          console.log('Task updated successfully');
          setState(updateSuccessful.newState)
        } else {
          console.log('Failed to update task');
        }
        
        // window.location.reload()
      }else{
        const newState = structuredClone(state);
        newState.places[0].tasks.push(task)
        setState(newState);
        console.log('Successfully pushed to localStorage')
        // window.location.reload();
      }
      
    }
    
  return (
    <div>
    <header className="flex items-center justify-between px-4 py-3 bg-blue-50 border-b border-gray-200 rounded-t-xl">
        <button className="flex items-center text-cyan-500">
            <span className="ml-1" onClick ={() => (props.setIsEdit(false))}>{props.left}</span>
        </button>
        <h1 className='font-bold text-teal-900'>{props.center}</h1>
        <button className={`${isComplete ? "text-cyan-500": "text-gray-300"}`}
        // disabled= {!isComplete}
        onClick={handleSaveClick}
        >
            {props.right}
        </button>
    </header>
    </div>
  )
}

export default NewTaskHeader