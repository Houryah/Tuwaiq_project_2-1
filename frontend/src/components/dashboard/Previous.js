import React, { useState, useEffect } from "react";

import { Row, Col, Container, Card } from "react-bootstrap";

import axios from "axios";
import "./dashboard.css";
const Previous = () => {
  const [data, setData] = useState([]);
  const[nationalID, setNationalID] =useState()
  useEffect(() => {
    setNationalID(sessionStorage.nationalID);
    console.log("inside Previouss ")
    axios
      .get(`http://localhost:5000/test/prevus/${nationalID}`)
      .then((resp) => {
        // resp.data
        console.log(resp.data);
        setData(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [nationalID]);
  return (
    <div>
      <Container>
        <Row>
          {data.map((elem, i) => {
            return (
              <Col xs={4}>
                <Card>
                  <Card.Body>
                    <Card.Title>Name: {elem.Name}</Card.Title>
                    <Card.Text>CenterOffice:{elem.CenterOffice}</Card.Text>
                    <Card.Text>TestMechanisim:{elem.TestMechanisim}</Card.Text>
                    <Card.Text>
                      AppointmentStatus:{elem.AppointmentStatus}
                    </Card.Text>
                    <Card.Text>
                      AppointmentStatus:{elem.AppointmentStatus}
                    </Card.Text>
                    <Card.Text>TestDate:{elem.TestDate}</Card.Text>
                    <Card.Text>PaymentMethod:{elem.PaymentMethod}</Card.Text>
                
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Previous;
