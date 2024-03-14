import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Home() {

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://my.api.mockaroo.com/car_parts_schema.json?key=16ada500");
                if (!response.ok) {
                    throw new Error("Error al obtener los carros");
                }
                const data = await response.json();
                setCars(data);
            } catch (error) {
                setError(error.message);
            }
        };
        fetchData();
    }, []);

    return (

        <Container>

        </Container>
    )

}