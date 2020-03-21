import React from "react";
import {
  Container,
  Row,
  Card,
  CardTitle,
  CardText,
  CardBody,
  CardImg,
  Button,
  Col,
  ButtonToggle
} from "reactstrap";
import { Link } from "react-router-dom";
export default function Capitulos(props) {
  const { characters } = props;

  return (
    <div>
      <Container>
        <Row>
          {characters.map(character => (
            <Col
              key={character.id}
              lg={3}
              xs={12}
              sm={6}
              style={{ paddingTop: 20 }}
            >
              <Capitulo Capitulo={character} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

function Capitulo(props) {
  const { Capitulo } = props;
  return (
    <>
      <Card>
        <CardImg top width="100%" src={Capitulo.photo} alt={Capitulo.name} />
        <CardBody>
          <CardTitle>{Capitulo.name}</CardTitle>
          <CardText>Actor: {Capitulo.actor}</CardText>
          <Link to={`/Personaje/${Capitulo.id}`}>
            <ButtonToggle color="primary">Ver mas</ButtonToggle>
          </Link>
        </CardBody>
      </Card>
    </>
  );
}
