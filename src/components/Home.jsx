import { Container, Row } from "react-bootstrap";
import MyAside from "./MyAside";
import MyMainSection from "./MyMainSection";
import MyPlayer from "./MyPlayer";

const Home = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <MyAside />
          <MyMainSection />
          <MyPlayer />
        </Row>
      </Container>
    </>
  );
};

export default Home;
