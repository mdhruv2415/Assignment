import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const Form = () => {
    
    const {state} = useLocation();
    const movieName = state.movieName;
    const [formData, setFormData] = useState({
        movie: movieName,

    })
    const changeHandler = (e) => {
        setFormData((prevData) => {
            return {
                ...prevData, 
                [e.target.name] : e.target.value
            }
        })
    }
  return (
    <div className='flex justify-center items-center h-[700px]'>
        <form className='flex flex-col w-3/4 bg-cyan-700 text-white text-2xl gap-y-10 py-10 rounded-xl'>
            <label className='flex justify-center gap-x-10'>
                <span>Movie: </span>
                <input type='text' className='rounded-md border-none text-black'
                onChange={changeHandler}
                value={formData.movie}
                />
            </label>
            <label className='flex justify-center gap-x-10'>
                <span>Name: </span>
                <input type='text' className='rounded-md border-none text-black'/>
            </label>
            <label className='flex justify-center  gap-x-10'>
                <span>Email: </span>
                <input type='email' className='rounded-md border-none text-black'/>
            </label>
            <label className='flex justify-center gap-x-5 ml-[-15px]'>
                <span>Mobile No: </span>
                <input type='number' className='rounded-md border-none text-black'/>
            </label>
            <button className='bg-cyan-100 text-cyan-700 font-medium rounded-2xl max-w-max mx-auto my-3 px-10 py-2 text-xl'>Submit</button>
        </form>
    </div>
  )
}

export default Form;