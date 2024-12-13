import { Col, Row } from "react-bootstrap";
import MyGroupCard from "./MyGroupCard";

const MyMainSection = () => {
  return (
    <>
      <Col md={10} id="mainSection">
        <div className="px-custom d-flex justify-content-around py-5">
          <a className="text-spotify-muted text-decoration-none fw-bold fs-6" href="">
            TRENDING
          </a>
          <a className="text-spotify-muted text-decoration-none fw-bold fs-6" href="">
            PODCAST
          </a>
          <a className="text-spotify-muted text-decoration-none fw-bold fs-6" href="">
            MOODS AND GENREA
          </a>
          <a className="text-spotify-muted text-decoration-none fw-bold fs-6" href="">
            NEW RELEASES
          </a>
          <a className="text-spotify-muted text-decoration-none fw-bold fs-6" href="">
            DISCOVER
          </a>
        </div>
        <Row className="px-5 py-5 align-items-center justify-content-center ">
          <MyGroupCard category="Rock Classic" artist="queen" />
        </Row>
        <Row className="px-5 py-5 align-items-center justify-content-center">
          <MyGroupCard category="Rap Classic" artist="eminem" />
        </Row>
        <Row className="px-5 py-5 align-items-center justify-content-center">
          <MyGroupCard category="Trap Classic" artist="lilbaby" />
        </Row>
      </Col>
    </>
  );
};

export default MyMainSection;
