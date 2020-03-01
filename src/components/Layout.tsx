import React from 'react'

const Layout: React.FC = ({ children }) => (
  <div className="layout">
    <header>
      <div className="container">
        <h1>Bitcoin</h1>
      </div>
    </header>
    <main>
      <div className="container">{children}</div>
    </main>
  </div>
)

export default Layout
