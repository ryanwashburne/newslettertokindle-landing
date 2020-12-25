import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layout'

// https://www.googleapis.com/auth/gmail.readonly https://www.googleapis.com/auth/gmail.settings.basic https://www.googleapis.com/auth/gmail.labels

export default () => {
  return (
    <Layout title="Google">
      <section className="container max-w-2xl">
        <div className="my-8">
          <h1 className="text-4xl" id="google-integration">
            Google Integration
          </h1>
          <p className="text-opacity-50 text-black mt-2">
            Newsletter to Kindle&apos;s use of information received from Google
            Restricted scopes APIs will adhere to Google&apos;s{' '}
            <a
              href="https://support.google.com/cloud/answer/9110914#explain-types"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              Limited Use requirements
            </a>
            .
          </p>
        </div>
        <div>
          <div className="card">
            <p className="font-bold mb-2">
              What do we do with your Google data?
            </p>
            <ul className="list-disc">
              <li className="pb-4">
                We let users connect with their Gmail account for a more
                seamless experience.
              </li>

              <li className="pb-4">
                If granted access, we store your Google OAuth token in a secure
                database.
              </li>

              <li className="pb-4">
                Users can later disconnect their account from Gmail if they
                wish. If requested, we will delete our OAuth token to restrict
                our access.
              </li>

              <li className="pb-4">
                We only request access to the scopes required to perform the
                necessary actions.
              </li>
            </ul>
          </div>
          <div className="card my-8">
            <p className="font-bold mb-2">
              How does it enhance the user functionality?
            </p>
            <ul className="list-disc">
              <li className="pb-4">
                Gmail (Read Only): we use this scope to wait for incoming
                emails, specifically emails with the
                &quot;newslettertokindle&quot; label attached to it via a custom
                incoming Gmail filter. We don&apos;t look at any existing emails
                in your inbox.
              </li>
              <li className="pb-4">
                Gmail (Settings Basic): we use this scope to create custom
                filters automatically for you. These filters attach a label to
                incoming emails if they originate from a specified source. We
                only create filters that are acknowledged by the user.
              </li>
              <li>
                Gmail (Labels): we use this scope to create a new label for our
                service, called &quot;newslettertokindle&quot;. Incoming emails
                with this label are sent to our platform, so be sure that you
                only approve email addresses that send no sensitive information.
              </li>
            </ul>
          </div>
          <div className="card">
            <p className="font-bold mb-2">Relevant Links</p>
            <p>
              <Link to="/docs/privacy-policy" className="link">
                Privacy Policy
              </Link>
            </p>
            <p>
              <Link to="/docs/terms-of-service" className="link">
                Terms of Service
              </Link>
            </p>
            <p className="italic text-opacity-50 text-black mt-4">
              If you believe there is a issue with our integration for your
              account, please reach out to us as soon as possible.
              <br />
              <span className="font-bold">help@newslettertokindle.com</span>
            </p>
          </div>
        </div>
      </section>
      <section className="container max-w-2xl pt-8 pb-16">
        <div className="my-8">
          <h2 className="text-2xl" id="limited-use">
            Limited Use Disclosure
          </h2>
          <p className="text-opacity-50 text-black mt-2">
            Newsletter to Kindle&apos;s use and transfer to any other app of
            information received from Google APIs will adhere to{' '}
            <a
              href="https://developers.google.com/terms/api-services-user-data-policy#additional_requirements_for_specific_api_scopes"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              Google API Services User Data Policy
            </a>
            , including the Limited Use requirements.
          </p>
        </div>
      </section>
    </Layout>
  )
}
