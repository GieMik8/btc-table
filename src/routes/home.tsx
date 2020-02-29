import React from 'react'
import { Typography, Grid, Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { getApiVersionAsync } from '../store/app/actions'

const Home: React.FC = () => {
  const dispatch = useDispatch()
  return (
    <Grid>
      <Typography>Home</Typography>
      <Button onClick={() => dispatch(getApiVersionAsync.request())}>Get Api Version</Button>
    </Grid>
  )
}

export default Home
