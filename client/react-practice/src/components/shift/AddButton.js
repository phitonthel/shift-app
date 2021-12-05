import ReactTooltip from 'react-tooltip';

export default function AddButton(props) {

  const handleAddShift = () => {
    props.setSelectedPage('FormCreate')
    props.setFormData({
      name: '',
      date: '',
      startTime: '',
      endTime: ''
    })
  }

  return (
    <div>
      <ReactTooltip />
      <div className="d-flex flex-row-reverse">
        <button className="btn btn-warning btn-sm mx-2" data-tip="Unpublish all shifts!">
          <i className="fas fa-angle-double-down mx-2"></i>
          <span></span>
        </button>
        <button className="btn btn-success btn-sm mx-2" data-tip="Publish all shifts!">
          <i className="fas fa-angle-double-up mx-2"></i>
          <span></span>
        </button>
        <button className="btn btn-primary btn-sm mx-2" data-tip="Add shift!"
          onClick={() => handleAddShift()}>
          <i className="fas fa-plus-square lg mx-2"></i>
          <span></span>
        </button>
      </div>
    </div>
  )
}