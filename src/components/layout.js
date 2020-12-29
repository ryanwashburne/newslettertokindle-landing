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
      <header className="text-sm md:text-lg container flex items-center py-6">
        <Link to="/" className="hover:text-gray-700 flex items-center">
          <Send />
          &nbsp;Newsletter to Kindle
        </Link>
        <div className="flex-grow" />
        <Link to="#faq" className="hover:underline mr-8">
          FAQ
        </Link>
        <Link to="#pricing" className="hover:underline mr-8">
          Pricing
        </Link>
        <a href="https://app.newslettertokindle.com" className="btn">
          Login
        </a>
      </header>
      <main>{children}</main>
    </div>
  )
}
