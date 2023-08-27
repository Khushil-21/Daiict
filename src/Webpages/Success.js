import React from 'react'
import { Link} from "react-router-dom";

export const Success = () => {
  return (
      <div className='center' color='green' >SuccessLy Entered Your Data
      <Link to="MangeDashboard">Enter New Data</Link>
      </div>
  )
}
