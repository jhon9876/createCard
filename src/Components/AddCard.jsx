import { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";

const AddCard = (props) => {
  const [AddCity, SettingCity] = useState({
    img: "",
    title: "",
    description: "",
  });
  const SaveData = (e) => {
    e.preventDefault();
    props.newCity(AddCity);
    SettingCity({
      img: "",
      title: "",
      description: "",
    });
  };

  const TakeImg = (e) => {
    console.log(e.target.value);
    SettingCity({
      ...AddCity,
      img: e.target.value,
    });
  };
  const TakeTitle = (e) => {
    console.log(e.target.value);
    SettingCity({
      ...AddCity,

      title: e.target.value,
    });
  };
  const TakeDescription = (e) => {
    console.log(e.target.value);
    SettingCity({
      ...AddCity,
      description: e.target.value,
    });
  };

  return (
    <>
      <h2 className="m-3">Aggiungi Card</h2>
      <Col className="mb-3" lg={12}>
        <Form className="" onSubmit={SaveData}>
          <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
            <Form.Label>Città</Form.Label>
            <Form.Control
              required
              className="text-center border border-primary"
              type="text"
              placeholder="Inserisci nome città"
              value={AddCity.title}
              onChange={TakeTitle}
            />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label>Immagine</Form.Label>
            <Form.Control
              required
              className="text-center border border-primary"
              type="text"
              placeholder="Inserisci URL immagine"
              value={AddCity.img}
              onChange={TakeImg}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Descrizione</Form.Label>
            <Form.Control
              required
              className="border border-primary text-center"
              as="textarea"
              rows={3}
              placeholder="Inserisci descrizione"
              value={AddCity.description}
              onChange={TakeDescription}
            />
          </Form.Group>
          <Button type="submit">Invia</Button>
        </Form>
      </Col>
    </>
  );
};

export default AddCard;
