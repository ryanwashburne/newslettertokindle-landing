import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'

import { Check } from 'react-feather'

import Animated from './animated'
import SEO from './seo'

export default ({ title, children }) => {
  const { logo } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 45) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
  `)
  const img1 = logo?.childImageSharp?.fixed
  return (
    <div className="min-h-screen">
      <SEO
        title={title}
        keywords={[
          `read`,
          `newsletter`,
          `kindle`,
          `email`,
          `emails`,
          `platform`,
          `newsletters`,
          `send`,
          `manage`,
          `gmail`,
          `automatic`,
          `direct`,
        ]}
      />
      <header className="text-sm md:text-xl px-3 container flex items-center py-6">
        <Link to="/" className="hover:text-gray-700 text-xl flex items-center">
          <Image fixed={img1} />
          <span className="ml-2">Newsletter to Kindle</span>
        </Link>
        <div className="flex-grow" />
        <Link to="#faq" className="hover:underline mr-3 md:mr-8">
          FAQ
        </Link>
        <Link to="#pricing" className="hover:underline mr-3 md:mr-8">
          Pricing
        </Link>
        <a
          href="https://app.newslettertokindle.com"
          className="btn py-1 md:py-2 px-2 md:px-3"
        >
          Login
        </a>
      </header>
      <main>{children}</main>
      <footer className="bg-black py-16 xl:py-32" id="pricing">
        <div className="container xl:w-2/3">
          <Animated>
            <h3 className="text-4xl xl:text-6xl mb-4 text-white text-center">
              Ready to get started?
            </h3>
          </Animated>
          <Animated>
            <p className="text-center text-white text-xl mt-8 mb-4">
              Simple, transparent pricing.
            </p>
          </Animated>
          <div className="bg-white p-6 border-2 grid xl:grid-cols-3">
            <div className="p-6">
              <h4 className="text-2xl text-blue-600">Personal</h4>
              <p className="text-blue-600 mb-4">Free</p>
              <ul className="text-sm">
                <li className="flex items-center mb-2">
                  <Check />
                  <p className="ml-2">
                    10 forwarded emails every month
                    <span className="pl-1 pb-4 text-sm align-top">*</span>
                  </p>
                </li>
                <li className="flex items-center mb-2">
                  <Check />
                  <p className="ml-2">No credit card required</p>
                </li>
                <li className="flex items-center mb-2">
                  <Check />
                  <p className="ml-2">Provided email address</p>
                </li>
              </ul>
              <p className="mt-4 text-black text-opacity-50 text-xs">
                <span className="pb-4 pr-1">*</span>10 total emails, not
                newsletter subscriptions
              </p>
            </div>
            <div className="p-6 border-t-2 border-b-2 xl:border-t-0 xl:border-b-0 xl:border-l-2 xl:border-r-2">
              <h4 className="text-2xl text-green-600">Personal Plus</h4>
              <p className="text-green-600 mb-4">$5/month</p>
              <ul className="text-sm">
                <li className="mb-2">
                  Everything in&nbsp;
                  <span className="text-blue-600">Personal</span>, also:
                </li>
                <li className="flex items-center mb-2">
                  <Check />
                  <p className="ml-2">Unlimited newsletters</p>
                </li>
                <li className="flex items-center mb-2">
                  <Check />
                  <p className="ml-2">Conversion to Kindle format</p>
                </li>
              </ul>
            </div>
            <div className="p-6">
              <h4 className="text-2xl text-purple-600">Personal Pro</h4>
              <p className="text-purple-600 mb-4">$10/month</p>
              <ul className="text-sm">
                <li className="mb-2">
                  Everything in&nbsp;
                  <span className="text-green-600">Personal Plus</span>, also:
                </li>
                <li className="flex items-center mb-2">
                  <Check />
                  <p className="ml-2">Integration with Gmail</p>
                </li>
                <li className="flex items-center mb-2">
                  <Check />
                  <p className="ml-2">More features coming soon</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8 mb-16">
          <a
            href="https://app.newslettertokindle.com"
            className="btn bg-transparent border-white hover:bg-opacity-30 text-white text-xl xl:text-2xl px-4 py-3"
          >
            Create an account
          </a>
        </div>

        <p className="text-sm text-white text-opacity-60 text-center">
          Questions? Contact{' '}
          <span className="font-bold">help@newslettertokindle.com</span>
        </p>

        <div className="max-w-sm md:max-w-md mx-auto text-center grid grid-cols-3 gap-4 mt-4 text-xs md:text-sm">
          <Link
            to="/docs/privacy-policy"
            className="link text-opacity-60 text-white"
          >
            Privacy Policy
          </Link>
          <Link
            to="/docs/terms-of-service"
            className="link text-opacity-60 text-white"
          >
            Terms of Service
          </Link>
          <Link to="/docs/google" className="link text-opacity-60 text-white">
            Google Integration
          </Link>
        </div>
      </footer>
    </div>
  )
}
