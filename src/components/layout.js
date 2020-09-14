import React from 'react'
import { Link } from 'gatsby'

import { Send } from 'react-feather'

import SEO from './seo'

export default ({ title, children }) => {
  return (
    <div className="min-h-screen">
      <SEO
        title={title}
        keywords={[
          `newsletter`,
          `kindle`,
          `email`,
          `platform`,
          `newsletters`,
          `send`,
          `manage`,
        ]}
      />
      <header className="container flex items-center py-6">
        <Link to="/" className="italic hover:text-gray-700 flex items-center">
          <Send />
          &nbsp;Newsletter to Kindle
        </Link>
        <div className="flex-grow" />
        <a href="https://app.newslettertokindle.com">
          <button className="btn">Login</button>
        </a>
      </header>
      <main>{children}</main>
      <footer></footer>
    </div>
  )
}
