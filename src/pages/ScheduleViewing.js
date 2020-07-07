import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default function ScheduleViewing() {
  const [houses, setHouses] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [allData, setAllData] = useState([]);
  const [message, setMessage] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setAllData([...allData, { name, email, phone, date }]);
    setMessage(
      "Thank you for scheduling a viewing. We will get in contact with you soon."
    );
    setName("");
    setEmail("");
    setPhone("");
    setDate("");
  };
  console.log("New viewing: ", allData);

  useEffect(() => {
    const url =
      "https://my-json-server.typicode.com/Codaisseur/listings-agents-data/listings";
    const fetchData = async () => {
      const response = await axios.get(url);
      setHouses(response.data);
    };
    fetchData();
  }, []);

  const addresses = houses.map((houses) => {
    return (
      houses.address.street +
      " " +
      houses.address.number +
      " " +
      houses.address.city
    );
  });

  return (
    <div className="ScheduleViewing">
      <br />
      <h1>Schedule viewing</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm="6">
            listing address
          </Form.Label>
          <Col sm="4">
            <Form.Control as="select" className="select">
              <option value={1}>{addresses[0]}</option>
              <option value={2}>{addresses[1]}</option>
              <option value={3}>{addresses[2]}</option>
              <option value={4}>{addresses[3]}</option>
              <option value={5}>{addresses[4]}</option>
              <option value={6}>{addresses[5]}</option>
              <option value={7}>{addresses[6]}</option>
              <option value={8}>{addresses[7]}</option>
              <option value={9}>{addresses[8]}</option>
              <option value={10}>{addresses[9]}</option>
            </Form.Control>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="6">
            name
          </Form.Label>
          <Col sm="4">
            <Form.Control type="text" value={name} onChange={handleName} />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="6">
            email
          </Form.Label>
          <Col sm="4">
            <Form.Control type="email" value={email} onChange={handleEmail} />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="6">
            phone
          </Form.Label>
          <Col sm="4">
            <Form.Control type="number" value={phone} onChange={handlePhone} />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm="6">
            date
          </Form.Label>
          <Col sm="4">
            <Form.Control type="date" value={date} onChange={handleDate} />
          </Col>
        </Form.Group>

        <Button size="lg" type="submit">
          Submit
        </Button>
      </Form>
      <h3>{message}</h3>
    </div>
  );
}
