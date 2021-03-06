import React from "react"

import Layout from "../partials/layout"
import Section from '../components/section'
import Columns from '../components/columns'

import ContactLocation from '../custom/contact-location'
import ContactLinks from '../custom/contact-links'

const Contact = props => (
  <Layout title='Contact' {...props}>
    <Section>
      <Columns>
        <ContactLocation />
        <ContactLinks />
      </Columns>
    </Section>
  </Layout>
)

export default Contact