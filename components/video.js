// new component syntax
import { Container } from '@headspace/web-styles/components/container';
import { Col } from '@headspace/web-styles/components/col';

export default () => {
  return (
    <Container>
      <Col s={4} m={6}>
        Foo
      </Col>
      <Col s={4} m={6}>
        Bar
      </Col>
    </Container>
  )
}