import React from 'react'
import { Typography } from '@material-ui/core'
import { Link, useRouteMatch } from 'react-router-dom'

const Preview: React.FC = () => {
  const match = useRouteMatch()
  return (
    <div>
      <Typography>Settings</Typography>
      <Link to={`${match.url}/edit`}>Edit</Link>
    </div>
  )
}

export default Preview
