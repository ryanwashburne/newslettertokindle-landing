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
      <header className="container flex items-center px-3 py-6 text-sm md:text-xl">
        <Link to="/" className="flex items-center text-xl hover:text-gray-700">
          <Image fixed={img1} />
          <span className="ml-2">Newsletter to Kindle</span>
        </Link>
        <div className="flex-grow" />
        <Link to="/#faq" className="mr-3 hover:underline md:mr-8">
          FAQ
        </Link>
        <Link to="/#pricing" className="mr-3 hover:underline md:mr-8">
          Pricing
        </Link>
        <a
          href="https://app.newslettertokindle.com"
          className="px-2 py-1 btn md:py-2 md:px-3"
        >
          Login
        </a>
      </header>
      <main>{children}</main>
      <footer className="py-16 bg-black xl:py-32" id="pricing">
        <div className="container xl:w-2/3">
          <Animated>
            <h3 className="mb-4 text-4xl text-center text-white xl:text-6xl">
              Ready to get started?
            </h3>
          </Animated>
          <Animated>
            <p className="mt-8 mb-4 text-xl text-center text-white">
              Simple, transparent pricing.
            </p>
          </Animated>
          <div className="grid p-6 bg-white border-2 xl:grid-cols-3">
            <div className="p-6">
              <h4 className="text-2xl text-blue-600">Personal</h4>
              <p className="mb-4 text-blue-600">Free</p>
              <ul className="text-sm">
                <li className="flex items-center mb-2">
                  <Check />
                  <p className="ml-2">
                    25 forwarded emails every month
                    <span className="pb-4 pl-1 text-sm align-top">*</span>
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
              <p className="mt-4 text-xs text-black text-opacity-50">
                <span className="pb-4 pr-1">*</span>10 total emails, not
                newsletter subscriptions
              </p>
            </div>
            <div className="p-6 border-t-2 border-b-2 xl:border-t-0 xl:border-b-0 xl:border-l-2 xl:border-r-2">
              <h4 className="text-2xl text-green-600">Personal Plus</h4>
              <p className="mb-4 text-green-600">$5/month</p>
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
              <p className="mb-4 text-purple-600">$10/month</p>
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
            className="px-4 py-3 text-xl text-white bg-transparent border-white btn hover:bg-opacity-30 xl:text-2xl"
          >
            Create an account
          </a>
        </div>

        <p className="text-sm text-center text-white text-opacity-60">
          Questions? Contact{' '}
          <span className="font-bold">help@newslettertokindle.com</span>
        </p>

        <div className="grid max-w-sm grid-cols-3 gap-4 mx-auto mt-4 text-xs text-center md:max-w-md md:text-sm">
          <Link
            to="/docs/privacy-policy"
            className="text-white link text-opacity-60"
          >
            Privacy Policy
          </Link>
          <Link
            to="/docs/terms-of-service"
            className="text-white link text-opacity-60"
          >
            Terms of Service
          </Link>
          <Link to="/docs/google" className="text-white link text-opacity-60">
            Google Integration
          </Link>
        </div>
      </footer>
    </div>
  )
}
