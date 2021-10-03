import React from 'react'
import {
  Link
} from "react-router-dom";

export default function ShiftCard (props) {
  return (
    <div className="card m-3" style={{"width": "100%"}}>
      <Link to={'/detail/' + props.shift.id}><img className="card-img-top mt-3" alt="Card cap" /></Link>
      <div className="card-body">
      <p style={{"color": "black"}} className="card-text">{props.shift.name}</p>
      </div>
    </div>
  )
}