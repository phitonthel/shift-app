import { useState } from "react"
import Header from "../components/shift/Header"
import AddButton from "../components/shift/AddButton"

import Dashboard from "../components/shift/Dashboard"
import Form from "../components/shift/Form"

export default function Shift() {
  const [selectedDate, setSelectedDate] = useState('0')
  const [selectedWeek, setSelectedWeek] = useState('2021-W48')
  const [selectedPage, setSelectedPage] = useState('Dashboard')
  const [selectedAction, setSelectedAction] = useState('')

  const [formData, setFormData] = useState({
    name: '',
    date: '',
    startTime: '',
    endTime: ''
  })

  const handleSelectedDate = (date) => {
    setSelectedDate(date)
  }

  const handleSelectedWeek = (event) => {
    setSelectedWeek(event.target.value)
  }

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-8">
          <Header
            selectedWeek={selectedWeek}
            handleSelectedWeek={handleSelectedWeek}
            handleSelectedDate={handleSelectedDate}
          />
        </div>
        <div className="col-4">
          <AddButton
            setFormData={setFormData}
            setSelectedPage={setSelectedPage} 
          />
        </div>
      </div>
      <div className="my-4">
        {selectedPage == 'Dashboard' &&
          <Dashboard
            selectedWeek={selectedWeek}
            selectedDate={selectedDate}
            setFormData={setFormData}
            setSelectedPage={setSelectedPage}
          />
        }
        {selectedPage == 'FormCreate' &&
          <Form
            crudOption={'CREATE'}
            formData={formData}
            setFormData={setFormData}
            setSelectedPage={setSelectedPage} />
        }
        {selectedPage == 'FormUpdate' &&
          <Form
            crudOption={'UPDATE'}
            formData={formData}
            setFormData={setFormData}
            setSelectedPage={setSelectedPage} />
        }
      </div>
    </div>
  )
}