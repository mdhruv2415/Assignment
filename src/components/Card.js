import React from 'react'
const Card = ({eve}) => {
  let i = "";
  if(eve.show.image !== null) {
    i = eve.show.image.medium;
  } 
  return (
    <div className='flex w-9/12 mx-auto gap-x-10 bg-slate-700 text-white shadow-lg rounded-md'>
        <div className="ml-10 max-w-max max-h-max">
          <img src={i} alt='x' className='shadow-lg '></img>
        </div>
        <div className='flex flex-col w-full'>
          <div className='flex justify-around mt-4'>
            <p className='text-3xl font-semibold'>{eve.show.name}</p>
            <p className='text-slate-300'>{eve.show.type}</p>
          </div>
          <div className='mx-auto'>
            <div className='flex gap-x-4 mt-3'>
              <h1 className='text-slate-400'>Genres: </h1>
              {
                eve.show.genres.map((genre) => {
                  return (<p>{genre}</p>)
                })
              }
            </div>
            <div className='flex gap-x-4 mt-2'>
              <p className='text-slate-300'>Language: </p>
              <p>{eve.show.language}</p>
            </div>
            <div className='flex gap-x-10 mt-2'>
              <p className='text-slate-300'>Rating: </p>
              <p>{eve.show.rating.average}</p>
            </div>
            <div className='flex gap-x-10 mt-2'>
              <p className='text-slate-300'>Score: </p>
              <p>{eve.score}</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Card