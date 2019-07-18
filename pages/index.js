import Head from 'next/head'
import Header from "../components/header";
import Video from "../components/video";

export default () => {
  const mainStyles = {
    fontFamily: 'Apercu',
    fontStyle: "normal",
    fontWeight: 400,
    src: "url('https://static.headspace.com/fonts/apercu/apercu_regular.eot')",
    margin: "0px",
  }
  return (
    <main style={mainStyles}>
      <Head>
        <meta property="og:image" content="https://images.ctfassets.net/v3n26e09qg2r/11CfrjeTLEc8iYUoC0eM2U/7723fe6ae4e779ad09f857eb338473a7/share.jpg"  />
        <meta property="og:url" content="https://www.headspace.com/" ></meta>
        <meta property="og:title" content="Meditation and Sleep Made Simple - Headspace"  />
        <meta property="og:description" content="Live a healthier, happier, more well-rested life in just a few minutes a day with the Headspace app."  />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:height" content="600"  />
        <meta property="og:image:width" content="1230" ></meta>
        <meta property="og:image:alt" content="A shiny red apple with a bite taken out" />
        <style>{`
          body {
            margin: 0px;
          }
        `}</style>
      </Head>
      <Video />
      <div style={{
        position: "absolute",
        top: "0px",
        left: "0px",
        height: "10%",
        width: "100%"
      }}>
      </div>
      <Header></Header>
    </main>
  )
  }