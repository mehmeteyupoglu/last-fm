import React from 'react';
import { Container, Row, Col, Button } from "reactstrap"
import './App.css';
import { Header, TopArtists, TopTracks } from "./Components"


function App(props) {
  return (
    <div className="App">
      <Container >
        <Row>
            <Col sm="12" md={{ size: 8, offset: 2 }}>
              <Header />
              <TopArtists />
              <TopTracks />
            </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
