import { Col, Container, Row } from "react-bootstrap";
import Next from "../assets/image/media/next.png";
import Play from "../assets/image/media/play.png";
import Prev from "../assets/image/media/prev.png";
import Repeat from "../assets/image/media/repeat.png";
import Shuffle from "../assets/image/media/shuffle.png";
import { useSelector, useDispatch } from "react-redux";
import { FaHeart } from "react-icons/fa";
import { ADD_LIKE } from "../redux/actions";

const MyPlayer = () => {
  const artistName = useSelector((state) => state.player.song.artist);
  const songName = useSelector((state) => state.player.song.title);
  const urlImage = useSelector((state) => state.player.song.cover);
  const selected = useSelector((state) => state.heart.main.selected);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({
      type: ADD_LIKE,
    });
  };

  return (
    <>
      <Container fixed className="fixed-bottom " id="player">
        <Row className="">
          <Col xs={4} className="bg-dark offset-2 py-3">
            <div className="d-flex justify-content-start">
              <img src={urlImage} alt="" />
              <div className="ms-2">
                <p className="m-0 text-spotify-muted fs-6">{artistName}</p>
                <p className="m-0 text-white fs-6">{songName}</p>
              </div>
            </div>
          </Col>
          <Col xs={6} className=" bg-dark justify-content-between d-flex py-3  align-items-center" id="playerZone">
            <div id="playerControls">
              <div>
                <img src={Shuffle} alt="" className="mx-3" />
                <img src={Prev} alt="" className="mx-3" />
                <img src={Play} alt="" className="mx-3" id="playBtn" />
                <img src={Next} alt="" className="mx-3" />
                <img src={Repeat} alt="" className="mx-3" />
              </div>
              <hr id="linePlayer" className="border border-2 m-0 mt-3" />
            </div>
            <FaHeart id="heartLike" className={`me-4 ${selected ? "text-danger" : ""}`} onClick={handleClick} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MyPlayer;
