import React from 'react'

import ReadingSideDoodle from '../images/doodles/ReadingSideDoodle.png'
import MeditatingDoodle from '../images/doodles/MeditatingDoodle.png'
import SelfieDoodle from '../images/doodles/SelfieDoodle.png'
import LayingDoodle from '../images/doodles/LayingDoodle.png'

import Layout from '../components/layout'
import Animated from '../components/animated'

import { Check } from 'react-feather'

export default () => {
  return (
    <Layout>
      <section className="border-b-2 mb-16 xl:mb-0">
        <div className="flex flex-wrap items-center relative p-8 xl:py-32 xl:px-12 overflow-hidden">
          <div className="w-full xl:w-3/5 mb-8 xl:mb-0 text-center xl:text-left">
            <h1 className="text-4xl xl:text-6xl">
              Send newsletters{' '}
              <span className="pt-3 p-1 bg-gradient-to-r from-red-200 to-red-500">
                directly
              </span>{' '}
              to your Kindle
            </h1>
            <div className="flex xl:block items-center justify-center mt-8 text-lg xl:text-base">
              <a href="https://app.newslettertokindle.com">
                <button className="btn">Get Started</button>
              </a>
            </div>
          </div>
          <div className="w-full xl:w-2/5">
            <img src={ReadingSideDoodle} className="-mb-16" />
          </div>
        </div>
      </section>

      <section className="container py-16 xl:py-48 flex flex-wrap items-center justify-center text-lg xl:text-xl">
        <div className="w-full xl:w-1/2 flex justify-center xl:justify-end">
          <div className="relative mb-12 xl:mb-0 xl:mr-32">
            <img src={MeditatingDoodle} />
            <div className="absolute top-0 left-0 -mt-12 -ml-12">
              <p className="counter">1</p>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-1/2">
          <Animated>
            <h2 className="text-4xl xl:text-6xl mb-4 xl:mb-8">
              Create an account
            </h2>
          </Animated>
          <Animated>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              faucibus eu leo ut consequat. Curabitur fermentum auctor dolor vel
              placerat. Aliquam vitae leo varius, sodales orci eget, lacinia
              est.
            </p>
          </Animated>
        </div>
      </section>

      <section className="container py-16 xl:py-48 flex flex-wrap items-center justify-center text-lg xl:text-xl">
        <div className="w-full xl:w-1/2 flex justify-center xl:justify-end">
          <div className="relative mb-12 xl:mb-0 xl:mr-32">
            <img src={SelfieDoodle} />
            <div className="absolute top-0 left-0 -mt-12 -ml-12">
              <p className="counter">2</p>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-1/2">
          <Animated>
            <h2 className="text-4xl xl:text-6xl mb-4 xl:mb-8">
              Subscribe with your new email
            </h2>
          </Animated>
          <Animated>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              faucibus eu leo ut consequat. Curabitur fermentum auctor dolor vel
              placerat. Aliquam vitae leo varius, sodales orci eget, lacinia
              est.
            </p>
          </Animated>
        </div>
      </section>

      <section className="container py-16 xl:py-48 flex flex-wrap items-center justify-center text-lg xl:text-xl">
        <div className="w-full xl:w-1/2 flex justify-center xl:justify-end">
          <div className="relative flex justify-center items-center mb-12 xl:mb-0 xl:mr-32">
            <img src={LayingDoodle} className="xl:-mb-48" />
            <div className="absolute top-0 left-0 -mt-12 -ml-12">
              <p className="counter">3</p>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-1/2">
          <Animated>
            <h2 className="text-4xl xl:text-6xl mb-4 xl:mb-8">
              Enjoy on your Kindle
            </h2>
          </Animated>
          <Animated>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              faucibus eu leo ut consequat. Curabitur fermentum auctor dolor vel
              placerat. Aliquam vitae leo varius, sodales orci eget, lacinia
              est.
            </p>
          </Animated>
        </div>
      </section>

      <section className="bg-black py-32">
        <div className="container xl:w-1/2">
          <Animated>
            <h2 className="text-5xl xl:text-6xl mb-4 text-white text-center">
              Ready to get started?
            </h2>
          </Animated>
          <div className="bg-white rounded-lg p-6 border-2 flex flex-wrap">
            <div className="w-full xl:w-1/2 p-6 flex flex-col h-full">
              <h4 className="text-2xl">Free</h4>
              <ul className="my-4 flex-grow text-sm">
                <li>
                  <div className="inline-flex">
                    <Check />
                    &nbsp;Lorem ipsum dolor sit amet
                  </div>
                </li>
                <li>
                  <div className="inline-flex">
                    <Check />
                    &nbsp;Lorem ipsum dolor sit amet
                  </div>
                </li>
                <li>
                  <div className="inline-flex">
                    <Check />
                    &nbsp;Lorem ipsum dolor sit amet
                  </div>
                </li>
              </ul>
            </div>
            <div className="w-full xl:w-1/2">
              <div className="p-6 border-t-2 xl:border-t-0 xl:border-l-2 flex flex-col h-full">
                <h4 className="text-5xl">$3/month</h4>
                <ul className="my-4 flex-grow text-lg">
                  <li>
                    <div className="inline-flex">
                      <Check />
                      &nbsp;Lorem ipsum dolor sit amet
                    </div>
                  </li>
                  <li>
                    <div className="inline-flex">
                      <Check />
                      &nbsp;Lorem ipsum dolor sit amet
                    </div>
                  </li>
                  <li>
                    <div className="inline-flex">
                      <Check />
                      &nbsp;Lorem ipsum dolor sit amet
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-500 text-center mt-8">
          Questions? Contact{' '}
          <span className="font-bold">help@newslettertokindle.com</span>
        </p>
      </section>
    </Layout>
  )
}
