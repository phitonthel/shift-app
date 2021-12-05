import { useState } from "react"
import Swal from "sweetalert2";
import { Services } from "../../services/shift"

export default function Form(props) {

  const submit = async (actionType) => {
    try {
      if (actionType == 'CREATE') {
        props.formData.dateShift = new Date(props.formData.date)
        await Services.createShift(props.formData)
      }

      if (actionType == 'UPDATE') {
        const payload = {
          name: props.formData.name,
          dateShift: new Date(props.formData.date),
          startTime: props.formData.startTime,
          endTime: props.formData.endTime
        }
        console.log({payload}, {id: props.formData.id});
        await Services.updateShift(payload, props.formData.id)
      }

      if (actionType == 'BACK') {
        props.setSelectedPage('Dashboard')
      }
    } catch (error) {
      Swal.fire(error.message)
    }
  }


  return (
    <div>
      <div id="form">
        <form>
          <div className="form-group">
            <label htmlFor="input-name">Name</label>
            <input
              onChange={(e) => props.setFormData({ ...props.formData, name: e.target.value })}
              value={props.formData.name}
              type="text"
              name="name"
              className="form-control"
              id="input-name"
              placeholder="Enter Name" />
          </div>
          <div className="form-group">
            <label htmlFor="input-start-date">Date</label>
            <input
              onChange={(e) => props.setFormData({ ...props.formData, date: e.target.value })}
              value={props.formData.date}
              type="date"
              name="date"
              className="form-control"
              id="input-date"
              placeholder="Date" />
          </div>
          <div className="form-group">
            <label htmlFor="input-start-date">Start Time</label>
            <input
              onChange={(e) => props.setFormData({ ...props.formData, startTime: e.target.value })}
              value={props.formData.startTime}
              type="time"
              name="startTime"
              className="form-control"
              id="input-start-date"
              placeholder="Start Date" />
          </div>
          <div className="form-group">
            <label htmlFor="input-end-date">End Time</label>
            <input
              onChange={(e) => props.setFormData({ ...props.formData, endTime: e.target.value })}
              value={props.formData.endTime}
              type="time"
              name="endTime"
              className="form-control"
              id="input-end-date"
              placeholder="End Date" />
          </div>
        </form>
        <div>
          {
            props.crudOption == 'CREATE' && <button
              onClick={() => { submit('CREATE') }}
              className="btn btn-primary m-2">Add</button>
          }
          {
            props.crudOption == 'UPDATE' && <button
              onClick={() => { submit('UPDATE') }}
              className="btn btn-primary m-2">Edit</button>
          }
          <button
            onClick={() => { submit('BACK') }}
            className="btn btn-danger m-2">Back</button>
        </div>
      </div>
    </div>
  )
}