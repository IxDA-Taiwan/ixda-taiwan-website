/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { ContextProviderComponent } from "./context"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.scss"
import Footer from "./footer"

const Layout = ({ children, hero, menu, width }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ContextProviderComponent>
      <Header
        siteTitle={data.site.siteMetadata?.title || `Title`}
        hero={hero}
        menu={menu}
      />
      {hero || <div style={{ height: 75 }} />}
      <div
        style={{
          margin: `0 auto`,
          maxWidth: width || 800,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer></Footer>
    </ContextProviderComponent>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
