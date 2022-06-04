import React from 'react'
import ManagementMilestonesComponent from '../components/ManagementMilestonesComponent'
import ManagementIndicatorComponent from '../components/ManagementIndicatorComponent'
const ManagementPage = () =>
{
  return (
    <div>ManagementPage
      <ManagementMilestonesComponent></ManagementMilestonesComponent>
      <ManagementIndicatorComponent />
    </div>

  )
}

export default ManagementPage