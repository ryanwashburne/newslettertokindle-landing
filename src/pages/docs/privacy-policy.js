import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layout'

export default () => {
  return (
    <Layout title="Privacy">
      <section className="container pb-16">
        <h2 className="text-2xl mt-8 mb-4">Privacy Policy</h2>
        <ul className="list-disc">
          <li>
            Your privacy is important to us. It is Newsletter to Kindle&apos;s
            policy to respect your privacy regarding any information we may
            collect from you across our website,{' '}
            <a
              href="https://newslettertokindle.com"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              https://newslettertokindle.com
            </a>
            , and other sites we own and operate.
          </li>
          <li>
            We only ask for personal information when we truly need it to
            provide a service to you. We collect it by fair and lawful means,
            with your knowledge and consent. We also let you know why we’re
            collecting it and how it will be used.
          </li>
          <li>
            We only retain collected information for as long as necessary to
            provide you with your requested service. What data we store, we’ll
            protect within commercially acceptable means to prevent loss and
            theft, as well as unauthorized access, disclosure, copying, use or
            modification.
          </li>
          <li>
            We don’t share any personally identifying information publicly or
            with third-parties, except when required to by law.
          </li>
          <li>
            Our website may link to external sites that are not operated by us.
            Please be aware that we have no control over the content and
            practices of these sites, and cannot accept responsibility or
            liability for their respective privacy policies.
          </li>
          <li>
            You are free to refuse our request for your personal information,
            with the understanding that we may be unable to provide you with
            some of your desired services.
          </li>
          <li>
            Your continued use of our website will be regarded as acceptance of
            our practices around privacy and personal information. If you have
            any questions about how we handle user data and personal
            information, feel free to contact us.
          </li>
          <li>This policy is effective as of 14 October 2020.</li>
        </ul>
        <h4 className="text-xl mt-8 mb-4">Google Integratioin</h4>
        <ul className="list-disc">
          <li>
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
          </li>
          <li>
            We only access information granted to us from the scopes in the
            Google OAuth consent. We won&apos;t change any user settings that
            were not consented to us by the user.
          </li>
          <li>
            We use the data to make our service the easiest for the user. Data
            shared with us is used to automate processes that otherwise would be
            done manually.
          </li>
          <li>
            We store your OAuth token in a secure database and save only the
            emails that are sent to our platform. We don&apos;t look at older
            emails or personal data unrelated to our service.
          </li>
          <li>
            We don&apos;t share your email or user data with any third-parties.
          </li>
          <li>
            <Link to="/docs/google" className="link">
              More information about the Google integration
            </Link>
          </li>
          <p className="text-black text-opacity-50 mt-8">
            <a
              href="https://getterms.io"
              title="Generate a free privacy policy"
              target="_blank"
              rel="noreferrer"
              className="link text-sm"
            >
              Privacy Policy created with GetTerms.
            </a>
          </p>
        </ul>
      </section>
    </Layout>
  )
}
