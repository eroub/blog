import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keyword={['blog', 'react', 'gatsby', 'Evan Roubekas', 'Roubekas']} />
    <h1>Hello Friends</h1>
    <p>Welcome to my expression of self.</p>
    <p>Great things are on its way.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/blogposts/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
