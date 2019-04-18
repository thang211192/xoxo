import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import lottie from "lottie-web"
import animation from "./a1.json"
class IndexPage extends React.Component {
constructor(props) {
  super(props);
  this.state = {show: false}
}

componentDidUpdate() {
  if(this._el){
    lottie.loadAnimation({
      container: this._el,
      renderer: 'svg',
      loop:true,
      autoplay:true,
      animationData: animation,
    })
  }
  
}
_click = () => {
  this.setState({show: true})

  setTimeout(() => this.setState({show: false}), 1500)
}
render() {
  return (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <span
      style={{
        fontWeight: 'bold',
        color: 'purple',
        cursor: 'pointer',
      }}
      onClick={this._click}
    >
      Click me
    </span>
    {this.state.show && (
          <div
            id="animation"
            ref={el => (this._el = el)}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              top: 0,
              left: 0,
              zIndex:'9999'
            }}
          />
        )}
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
  )
}
    }
export default IndexPage
