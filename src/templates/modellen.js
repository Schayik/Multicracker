import React from "react"
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { orderBy } from 'lodash'

import Layout from "../partials/layout"
import Section from '../components/section'
import Models from '../components/models'

const Modellen = ({ data, pageContext,  ...props }) => {
  const orderedModels = orderBy(data.allMarkdownRemark.edges, ['node.frontmatter.type', 'node.frontmatter.model'], ['desc', 'asc'])

  const ac = orderedModels.filter(({ node }) => node.frontmatter.type === 'ac')
  const mc = orderedModels.filter(({ node }) => node.frontmatter.type === 'mc')

  return (
    <Layout title={pageContext.locale === 'nl' ? 'Modellen' : 'Models'} pageContext={pageContext} {...props}>
      <Section>
        <Models models={ac} />
      </Section>
      <StyledGap />
      <Section>
        <Models models={mc} />
      </Section>
    </Layout>
  )
}

export default Modellen

const StyledGap = styled.div`
  height: 3.75rem;
`

export const pageQuery = graphql`
  query($locale: String!) {
    allMarkdownRemark(filter: { 
      frontmatter: { locale: { eq: $locale } } 
      fileAbsolutePath: {regex: "//models//"}
    }) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            type
            model
            length
            width
            height
            weight
            power
            capacity
            featuredImage {
              childImageSharp {
                fixed(width: 400, fit: CONTAIN) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`