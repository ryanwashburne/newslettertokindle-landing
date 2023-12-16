import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'

import Layout from '../components/layout'
import Animated from '../components/animated'

import TopNewsletters from '../utils/top_newsletters.json'

const Section = ({ number, src, title, children }) => {
  return (
    <section className="container flex flex-wrap items-center justify-center py-16 text-lg xl:pb-48 xl:text-xl">
      <div className="flex justify-center w-full md:w-1/2 md:justify-end">
        <div className="relative w-full mb-12 md:mb-0 md:mr-32">
          <Image fluid={src} />
          <div className="absolute top-0 left-0 -mt-12 -ml-4 md:-ml-6 xl:-ml-12">
            <p className="pb-1 counter">{number}</p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <Animated>
          <h2 className="mb-4 text-2xl md:text-4xl md:mb-8">{title}</h2>
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
      <section className="py-16 mb-16 xl:py-48">
        <div className="container flex flex-wrap items-center max-w-7xl">
          <div className="w-full mb-8 text-center md:w-3/5 md:mb-0 md:text-left">
            <h1 className="text-4xl font-thin md:text-6xl md:pr-4">
              Send newsletters{' '}
              <span className="italic font-bold">directly</span> to your Kindle
            </h1>
            <p className="max-w-xl mt-8 md:text-lg md:pr-4">
              Automatically convert your email newsletters into Kindle documents
              and watch them appear on your device - just like magic &#10024;
            </p>
            <div className="flex justify-center mt-8 mb-4 md:justify-start">
              <a
                href="https://app.newslettertokindle.com"
                className="text-2xl btn"
              >
                Try for free
              </a>
            </div>
          </div>
          <div className="w-full md:w-2/5">
            <Image fluid={img1} />
          </div>
        </div>
      </section>

      <Section number={1} title="Create an account 📝" src={img2}>
        <p>It only takes 5 minutes to setup your account.</p>
        <br />
        <p>
          Grab your Kindle, connect it with our platform, and get started! No
          credit card required.
        </p>
      </Section>

      <Section number={2} title="Sync with your email 📧" src={img3}>
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

      <Section number={3} title="Enjoy on your Kindle 📚" src={img4}>
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
        className="container py-16 text-center border-t border-b "
        id="top-newsletters"
      >
        <h3 className="mb-4 text-xl md:text-2xl">
          What our users are reading...
        </h3>

        <ol className="grid md:text-lg gap-y-1">
          {TopNewsletters.newsletters.map(([newsletter], i) => {
            return (
              <li key={newsletter}>
                #{i + 1}. {newsletter}
              </li>
            )
          })}
        </ol>

        <p className="mt-2 mb-12 text-xs text-accent">
          Last updated {TopNewsletters.updated}
        </p>

        <div className="flex flex-col items-center mt-8 mb-4">
          <p className="mb-4 font-bold md:text-lg">See one you recognize?</p>
          <a href="https://app.newslettertokindle.com" className="text-xl btn">
            Read it on your Kindle
          </a>
        </div>
      </section>

      <section
        className="py-16 bg-gray-100 border-t border-b xl:py-32"
        id="faq"
      >
        <div className="container">
          <h3 className="mb-8 text-3xl text-center">FAQ</h3>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-2">
            <div className="card">
              <p className="mb-2 font-bold">
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
              <p className="mb-2 font-bold">
                Can&apos;t I just forward the newsletters to my Kindle manually?
              </p>
              <p>
                HTML/text-based emails are not supported by Kindle devices. Our
                service automates the conversion process so you don&apos;t have
                to. Images are embedded with our service as well.
              </p>
            </div>
            <div className="card">
              <p className="mb-2 font-bold">
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
              <p className="mb-2 font-bold">How are images displayed?</p>
              <p>
                Newsletters can be viewed as a direct copy or converted to a
                native Kindle format. We recommend that you don&apos;t try to
                convert newsletters that are image-heavy.
              </p>
            </div>
            {/* <div className="card">
              <p className="mb-2 font-bold">What do we do with Google data?</p>
              <p>
                We let users connect with their Google account for a more
                seamless experience. If granted access, we store your Google
                OAuth token in a secure database. If requested, we will delete
                our OAuth token to restrict our access. We only request access
                to the scopes required to perform the necessary actions.
              </p>
            </div> */}
            {/* <div className="card">
              <p className="mb-2 font-bold">
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
        <h3 className="mb-2 text-xl text-center md:text-4xl">
          Customer Testimonial
        </h3>
        <p className="mb-8 text-sm text-center text-black md:text-base text-opacity-70">
          See what a few of our happy customers have said...
        </p>
        <div className="grid-cols-2 gap-8 sm:grid">
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
