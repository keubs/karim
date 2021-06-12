import Document, { Html, Head, Main, NextScript } from 'next/document'
import { Component } from 'react';
class HeadElement extends Component {
  componentDidMount() {
      const {bodyClass} = this.props
      debugger;
      document.querySelector("body").classList.add(bodyClass || "light")
  }

  render() {
      return (
        <Head>
        </Head>
      );
  }
}

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  

  render() {
    return (
      <Html>
        <HeadElement bodyClass='work' />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
