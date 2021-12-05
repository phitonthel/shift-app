import { useEffect, useState } from "react"
import Card from "./Card"
import { Services } from "../../services/shift"
import Swal from "sweetalert2"

export default function Dashboard(props) {
  const [shifts, setShifts] = useState([])

  useEffect(() => {
    fetchData()
  }, [props.selectedDate, props.selectedWeek])

  const fetchData = async () => {
    // let data = await Services.getShift()
    let data = await fetchDataPerWeek()
    if (props.selectedDate != 0) {
      data = data.filter((shift) => shift.dateShift.getDay() == props.selectedDate)
    }
    setShifts(data)
  }
  
  const fetchDataPerWeek = async () => {
    try {
      const year = props.selectedWeek.split('-')[0]
      const week = props.selectedWeek.split('-')[1].slice(1, 3)

      let date = new Date(year, 0, week * 7)

      const firstday = new Date(date.setDate(date.getDate() - date.getDay()))
      const lastday = new Date(date.setDate(date.getDate() - date.getDay() + 6))

      const shifts = await Services.getShiftPerWeek(firstday.toISOString(), lastday.toISOString())

      return shifts
    } catch (error) {
      Swal.fire(error.message)
    }
  }

  return (
    <div>
      <div>
        {
          shifts.length > 0
            ? shifts.map((shift, idx) =>
              <Card
                fetchData={fetchData}
                setFormData={props.setFormData}
                setSelectedPage={props.setSelectedPage}
                shift={shift}
                key={idx} />
            )
            : 'No data'
        }
      </div>
    </div>
  )
}