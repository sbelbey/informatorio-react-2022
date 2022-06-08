import React, {Component} from 'react';
import {Col, Card} from 'react-bootstrap';

export default class CardComponent extends Component {
    constructor(props) {
        super(props);
    
        this.state =  {
        };
    }

    render() {
        const imagesReact = './images/'+ this.props.articule.images + '.jpg'
        return (
        <Col>
            <Card>
                <Card.Img variant="top" src={imagesReact} />
                <Card.Body>
                <Card.Title>{this.props.articule.title}</Card.Title>
                <Card.Text>
                    {this.props.articule.body}
                </Card.Text>
                <Card.Link href="#">GO TO COURSE</Card.Link>
                </Card.Body>
            </Card>
        </Col>
    )}
}
