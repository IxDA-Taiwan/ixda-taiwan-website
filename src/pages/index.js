import React from "react"
import { Link } from "gatsby"
import { animateScroll as scroll } from "react-scroll"

import Layout from "../components/layout"
import SEO from "../components/seo"

import style from "./index.module.scss"
import Arrow from "../images/arrow.svg"

const IndexPage = ({ data }) => {
  const {
    allMediumPost: { edges: medium },
    allStrapiEvent: { edges: event },
  } = data
  console.log(medium)
  console.log(event)
  return (
    <Layout
      width={"100%"}
      hero={
        <div className={style.hero}>
          <h1>
            <span>跨領域、親參與、共創作</span>
            <br />
            <span>以雙向有趣互動，</span>
            <span>強化學習體驗</span>
            <div className={style.float}>
              <button
                style={{
                  cursor: "pointer",
                  display: "inline-block",
                  backgroundColor: "transparent",
                  border: "none",
                  outline: "none",
                }}
                onClick={() => {
                  console.log("click")
                  scroll.scrollTo(window.innerHeight - 75, {
                    duration: 500,
                    smooth: true,
                  })
                }}
              >
                <Arrow className={style.arrow}></Arrow>
              </button>
            </div>
          </h1>
        </div>
      }
    >
      <SEO title="首頁" />
      <section className={style.mainSection + " " + style.section}>
        <h1>
          <span>社團法人</span>
          <span>台灣互動設計協會</span>
        </h1>
        <article>
          IxDA Taiwan (Interaction Design Association Taiwan)
          專注於互動設計及使用者體驗設計的專業設計社群，組織發源於美國，目前有274個在地分會，IxDA
          Taiwan
          為國際互動設計協會在台灣的分會，政府立案的社團法人非營利組織。不僅是台灣設計教育的開拓者，也是持續關注社會發展的發聲者，於2010年成立，在台深耕10年，致力於秉持總會宗旨，以在地化的社群力量，持續匯整來自產官學界的能量，以互動設計提升台灣產業與體驗。
          <br />
          <br />
          <strong>跨領域、親參與、共創作</strong>
          為核心推廣價值，以雙向有趣互動，強化學習體驗。
        </article>
        <div className={style.hightlight}>
          <div>
            <div>成立於</div>
            <div className={style.field}>
              <strong>2010</strong>
            </div>
            <div className={style.field}>年</div>
          </div>
          <div>
            <div>會員人數</div>
            <div className={style.field}>
              <strong>455</strong>
            </div>
            <div className={style.field}>位</div>
          </div>
          <div>
            <div>活動次數</div>
            <div className={style.field}>
              <strong>70+</strong>
            </div>
            <div className={style.field}>場</div>
          </div>
          <div>
            <div>參加人次</div>
            <div className={style.field}>
              <strong>4210+</strong>
            </div>
            <div className={style.field}>人次</div>
          </div>
        </div>
        <article className={style.alignLeft}>
          <Link activeStyle={{ pointerEvent: "none" }} to="/">
            關於我們<Arrow></Arrow>
          </Link>
        </article>
      </section>
      <section>
        <h2>
          <strong>近期活動</strong>
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <a href={event[0].node.ticketUrl} rel="noreferrer" target="_blank">
            <picture>
              <source
                media="(min-width: 768px)"
                srcSet={event[0].node.imageFb.childImageSharp.original.src}
              />
              <img
                alt={event[0].node.title}
                style={{ width: "100%", maxWidth: 1200 }}
                src={event[0].node.imageIg.childImageSharp.original.src}
              />
            </picture>
          </a>
        </div>
      </section>
      <section className={style.retrospect + " " + style.section}>
        <h2>
          <strong>活動回顧</strong>
        </h2>
        <div className={style.items}>
          {medium.map(e => (
            <a
              className={style.item}
              id={e.node.medium_id}
              href={`https://medium.com/ixda-taiwan/${e.node.medium_id}`}
              target="_blank"
              rel="noreferrer"
            >
              <div className={style.title}>
                <div className={style.content}>
                  <h4>{e.node.title}</h4>
                  <div>{e.node.virtuals.subtitle}</div>
                </div>
                <div className={style.image}>
                  <img
                    alt={e.node.title}
                    src={`https://miro.medium.com/max/640/${e.node.virtuals.previewImage.imageId}`}
                  />
                </div>
              </div>
              <div className={style.author}>
                <div>
                  <img
                    alt={e.node.author.name}
                    src={`https://cdn-images-1.medium.com/fit/c/72/72/${e.node.author.imageId}`}
                  />
                </div>
                <div>
                  <h4>{e.node.author.name}</h4>
                  {e.node.createdAt}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className={style.items}>
          <a
            href="https://medium.com/ixda-taiwan/"
            target="_blank"
            rel="noreferrer"
          >
            觀看全部活動回顧<Arrow></Arrow>
          </a>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query indexQuery {
    allMediumPost(limit: 4, sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          title
          virtuals {
            subtitle
            previewImage {
              imageId
            }
          }
          author {
            name
            imageId
          }
          medium_id
          createdAt(fromNow: true)
        }
      }
    }
    allStrapiEvent(limit: 1, filter: { announced: { eq: true } }) {
      edges {
        node {
          id
          title
          imageFb {
            childImageSharp {
              original {
                src
              }
            }
          }
          imageIg {
            childImageSharp {
              original {
                src
              }
            }
          }
          startTime
          ticketUrl
        }
      }
    }
  }
`

export default IndexPage
