// Context.js
import React from "react"

const defaultContextValue = {
  data: {
    menuOpen: false,
    scrollOverMenu: false,
  },
  set: () => {},
}

const Context = React.createContext(defaultContextValue)

class ContextProviderComponent extends React.Component {
  constructor() {
    super()

    this.setData = this.setData.bind(this)
    this.state = {
      ...defaultContextValue,
      set: this.setData,
    }
  }

  handleScroll = () => {
    if(window.scrollY > (75) && !this.state.data.scrollOverMenu) {
      this.setData({scrollOverMenu: true});
    } else if(window.scrollY <= 75 && this.state.data.scrollOverMenu) {
      this.setData({scrollOverMenu: false});
    }
  }

  componentDidMount() {
    this.scrollListener = window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  setData(newData) {
    this.setState(state => ({
      data: {
        ...state.data,
        ...newData,
      },
    }))
  }

  render() {
    return <Context.Provider value={this.state}>{this.props.children}</Context.Provider>
  }
}

export { Context as default, ContextProviderComponent }