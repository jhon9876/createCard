import { useState } from "react";

import "./App.css";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import MyCard from "./Components/MyCard";
import AddCard from "./Components/AddCard";

function App() {
  const [createCard, setCard] = useState([
    {
      img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9tYXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Roma",
      description: "lorem ipsum",
    },
    {
      img: "https://images.unsplash.com/photo-1610016302534-6f67f1c968d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWlsYW5vfGVufDB8fDB8fHww00",
      title: "Milano",
      description: "lorem ipsum",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1690494958786-2ed9201fa251?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG9yaW5vfGVufDB8fDB8fHww",
      title: "Torino",
      description: "lorem ipsum",
    },
  ]);

  const setCardElement = (newCity) => {
    setCard([...createCard, newCity]);
  };

  return (
    <>
      <h1>Create Card</h1>
      <Container fluid>
        <Row className="d-flex  flex-col justify-content-center">
          <AddCard newCity={setCardElement}></AddCard>
        </Row>
        <Row className="d-flex  flex-col justify-content-center">
          <MyCard createCard={createCard}></MyCard>
        </Row>
      </Container>
    </>
  );
}

export default App;
