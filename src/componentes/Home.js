import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import data from "./Datos.json"

function Home() {

    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch("https://github.com/Programacion-con-Tecnologias-Web/Parcial1/blob/master/src/componentes/Datos.json");
            if (!response.ok) {
              throw new Error("Error al obtener los libros");
            }
            const data = await response.json();
            setUsers(data);
          } catch (error) {
            setError(error.message);
          }
        };
        fetchData();
      }, []);

    return (

    <Container className="home-container">
      <Row>
        <Col md={12}>
          <h2>
            Username {/* Internacionalizar el encabezado */}
          </h2>
          <Row>
            {users.map((user) => (
              <Col md={3} key={user.id}>
                  <Card.Img variant="top" src={user.url} alt={user.url} />
                  <Card.Body>
                    <Card.Title>{user.username}</Card.Title>
                    <Card.Text>{user.name}</Card.Text>
                    <Card.Text>{user.desription}</Card.Text>
                    <Card.Text>{user.cant} Seguidores</Card.Text>
                    <Card.Text>{user.cantSeguidas} Seguidas</Card.Text>
                    <Link
                      to={`/perfil/${user.id}`}
                      state={{ user }}
                      className="user-link"
                    >
                    </Link>
                  </Card.Body>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
        
    )

}

export default Home;