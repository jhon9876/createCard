import { Button, Card, Col } from "react-bootstrap";

const MyCard = (props) => {
  return (
    <>
      {props.createCard.map((singleElement, index) => {
        return (
          <Col key={index} sm={12} md={12} xl={4} xxl={4} className="mb-3">
            <Card style={{ backgroundColor: "rgb(174 174 174 / 49%)" }}>
              <Card.Img
                style={{ height: "150px" }}
                variant="top"
                src={singleElement.img}
              />
              <Card.Body>
                <Card.Title>{singleElement.title}</Card.Title>
                <Card.Text>{singleElement.description}</Card.Text>
                <Button size="lg" variant="primary">
                  Visitato
                </Button>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </>
  );
};

export default MyCard;
