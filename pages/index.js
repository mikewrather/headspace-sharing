import Link from "next/link";
import Head from 'next/head'
import Header from "../components/header";
import Video from "../components/video";


// class CustomDocument extends Document {
//   mainStyles = {
//     "font-family": 'Apercu',
//     "font-style": "normal",
//     "font-weight": 400,
//     src: "url('https://static.headspace.com/fonts/apercu/apercu_regular.eot')",
//     margin: "0px",
//   }

//   render () {
//     return (<html lang='en-US'>
//       <Head>
//         <meta property="og:image" content="https://images.ctfassets.net/v3n26e09qg2r/11CfrjeTLEc8iYUoC0eM2U/7723fe6ae4e779ad09f857eb338473a7/share.jpg" class="next-head" />
//         <meta property="og:url" content="https://www.headspace.com/" class="next-head"></meta>
//         <meta property="og:title" content="Meditation and Sleep Made Simple - Headspace" class="next-head" />
//         <meta property="og:description" content="Live a healthier, happier, more well-rested life in just a few minutes a day with the Headspace app." class="next-head" />
//         <meta property="og:image:type" content="image/jpeg" />
//         <meta property="og:image:height" content="600" class="next-head" />
//         <meta property="og:image:width" content="1230" class="next-head"></meta>
//         <meta property="og:image:alt" content="A shiny red apple with a bite taken out" />
//       </Head>
//       <body style={this.mainStyles}>
//         <Main />
//         <Video></Video>
//         <NextScript />
//       </body>
//     </html>)
//   }
// }

// export default CustomDocument;

export default () => {
  const mainStyles = {
    "font-family": 'Apercu',
    "font-style": "normal",
    "font-weight": 400,
    src: "url('https://static.headspace.com/fonts/apercu/apercu_regular.eot')",
    margin: "0px",
  }
  return (
    <main style={mainStyles}>
      <Head>
        <meta property="og:image" content="https://images.ctfassets.net/v3n26e09qg2r/11CfrjeTLEc8iYUoC0eM2U/7723fe6ae4e779ad09f857eb338473a7/share.jpg" class="next-head" />
        <meta property="og:url" content="https://www.headspace.com/" class="next-head"></meta>
        <meta property="og:title" content="Meditation and Sleep Made Simple - Headspace" class="next-head" />
        <meta property="og:description" content="Live a healthier, happier, more well-rested life in just a few minutes a day with the Headspace app." class="next-head" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:height" content="600" class="next-head" />
        <meta property="og:image:width" content="1230" class="next-head"></meta>
        <meta property="og:image:alt" content="A shiny red apple with a bite taken out" />
        <style>{`
          body {
            margin: 0px;
          }
        `}</style>
      </Head>
      <Video />
      <Header></Header>
    </main>
  )
  }