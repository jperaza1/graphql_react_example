import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { GET_PERSONAJE } from "../../GQL/Querys";
import { Spinner, Container, Col, Row, ButtonToggle } from "reactstrap";
import { Link } from "react-router-dom";

export default function Personaje(props) {
  let { Id } = useParams();
  const { data, loading, error } = useQuery(GET_PERSONAJE, {
    variables: { Id }
  });

  if (loading)
    return (
      <div className="text-center">
        <Spinner type="grow" color="primary" />
        <Spinner type="grow" color="secondary" />
        <Spinner type="grow" color="success" />
        <Spinner type="grow" color="danger" />
        <Spinner type="grow" color="warning" />
        <Spinner type="grow" color="info" />
        <Spinner type="grow" color="light" />
        <Spinner type="grow" color="dark" />
      </div>
    );

  return (
    <div>
      <Container>
        <h1 className="text-center">{data.character.name}</h1>
        <Row>
          <Col xs="12" md="6" lg="6">
            <img
              src={data.character.photo}
              width="100%"
              height="100%"
              alt={data.character.name}
            />
          </Col>
          <Col xs="12" md="6" lg="6">
            <p>
              <strong>Personaje:</strong> {data.character.name}
            </p>
            <p>
              <strong>Actor:</strong> {data.character.actor}
            </p>
            <p>
              <strong>Descripcion:</strong> {data.character.description}
            </p>

            <Row style={{ paddingBottom: 10 }}>
              <Col>
                <ButtonToggle
                  color="primary"
                  onClick={() => window.open(`${data.character.url}`, "_blank")}
                >
                  Wikipedia
                </ButtonToggle>
              </Col>
              <Col>
                <Link to={"/"}>
                  <ButtonToggle color="warning">Regresar</ButtonToggle>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
