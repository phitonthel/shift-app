import React, { useState } from 'react';

import ShiftCard from '../components/ShiftCard'

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function Dashboard() {
  const [title] = useState("Welcome Staff Any");
  const [startDate, setStartDate] = useState(new Date());

  const shifts = [
    {
      id: 1,
      name: "Alex"
    }
  ]

  return (
    <div>
      <div className="m-3"><h1>{title}</h1></div>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showTimeSelect
        dateFormat="Pp" />

      <div className="container">
        <div className="row justify-content-center">
          {
            shifts ? shifts.map((shift) => <ShiftCard key={shift.id} shift={shift} />) : <h1>Not Found</h1>
          }
        </div>
      </div>
    </div>
  )
}