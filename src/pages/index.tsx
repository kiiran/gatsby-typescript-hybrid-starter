import React from 'react'
import { Link } from 'gatsby'
import { Router, RouteComponentProps } from '@reach/router'

import Layout from 'components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const Page2: React.FC<RouteComponentProps> = () => (
  <div>{`This is page 2's content`}</div>
)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Router>
      <Page2 path="page-2" />
    </Router>
    <Link to="/">Go to home</Link>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
