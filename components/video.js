// new component syntax


export default () => {
    let videoStyle = {
        "z-index": "0",
        position: "absolute",
        top: "0px",
        left: "0px",
        height: "100%",
        width: "100%",
        "object-fit": "contain"
      };
  return (
    <div style={
        {
            padding: "0px",
            margin: "0px",
            height: "100%",
            width: "100%",
        }
    }>

        <video style={videoStyle} controls autoPlay>
            <source src="http://www.exit109.com/~dnn/clips/RW20seconds_2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>
  )
}
