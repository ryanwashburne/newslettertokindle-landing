import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'

import Layout from '../components/layout'
import Animated from '../components/animated'

const Section = ({ number, src, title, children }) => {
  return (
    <section className="container py-16 xl:pb-48 flex flex-wrap items-center justify-center text-lg xl:text-xl">
      <div className="w-full xl:w-1/2 flex justify-center xl:justify-end">
        <div className="w-full relative mb-12 xl:mb-0 xl:mr-32">
          <Image fluid={src} />
          <div className="absolute top-0 left-0 -mt-12 -ml-12">
            <p className="counter pb-1">{number}</p>
          </div>
        </div>
      </div>
      <div className="w-full xl:w-1/2">
        <Animated>
          <h2 className="text-4xl xl:text-5xl mb-4 xl:mb-8">{title}</h2>
        </Animated>
        <Animated>{children}</Animated>
      </div>
    </section>
  )
}

export default () => {
  const {
    readingSide,
    meditating,
    selfie,
    laying,
    test1,
    test2,
    test3,
  } = useStaticQuery(graphql`
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
      test1: file(relativePath: { eq: "testimonial/test1.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      test2: file(relativePath: { eq: "testimonial/test2.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      test3: file(relativePath: { eq: "testimonial/test3.png" }) {
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

  const testImg1 = test1?.childImageSharp?.fluid
  const testImg2 = test2?.childImageSharp?.fluid
  const testImg3 = test3?.childImageSharp?.fluid
  return (
    <Layout>
      <section className="mb-16 py-16 xl:py-48">
        <div className="container max-w-7xl flex flex-wrap items-center">
          <div className="w-full xl:w-3/5 mb-8 xl:mb-0 text-center xl:text-left">
            <h1 className="text-5xl xl:text-6xl font-thin md:pr-4">
              Send newsletters{' '}
              <span className="italic font-bold">directly</span> to your Kindle
            </h1>
            <div className="flex justify-center xl:justify-start mt-8 mb-4">
              <a
                href="https://app.newslettertokindle.com"
                className="btn text-2xl"
              >
                Try for free
              </a>
            </div>
          </div>
          <div className="w-full xl:w-2/5">
            <Image fluid={img1} />
          </div>
        </div>
      </section>

      <Section number={1} title="Create an account" src={img2}>
        <p>It only takes 5 minutes to setup your account.</p>
        <br />
        <p>
          Grab your Kindle, connect it with our platform, and get started! No
          credit card required.
        </p>
      </Section>

      <Section number={2} title="Sync with your email" src={img3}>
        <p>
          Once you have created an account and linked with your Kindle device,
          you can set up auto-forwarding from your favorite newsletters.
        </p>
        <br />
        <p>
          Or you can integrate directly with Gmail and read your newsletters
          both in your inbox and on your Kindle.
        </p>
      </Section>

      <Section number={3} title="Enjoy on your Kindle" src={img4}>
        <p>
          Watch as the incoming newsletters will magically appear on your Kindle
          device. Sit back, relax, and start reading.
        </p>
        <br />
        <p>
          Read your newsletters from your Kindle without blue light or being
          distracted by notifications and other apps.
        </p>
      </Section>

      <section
        className="border-t border-b bg-gray-100 py-16 xl:py-32"
        id="faq"
      >
        <div className="container">
          <h3 className="text-center text-3xl mb-8">FAQ</h3>
          <div className="grid sm:grid-cols-2 xl:grid-cols-2 gap-4">
            <div className="card">
              <p className="font-bold mb-2">
                Why should I read newsletters on my Kindle?
              </p>
              <p>
                If you read at night, the blue light from your laptop or phone
                impacts negatively your sleep. Kindles are also lightweight and
                don&apos;t have any of the distractions that traditional web
                browsers provide.
              </p>
            </div>
            <div className="card">
              <p className="font-bold mb-2">
                Can&apos;t I just forward the newsletters to my Kindle manually?
              </p>
              <p>
                HTML/text-based emails are not supported by Kindle devices. Our
                service automates the conversion process so you don&apos;t have
                to. Images are embedded with our service as well.
              </p>
            </div>
            <div className="card">
              <p className="font-bold mb-2">
                How do you view links on the Kindle?
              </p>
              <p>
                Viewing links on a Kindle are not ideal. Kindle has a simplistic
                built-in web browser, but it is slow and difficult to navigate.
                Newsletters sent to our platform are scanned and then save all
                the links so they can be viewed from our website later.
              </p>
            </div>
            <div className="card">
              <p className="font-bold mb-2">How are images displayed?</p>
              <p>
                Newsletters can be viewed as a direct copy or converted to a
                native Kindle format. We recommend that you don&apos;t try to
                convert newsletters that are image-heavy.
              </p>
            </div>
            {/* <div className="card">
              <p className="font-bold mb-2">What do we do with Google data?</p>
              <p>
                We let users connect with their Google account for a more
                seamless experience. If granted access, we store your Google
                OAuth token in a secure database. If requested, we will delete
                our OAuth token to restrict our access. We only request access
                to the scopes required to perform the necessary actions.
              </p>
            </div> */}
            {/* <div className="card">
              <p className="font-bold mb-2">
                How does connecting with Google enhance user functionality?
              </p>
              <p>
                By integrating with your Google account, we can automate various
                processes including: (1) incoming email forwarding, (2) filter
                creation, and (3) email labeling. We only look at incoming
                emails and do not share your emails with any third-party. A user
                is not required to connect with Gmail and can later disconnect
                their account from Gmail if they wish.
              </p>
            </div> */}
          </div>
        </div>
      </section>

      <section className="container py-16 xl:py-32" id="testimonial">
        <h3 className="text-center text-4xl mb-2">Customer Testimonial</h3>
        <p className="text-center text-black text-opacity-70 mb-8">
          See what a few of our happy customers have said...
        </p>
        <div className="sm:grid grid-cols-2 gap-8">
          <div className="mb-4 sm:mb-0">
            <Image fluid={testImg1} className="w-full mb-8" />
            <Image fluid={testImg3} className="w-full mb-8 sm:mb-0" />
          </div>
          <div>
            <Image fluid={testImg2} className="w-full" />
          </div>
        </div>
      </section>
    </Layout>
  )
}
