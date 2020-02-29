import React from 'react'
import { Typography } from '@material-ui/core'

const Child: React.FC<{ name: string }> = ({ name }) => <Typography>{name}</Typography>

export default Child
