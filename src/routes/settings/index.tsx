import React from 'react'
import { useRouteMatch, Switch, Route } from 'react-router-dom'

import Edit from './Edit'
import Preview from './Preview'

const Settings: React.FC = () => {
  const match = useRouteMatch()

  return (
    <div>
      <h2>Settings</h2>
      <Switch>
        <Route path={`${match.path}/edit`}>
          <Edit />
        </Route>
        <Route path={match.path}>
          <Preview />
        </Route>
      </Switch>
    </div>
  )
}

export default Settings
