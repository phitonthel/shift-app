import { useEffect } from "react"
import ReactTooltip from 'react-tooltip';
import { Services } from '../../services/shift';
import Swal from 'sweetalert2';
import dayjs from 'dayjs'

export default function Card(props) {

  useEffect(() => {
    ReactTooltip.rebuild();
  }, [props.shift])

  const updateItem = () => {
    // we need to convert date to YYYY-MM-DD
    props.setFormData({
      id: props.shift.id,
      name: props.shift.name,
      date: dayjs(props.shift.dateShift).format('YYYY-MM-DD'),
      startTime: props.shift.startTime,
      endTime: props.shift.endTime
    })
    props.setSelectedPage('FormUpdate')
  }

  const publishItem = async (item) => {
    try {
      await Services.publishShift(item.id)
      props.fetchData()
    } catch (error) {
      Swal.fire(error.message)
    }
  }

  const unpublishItem = async (item) => {
    try {
      await Services.unpublishShift(item.id)
      props.fetchData()
    } catch (error) {
      Swal.fire(error.message)
    }
  }

  const deleteItem = async (item) => {
    try {
      await Services.deleteShift(item.id)
      props.fetchData()
    } catch (error) {
      Swal.fire(error.message)
    }
  }

  return (
    <div className="row">
      <ReactTooltip />
      <div className="card my-2 col-4">
        <div className="card-body">
          <h5 className="card-title">{props.shift.name}</h5>
          <p className="card-text">
            {
              props.shift.dateShift.toLocaleString(
                'en-GB',
                { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
              )
            }
          </p>
          <p className="card-text">
            {props.shift.startTime} - {props.shift.endTime}
          </p>
          <div className="row justify-content-center">
            <button className="btn btn-primary btn-sm mx-2" data-tip="Edit shift!"
              onClick={() => { updateItem(props.shift) }}>
              <i className="far fa-edit lg"></i>
            </button>
            {
              props.shift.isPublished &&
              <button className="btn btn-warning btn-sm mx-2" data-tip="Unpublish shift!"
                onClick={() => { unpublishItem(props.shift) }}>
                <i className="fas fa-angle-double-down"></i>
              </button>
            }
            {
              !props.shift.isPublished &&
              <button className="btn btn-success btn-sm mx-2" data-tip="Publish shift!"
                onClick={() => { publishItem(props.shift) }}>
                <i className="fas fa-angle-double-up"></i>
              </button>
            }
            <button className="btn btn-danger btn-sm mx-2" data-tip="Delete shift!"
              onClick={() => { deleteItem(props.shift) }}>
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="card my-2 col-8">
        <h5 className="card-title my-4">PIC: phitonthel</h5>
        <p className="card-text">phitonthel is a Full Stack Developer at StaffAny. He will be responsible on for developing and maintaining code.</p>
      </div>
    </div>
  )
}

// fa-plus-square add