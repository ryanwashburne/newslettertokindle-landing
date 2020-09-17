import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'

import Layout from '../components/layout'
import Animated from '../components/animated'

import { Check } from 'react-feather'

const Section = ({ number, src, title, children }) => {
  return (
    <section className="container py-16 xl:py-48 flex flex-wrap items-center justify-center text-lg xl:text-xl">
      <div className="w-full xl:w-1/2 flex justify-center xl:justify-end">
        <div className="w-full relative mb-12 xl:mb-0 xl:mr-32">
          <Image fluid={src} />
          <div className="absolute top-0 left-0 -mt-12 -ml-12">
            <p className="counter">{number}</p>
          </div>
        </div>
      </div>
      <div className="w-full xl:w-1/2">
        <Animated>
          <h2 className="text-4xl xl:text-6xl mb-4 xl:mb-8">{title}</h2>
        </Animated>
        <Animated>{children}</Animated>
      </div>
    </section>
  )
}

export default () => {
  const { readingSide, meditating, selfie, laying } = useStaticQuery(graphql`
    query {
      readingSide: file(relativePath: { eq: "doodles/ReadingSideDoodle.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      meditating: file(relativePath: { eq: "doodles/MeditatingDoodle.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      selfie: file(relativePath: { eq: "doodles/SelfieDoodle.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      laying: file(relativePath: { eq: "doodles/LayingDoodle.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)
  const img1 = readingSide?.childImageSharp?.fluid
  const img2 = meditating?.childImageSharp?.fluid
  const img3 = selfie?.childImageSharp?.fluid
  const img4 = laying?.childImageSharp?.fluid
  return (
    <Layout>
      <section className="border-b mb-16 xl:mb-0 relative py-16 xl:py-48">
        <div className="container flex flex-wrap items-center">
          <div className="w-full xl:w-3/5 mb-8 xl:mb-0 text-center xl:text-left">
            <h1 className="text-4xl xl:text-6xl font-thin">
              Send newsletters{' '}
              <span className="italic font-bold">directly</span> to your Kindle
            </h1>
            <div className="flex justify-center xl:justify-start my-4 xl:my-0">
              <a href="https://app.newslettertokindle.com" className="btn">
                Get Started
              </a>
            </div>
          </div>
          <div className="w-full xl:w-2/5">
            <Image fluid={img1} />
          </div>
        </div>
      </section>

      <Section number={1} title="Create an account" src={img2}>
        <p>
          Set up your account and start out with a month trial to see how you
          like the service. No credit card required.
        </p>
      </Section>

      <Section number={2} title="Subscribe with your new email" src={img3}>
        <p>
          Once you have created an account and linked with your Kindle device,
          you will be provided a unique email address. You can use this email to
          subscribe to newsletters that you want delivered right to your device.
        </p>
        {/* <p className="mt-6 text-sm italic">
          Lacking inspiration?{' '}
          <a
            href="https://washburne.dev/favorites/newsletters"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            Some of our favorite newsletters
          </a>
        </p> */}
      </Section>

      <Section number={3} title="Enjoy on your Kindle" src={img4}>
        <p>
          Watch as the incoming newsletters will magically appear on your Kindle
          device. Sit back, relax, and start reading.
        </p>
      </Section>

      <section className="border-t py-16 xl:py-32" id="faq">
        <div className="container xl:w-1/2">
          <h3 className="text-center text-3xl mb-8">FAQ</h3>
          <div className="grid xl:grid-cols-2 gap-8 text-lg">
            <div className="card">
              <p className="font-bold mb-2">
                Why should I read newsletters on my Kindle?
              </p>
              <p>
                Kindle&apos;s are made for reading. They are lightweight and
                don&apos;t have any of the distractions that traditional web
                browsers provide. Plus, you already have a Kindle. Use it more!
              </p>
            </div>
            <div className="card">
              <p className="font-bold mb-2">
                Can&apos;t I just forward the newsletters to my Kindle manually?
              </p>
              <p>
                Unfortunetly, HTML/text based emails are not supported by Kindle
                devices. Our service automates the conversion process so you
                don&apos;t have to.
              </p>
            </div>
            <div className="card">
              <p className="font-bold mb-2">
                How do you view links on the Kindle?
              </p>
              <p>
                Viewing links on a Kindle are not ideal. Kindle has a simplistic
                web browser built-in but it is slow and difficult to navigate.
                Newsletters sent to our platform are parsed and then save all
                the links so they can be viewed from our web client later.
              </p>
            </div>
            <div className="card">
              <p className="font-bold mb-2">How are images displayed?</p>
              <p>
                Newsletters can be viewed as a direct copy or attempt to convert
                to a native Kindle-format. There may be issues when converting
                to Kindle format, but the direct copy should show images with no
                problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-16 xl:py-32" id="pricing">
        <div className="container xl:w-1/2">
          <Animated>
            <h3 className="text-4xl xl:text-6xl mb-4 text-white text-center">
              Ready to get started?
            </h3>
          </Animated>
          <div className="bg-white p-6 border-2 grid xl:grid-cols-2">
            <div className="p-6">
              <h4 className="text-2xl mb-2">Free</h4>
              <ul className="text-sm">
                <li className="flex items-center mb-2">
                  <Check />
                  <p className="ml-2">One-month trial for free</p>
                </li>
                <li className="flex items-center mb-2">
                  <Check />
                  <p className="ml-2">Keep newsletters after your trial ends</p>
                </li>
                <li className="flex items-center mb-2">
                  <Check />
                  <p className="ml-2">No credit card required</p>
                </li>
                <li className="flex items-center mb-2">
                  <Check />
                  <p className="ml-2">Forwarding from Gmail</p>
                </li>
              </ul>
            </div>
            <div className="p-6 border-t-2 xl:border-t-0 xl:border-l-2">
              <h4 className="text-5xl mb-2">$3/month</h4>
              <ul className="text-lg">
                <li className="flex items-center mb-2">
                  <Check />
                  <p className="ml-2">aa</p>
                </li>
                <li className="flex items-center mb-2">
                  <Check />
                  <p className="ml-2">bb</p>
                </li>
                <li className="flex items-center mb-2">
                  <Check />
                  <p className="ml-2">Dedicated email address</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-600 text-center mt-8">
          Questions? Contact{' '}
          <span className="font-bold">help@newslettertokindle.com</span>
        </p>
      </section>
    </Layout>
  )
}
