// new component syntax
import { Container } from '@headspace/web-styles/dist/components/container';
import { Col } from '@headspace/web-styles/dist/components/col';

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
    <Container style={
        {
            padding: "0px",
            margin: "0px",
            height: "100%",
            width: "100%",
        }
    }>
      <Col>
        <video style={videoStyle} controls autoPlay>
            <source src="http://www.exit109.com/~dnn/clips/RW20seconds_2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
      </Col>
    </Container>
  )
}
