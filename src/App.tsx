import React from 'react'
import { Provider } from 'react-redux'

import store from 'store'
import { CurrencyTable, Layout } from 'components'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Layout>
        <CurrencyTable />
      </Layout>
    </Provider>
  )
}

export default App
