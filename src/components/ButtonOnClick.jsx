import React from 'react';
import {Button} from 'react-bootstrap';

export class ButtonOnClick extends React.Component {
    constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // Cette liaison est nécéssaire afin de permettre
    // l'utilisation de `this` dans la fonction de rappel.
    this.handleClick = this.handleClick.bind(this);
    
    }

    handleClick() {
        // console.log(this.state)
    this.setState(state => ({
        isToggleOn: !state.isToggleOn
    }));
    }
    render (){
        return (
            <Button style={{marginBottom:"10px"}} variant="info" onClick={this.props.fectchOnClick}>
                Montrer les évènements en IDF
            </Button>
        )
    }
}