"use client";
import React, { useState } from 'react'

const HomeInput = () => {

    const [homedir, setNewHome] =  useState('');
  return (
    <div>
        <input
            type="text"
            value={homedir}
            onChange={(e) => setNewHome(e.target.value)}
            className="w-full max-w-xs p-2 border-b-2 border-blue-500 focus:outline-none text-center text-lg bg-blue-50"
        />
    </div>
  )
}

export default HomeInput