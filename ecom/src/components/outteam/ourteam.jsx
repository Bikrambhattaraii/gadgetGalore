import React from 'react'
import "./ourteam.css"
import {Teamdata} from "./data" 
const Ourteam = () => {
  return (
    <div className='container'>
      <h1>Our teams</h1>
      
        {Teamdata.map((teamData)=>(
            <div className='card-our-team' key={Teamdata.id}>
                <img src={teamData.image} alt={Teamdata.id} />
                <h3>{Teamdata.name}</h3>
                <p>{Teamdata.positon}</p>

            </div>
        ))}
      </div>
    
  )
}

export default Ourteam
