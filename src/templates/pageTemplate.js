import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import style from "./pageTemplate.module.scss"

const PageTemplate = props => {
  const {
    data: {
      page: {
        html,
        frontmatter: { title },
      },
      site: {
        siteMetadata: { facebook },
      },
    },
  } = props

  return (
    <>
      <Seo title={title} facebook={facebook} />
      <Layout width={800}>
        <div className={style.page}>
          <div
            className="bodytext"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </Layout>
    </>
  )
}

PageTemplate.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PageTemplate

//eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query PageByPath($slug: String!) {
    page: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
      }
    }
    site {
      siteMetadata {
        facebook {
          appId
        }
      }
    }
  }
`
