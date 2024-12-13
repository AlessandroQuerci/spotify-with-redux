import { Col } from "react-bootstrap";
import Logo from "../assets/image/logo/logo.png";
import { IoHomeSharp } from "react-icons/io5";
import { FaBookOpen } from "react-icons/fa6";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const MyAside = () => {
  return (
    <>
      <Col md={2} className="bg-black d-flex flex-column justify-content-between px-4 fixed-left" id="asideLeft">
        <div className=" d-flex flex-column py-4" id="linkContainer">
          <div className="d-flex justify-content-start pb-5 ps-3">
            <img src={Logo} alt="Logo Spotify" className="logoSpotify" />
          </div>
          <a href="" className="text-decoration-none text-spotify-muted fs-6 pb-4">
            <IoHomeSharp className="text-spotify-muted fs-3 me-2" id="icons" /> Home
          </a>
          <a href="" className="text-decoration-none text-spotify-muted fs-6 pb-4">
            <FaBookOpen className="text-spotify-muted fs-3 me-2" id="icons" /> Your Library
          </a>
          <InputGroup className="mb-3">
            <Form.Control placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" />
            <Button variant="outline-secondary" id="button-addon2">
              GO
            </Button>
          </InputGroup>
        </div>
        <div className="d-flex justify-content-center flex-column px-4 Buttons">
          <Button className="text-black bg-white border border-0 rounded-pill mb-4" id="signUp">
            Sign Up
          </Button>
          <Button className="text-white bg-black  border border-2 rounded-pill " id="login">
            Login
          </Button>
          <div className="d-flex justify-content-center mt-3">
            <a href="" className="text-spotify-muted text-decoration-none">
              Cookie Policy
            </a>
            <p className="text-secondary mx-2"> | </p>
            <a href="" className="text-spotify-muted text-decoration-none">
              Privacy
            </a>
          </div>
        </div>
      </Col>
    </>
  );
};

export default MyAside;
