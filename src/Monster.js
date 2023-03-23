import { Card } from "react-bootstrap";
import { useState } from "react";
import { Container } from "react-bootstrap";
import "./Monster.css";

export default function Monster(props) {
    return (
        <Container className="carte">
            <Card style={{ width: '50vw', minWidth:'1024px'}}>
                <Card.Img variant="top" src={props.img_url} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Subtitle>description</Card.Subtitle>
                    <Card.Text className="desc">{props.description}</Card.Text>
                    <Card.Subtitle>biome</Card.Subtitle>
                    <Card.Text>{props.biome}</Card.Text>
                    <Card.Subtitle>Matériaux récupérables</Card.Subtitle>
                    <Card.Text>{props.loot}</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
}