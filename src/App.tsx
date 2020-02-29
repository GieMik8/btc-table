import React from 'react'
import { Provider } from 'react-redux'

import store from './store'
import { Table } from './components'

const App: React.FC = () => {
  return (
    <div>
      <Provider store={store}>
        <h1>Bitcoin table</h1>
        <Table />
      </Provider>
    </div>
  )
}

export default App
