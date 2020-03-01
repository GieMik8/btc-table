import React from 'react'
import { Provider } from 'react-redux'

import store from 'store'
import { Table, Layout } from 'components'

/**
 * table
 * coindesk api
 * use scss
 * sorting
 * autorefresh
 * handle errors
 * use redux
 */

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Layout>
        <Table />
      </Layout>
    </Provider>
  )
}

export default App
