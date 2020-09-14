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
            <div className="flex xl:block items-center justify-center mt-8 xl:mt-4 text-lg xl:text-base">
              <a href="https://app.newslettertokindle.com" className="contents">
                <button className="btn">Get Started</button>
              </a>
            </div>
          </div>
          <div className="xl:absolute right-0 top-0 w-full xl:w-2/5 xl:py-24 xl:mr-8">
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

      <section className="bg-black py-32">
        <div className="container xl:w-1/2">
          <Animated>
            <h3 className="text-5xl xl:text-6xl mb-4 text-white text-center">
              Ready to get started?
            </h3>
          </Animated>
          <div className="bg-white  p-6 border-2 flex flex-wrap">
            <div className="w-full xl:w-1/2 p-6">
              <h4 className="text-2xl mb-2">Free</h4>
              <ul className="text-sm">
                <li>
                  <Check />
                  &nbsp;One-month trial for free
                </li>
                <li>
                  <Check />
                  &nbsp;Keep all newsletters downloaded after trial ends
                </li>
                <li>
                  <Check />
                  &nbsp;No credit card required
                </li>
              </ul>
            </div>
            <div className="w-full xl:w-1/2">
              <div className="p-6 border-t-2 xl:border-t-0 xl:border-l-2">
                <h4 className="text-5xl mb-2">$3/month</h4>
                <ul className="text-lg">
                  <li>
                    <Check />
                    &nbsp;All the premium features
                  </li>
                  <li>
                    <Check />
                    &nbsp;Lorem ipsum dolor sit amet
                  </li>
                  <li>
                    <Check />
                    &nbsp;Lorem ipsum dolor sit amet
                  </li>
                </ul>
              </div>
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
