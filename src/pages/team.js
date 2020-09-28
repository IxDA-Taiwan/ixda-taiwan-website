import React from "react"
import { graphql } from "gatsby"

import Seo from "../components/seo"
import style from "./team.module.scss"

import Layout from "../components/layout"

import Email from "../images/icon-email.svg"
import Fb from "../images/icon-fb.svg"
import Linkedin from "../images/icon-linkedin.svg"
import Twitter from "../images/icon-twitter.svg"
import Github from "../images/icon-github.svg"
import Web from "../images/icon-web.svg"

const Team = props => {
  const {
    data: {
      allStrapiStaff: { edges: staffs },
    },
  } = props

  let director = staffs.filter(e => e.node.category === "director")
  let volunteer = staffs.filter(e => e.node.category === "volunteer")
  let consultant = staffs.filter(e => e.node.category === "consultant")
  director.sort((a, b) => a.node.priority - b.node.priority)
  volunteer.sort((a, b) => a.node.priority - b.node.priority)
  consultant.sort((a, b) => a.node.priority - b.node.priority)
  return (
    <Layout width={800}>
      <Seo title="營運團隊" />
      <section className={style.team}>
        <article>
          <h1>營運團隊</h1>
          <h2>理監事團隊</h2>
          <p>
            IxDA Taiwan
            理監事與營運團隊是一群喜愛及專研互動設計的熱血推廣者。他們擁有跨領域的產業及專長知識，組織及引領IxDA
            Taiwan 的工作方向，提供會員學習及交流的社群平台。
          </p>
          <div className={style.staffContainer}>
            {director.map(e => (
              <Staff key={e.node.name} staff={e.node} />
            ))}
          </div>
          <h2>工作團隊</h2>
          <p>
            直擊報導組：活動最新直擊報導及專文介紹
            <br />
            視覺創意組：視覺及形象設計
            <br />
            攝影紀錄組：捕捉與妳的一眼瞬間
            <br />
          </p>
          <div className={style.staffContainer}>
            {volunteer.map(e => (
              <Staff key={e.node.name} staff={e.node} />
            ))}
          </div>
          <h2>顧問</h2>
          <div className={style.staffContainer}>
            {consultant.map(e => (
              <Staff key={e.node.name} staff={e.node} />
            ))}
          </div>
        </article>
      </section>
    </Layout>
  )
}

const Staff = data => {
  const { staff } = data
  return (
    <div className={style.staffItem}>
      <div className={style.staffAvatar}>
        <img src={staff.avatar.publicURL} alt={staff.name} />
      </div>
      <div className={style.staffDetail}>
        <p>{staff.name}</p>
        <b>{staff.title}</b>
        <p>
          {staff.corp} {staff.jobtitle}
        </p>
        <p className={style.icons}>
          {staff.fb && (
            <a href={staff.fb}>
              <Fb />
            </a>
          )}
          {staff.linkedin && (
            <a href={staff.linkedin}>
              <Linkedin />
            </a>
          )}
          {staff.twitter && (
            <a href={staff.twitter}>
              <Twitter />
            </a>
          )}
          {staff.github && (
            <a href={staff.github}>
              <Github />
            </a>
          )}
          {staff.website && (
            <a href={staff.website}>
              <Web />
            </a>
          )}
          {staff.email && (
            <a href={"mailto:" + staff.email}>
              <Email />
            </a>
          )}
        </p>
      </div>
    </div>
  )
}

export default Team

//eslint-disable-next-line no-undef
export const query = graphql`
  query staffQuery {
    allStrapiStaff {
      edges {
        node {
          id
          website
          twitter
          title
          priority
          name
          linkedin
          jobtitle
          github
          fb
          email
          corp
          category
          avatar {
            publicURL
          }
        }
      }
    }
  }
`
