import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Layout from '../components/Layout'
import Accordion from '../components/Accordion'

// Export Template for use in CMS preview
export const DefaultPageTemplate = ({
  title,
  subtitle,
  featuredImage,
  accordion,
  body
}) => (
  <main className="DefaultPage">
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />

    <section className="section">
      <div className="container">
        <Accordion items={accordion} />
      </div>
    </section>
  </main>
)

const DefaultPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <DefaultPageTemplate {...page.frontmatter} body={page.html} />
  </Layout>
)
export default DefaultPage

export const pageQuery = graphql`
  query DefaultPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
        accordion {
          title
          description
        }
      }
    }
  }
`
