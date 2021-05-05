import React from 'react';
import {Card, Button} from 'react-bootstrap';
import {ButtonFavorite} from './ButtonFavorite';

export class Cards extends React.Component {
    constructor(props){
        super(props);
        // "useless constructor" why? J'utilise les props?
    }
    render() {
        return (
            <>
                <div>
                    <Card style={{ width: '25rem', backgroundColor:"#1a1046", marginBottom:"5px" }}>
                        <Card.Img src={this.props.image}></Card.Img>
                        <Card.Body>
                            <Card.Title>{this.props.title}</Card.Title>
                            <Card.Text>{this.props.description}</Card.Text>
                            <Button variant="info" href={this.props.url}>Lien de l'évènement</Button>
                            <ButtonFavorite id={this.props.id} addFavCards={this.props.addFavCards}/>
                        </Card.Body>
                    </Card>
                </div>
            </>
        );
    }
}


export default Cards;