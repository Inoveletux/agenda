import React from 'react';
import {Button} from 'react-bootstrap';
import {LikeOutlined} from '@ant-design/icons'; 

export class ButtonFavorite extends React.Component {
    constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // Cette liaison est nécéssaire afin de permettre
    // l'utilisation de `this` dans la fonction de rappel.
    this.onClickFavAndState = this.onClickFavAndState.bind(this);
    
    }

    isFavorite() {
    this.setState(state => ({
        isToggleOn: !state.isToggleOn
    }));
}

    onClickFavAndState() {
        this.props.addFavCards(this.props.id);
        this.isFavorite();
    }

    render (){
        return (
            <Button style={{
                marginLeft:"5px",
                backgroundColor: this.state.isToggleOn ? '' : 'orange'
            }} 
                variant="info" 
                onClick={this.onClickFavAndState}
            >
                <LikeOutlined/>
            </Button>
        )
    }
}