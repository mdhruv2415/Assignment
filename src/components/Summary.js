import React from 'react'
import { useNavigate } from 'react-router-dom';

const Summary = (props) => {
  const eve = props.summaryShow;
  // const setSummaryShow = props.setSummaryShow;
  // console.log(JSON.stringify(localStorage.getItem('show')))
  let i = "";
  if(eve.show.image !== null) {
    i = eve.show.image.medium;
  }
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate('/form', {state: {movieName: eve.show.name}});
  }
  return (
    
    <div>
        {/* <NavBar /> */}
        <div className='h-screen w-screen bg-sky-100'>
          <h1 className='text-[2.75rem] font-semibold text-center text-blue-900 pt-12'>Show Details</h1>
          <div className='bg-cyan-800 text-cyan-100 w-3/5 mt-5 max-h-max mx-auto flex rounded-xl'>
           <div className='w-1/3 flex justify-center items-center'>
              <img src={i} alt='X' className='rounded-md'></img>
            </div>
            <div className='w-[70%] flex'>
              <div className='flex flex-col mt-5 w-full mb-5'>
                <p className='text-3xl text-center font-medium'>{eve.show.name}</p>
                <p className='text-xl font-medium text-cyan-300 text-center mt-2'>{eve.show.url}</p>
                <p className='text-xl font-medium text-cyan-300 text-center mt-2'>{eve.show.premiered}</p>
                <p className='text-xl font-medium text-cyan-200 text-center mt-2'>{eve.show.network.name}, {eve.show.network.country.name}</p>
                <p className='text-xl font-medium text-cyan-100 px-5 mt-2'>{eve.show.summary}</p>
                <p className='text-xl font-medium text-cyan-100 text-center mt-2'><span className='text-cyan-300'>Language: </span>{eve.show.language}</p>
                <button onClick={() =>clickHandler(eve)}
                className='bg-cyan-200 text-cyan-900 font-medium rounded-2xl max-w-max mx-auto my-3 px-3 py-2 text-xl'>Book Movie Ticket</button>
              </div>
              
            </div>
            
          </div>
        </div>

    </div>
  )
}

export default Summary