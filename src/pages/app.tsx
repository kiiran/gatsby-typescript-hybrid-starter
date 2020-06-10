import React from 'react'
import { Router, RouteComponentProps } from '@reach/router'

import Layout from 'components/layout'
import Nav from 'components/nav'
import SEO from '../components/seo'

const AppPage2: React.FC<RouteComponentProps> = () => (
  <div style={{ padding: '2rem', border: '1px solid black' }}>
    <h2>{`This is page 2's content`}</h2>
  </div>
)

const App: React.FC = () => (
  <Layout>
    <SEO title="App" />
    <h1>The app</h1>
    <p>Welcome to your new Gatsby app.</p>
    <Router basepath="app">
      <AppPage2 path="page-2" />
    </Router>

    <Nav />
  </Layout>
)

export default App
