import React from 'react'
import Card from './Card'
import { useNavigate } from 'react-router-dom';
// import NavBar from './NavBar'
const HomePage = (props) => {

  const navigate = useNavigate();

  // console.log(data);
  const shows = props.data;
  const setSummaryShow = props.setSummaryShow;
  // const summaryShow = props.summaryShow;
  const clickHandler = (eve) => {
    setSummaryShow(eve);
    localStorage.setItem('show', JSON.stringify(eve));
    navigate('/summary');
  }
  return (
    <div>
      <div className='bg-sky-50 text-sky-800 text-[3rem] text-center font-medium py-2'>
        <h2>All Shows</h2>
      </div>
        <div className="flex flex-col gap-y-5 mt-5">
              {
                shows.map( (eve) => {
                    return (<div onClick={() => clickHandler(eve)}>
                      <Card eve={eve}  key={eve.show.id}/>
                    </div>) 
                } )
              }
          </div>
    </div>
  )
}

export default HomePage