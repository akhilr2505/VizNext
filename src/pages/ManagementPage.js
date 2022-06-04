import React, {useState} from 'react'
import ManagementMilestonesComponent from '../components/ManagementMilestonesComponent'
import ManagementIndicatorComponent from '../components/ManagementIndicatorComponent'
const ManagementPage = () =>
{
  const [programName, setProgramName] = useState("")

  const handleProgramNameChange = (event) => {
    setProgramName(event.target.value)
  }

  return (
    <div>ManagementPage
     <input name='programName' placeholder='Program Name' onChange={event => handleProgramNameChange(event)} value={programName}></input>
      <ManagementMilestonesComponent props={programName}></ManagementMilestonesComponent>
      <ManagementIndicatorComponent props={programName}/>
    </div>

  )
}

export default ManagementPage