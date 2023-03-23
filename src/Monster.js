import { Card } from "react-bootstrap";
import { useState } from "react";
import { Container } from "react-bootstrap"


export default function Monster(props) {
    return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.img_url} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Subtitle>{props.species}, {props.type}, {props.color}</Card.Subtitle>
                    <Card.Text>{props.description}</Card.Text>
                </Card.Body>
            </Card>
    );
}