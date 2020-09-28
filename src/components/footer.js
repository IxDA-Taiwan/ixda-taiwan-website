import React from "react"
import style from "./footer.module.scss"

import FacebookMessenger from "../images/fa-brands-facebook-messenger.svg"
import Facebook from "../images/fa-brands-facebook-square.svg"
import Instagram from "../images/fa-brands-instagram.svg"
import Medium from "../images/fa-brands-medium.svg"
/* eslint-disable */
const Footer = () => {
  return (
    <>
      <footer className={style.footer}>
        <div className={style.social}>
          <a href="https://m.me/ixda.tw" target="_blank" rel="noreferrer">
            <FacebookMessenger />
          </a>
          <a href="https://fb.me/ixda.tw" target="_blank" rel="noreferrer">
            <Facebook />
          </a>
          <a
            href="https://www.instagram.com/ixda_taiwan/"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram />
          </a>
          <a
            href="https://medium.com/ixda-taiwan"
            target="_blank"
            rel="noreferrer"
          >
            <Medium />
          </a>
        </div>
        <div className={style.copyright}>
          &copy; 2020 IxDA Taiwan. All Right Reserved. Base on uxer.
        </div>
      </footer>
    </>
  )
}
/* eslint-enable */

export default Footer
