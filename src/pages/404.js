import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

function NotFoundPage() {
  return (
    <Layout title="404: Not found">
      <section className="container py-32 text-center">
        <h1 className="uppercase text-3xl xl:text-6xl mb-4">Page Not Found</h1>
        <Link to="/" className="link text-2xl">
          Go home
        </Link>
      </section>
    </Layout>
  )
}

export default NotFoundPage
