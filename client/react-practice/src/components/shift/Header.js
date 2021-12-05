

export default function Header(props) {

  return (
    <div>
      <div>
        <input type="week" id="week" name="week"
          value={props.selectedWeek}
          onChange={props.handleSelectedWeek}/>
        {/* <button type="button" className="btn btn-info btn-sm m-2">Filter by Week</button> */}
      </div>
      <div>
        <button type="button" className="btn btn-info btn-sm m-2" onClick={() => props.handleSelectedDate('0')}>All</button>
        <button type="button" className="btn btn-info btn-sm m-2" onClick={() => props.handleSelectedDate('1')}>Monday</button>
        <button type="button" className="btn btn-info btn-sm m-2" onClick={() => props.handleSelectedDate('2')}>Tuesday</button>
        <button type="button" className="btn btn-info btn-sm m-2" onClick={() => props.handleSelectedDate('3')}>Wednesday</button>
        <button type="button" className="btn btn-info btn-sm m-2" onClick={() => props.handleSelectedDate('4')}>Thursday</button>
        <button type="button" className="btn btn-info btn-sm m-2" onClick={() => props.handleSelectedDate('5')}>Friday</button>
        <button type="button" className="btn btn-info btn-sm m-2" onClick={() => props.handleSelectedDate('6')}>Saturday</button>
        <button type="button" className="btn btn-info btn-sm m-2" onClick={() => props.handleSelectedDate('7')}>Sunday</button>
      </div>
    </div>
  )
}