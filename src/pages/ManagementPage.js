import React, { useState } from 'react'
import ManagementMilestonesComponent from '../components/ManagementMilestonesComponent'
import ManagementIndicatorComponent from '../components/ManagementIndicatorComponent'
import NavbarComponent from "../components/NavbarComponent"
import "./ManagementPage.css"

const ManagementPage = () =>
{
  const [ programName, setProgramName ] = useState( "" )

  const handleProgramNameChange = ( event ) =>
  {
    setProgramName( event.target.value )
  }

  return (
    <div >
      <NavbarComponent />
      <div className='managementPage'>
        <h1 className='pageTitle'>Management Page</h1>
        <div>
        <label className='programNameLabel'>Enter Program Name:</label>
        <input className='programName' name='programName' placeholder='Program Name' onChange={event => handleProgramNameChange(event)} value={programName}></input>
        </div>
        
          <ManagementMilestonesComponent props={programName}></ManagementMilestonesComponent>
          <ManagementIndicatorComponent props={programName}/>
      </div>
    </div>
  )
}

export default ManagementPage