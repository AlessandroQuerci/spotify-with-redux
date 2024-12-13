import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { PLAY_SONG } from "../redux/actions";

import Card from "react-bootstrap/Card";

const MyGroupCard = (props) => {
  const [albumsData, setAlbumsData] = useState([]);
  const dispatch = useDispatch();

  const fetchMain = () => {
    const URL = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${props.artist}`;
    fetch(URL)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore nella richiesta");
        }
      })
      .then((albums) => {
        setAlbumsData(albums.data.slice(0, 4));
        console.log(albums.data.slice(0, 4));
        console.log(albumsData);
      });
  };

  useEffect(() => {
    fetchMain();
  }, []);

  return (
    <>
      <p className="fs-2 text-white fw-bold ps-custom">{props.category}</p>
      {albumsData.map((album) => {
        const handleClick = () => {
          dispatch({
            type: PLAY_SONG,
            titlePayload: album.album.title,
            artistPayload: album.artist.name,
            urlPayload: album.album.cover_small,
          });
        };
        return (
          <>
            <Col xs={2} className="mx-4" key={album.id}>
              <Card className="rounded-0 bg-transparent border border-0" onClick={handleClick}>
                <Card.Img variant="top" src={album.album.cover_medium} id="imgCard" />
                <Card.Body>
                  <Card.Title className="text-white m-0 fs-6 text-truncate">Track: {album.album.title}</Card.Title>
                  <Card.Title className="text-white m-0 fs-6">Artist: {album.artist.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </>
        );
      })}
    </>
  );
};

export default MyGroupCard;
