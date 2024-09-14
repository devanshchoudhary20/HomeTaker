import React, {useContext,createContext,useState,useEffect} from 'react'
import { initialState } from '../State/InitialState';

const SettingContext = createContext(null);

export const SettingProvider = ({children}: any) => {
    const LoadState = () =>{
        const savedstate = localStorage.getItem('tasksState');
        return savedstate?JSON.parse(savedstate) : initialState;
    }
    const [state, setState] = useState(LoadState);
    
    useEffect(()=> {
        localStorage.setItem('tasksState',JSON.stringify(state));
        // localStorage.getItem('tasksState');
    },[state])

    return (
        <SettingContext.Provider value = {{state , setState}}>
            {children}
        </SettingContext.Provider>
    )
};

export const useSettings = () => useContext(SettingContext);
