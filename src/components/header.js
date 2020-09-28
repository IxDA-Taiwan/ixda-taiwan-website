import { Link } from "gatsby"
import { useContext } from "react"
import PropTypes from "prop-types"
import React from "react"
import LogoImage from "../images/Logo.svg"
import MenuIcon from "../images/menu-black.svg"
import style from "./header.module.scss"
import Context from "./context"

const Header = ({ hero, logo, menu }) => {
  const Logo = logo || LogoImage
  const {
    data: { scrollOverMenu, menuOpen },
    set,
  } = useContext(Context)
  return (
    <header
      className={[
        style.header,
        hero ? style.hero : "",
        scrollOverMenu ? "" : style.scrollOverMenu,
      ].join(" ")}
      style={{
        backdropFilter:
          style.hero && menuOpen ? "saturate(180%) blur(20px)" : "",
      }}
    >
      <Link to="/" className={style.logo}>
        <Logo></Logo>
      </Link>
      <label className={style.menuLabel} htmlFor="HeaderMenu">
        <MenuIcon fill="#404C53" />
      </label>
      <input
        className={style.menuController}
        type="checkbox"
        id="HeaderMenu"
        checked={menuOpen}
        onChange={event => set({ menuOpen: event.target.checked })}
      />
      <nav>
        <Link to="/">首頁</Link>
        <div>
          <span>關於協會</span>
          <div className={style.inner}>
            <Link to="/about/">協會簡介</Link>
            <Link to="/team/">營運團隊</Link>
          </div>
        </div>
        <div>
          <span>活動資訊</span>
          <div className={style.inner}>
            <a href="https://tickets.ixda.org.tw/">近期活動</a>
            <a href="https://medium.com/ixda-taiwan/">活動回顧</a>
          </div>
        </div>
        <Link to="/members/">會員服務</Link>
        <Link to="/services/">推廣服務</Link>
        <Link to="/sponsor/">贊助合作</Link>
        <Link to="/contact/">聯絡我們</Link>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
