import React from 'react';
import {Form, FormControl, FormGroup} from 'react-bootstrap';

export class SelectCity extends React.Component {
    constructor(props){
        super(props);
        // "useless constructor" why? J'utilise les props?
    }
    render() {
        return (
            <Form style={{marginBottom:"5px"}}>
                <Form.Control onChange={this.props.selectCity} as="select" value={this.props.city}>
                    <option>Paris</option>
                    <option>Issy-les-Moulineaux</option>
                    <option>Trappes</option>
                    <option>Fontainebleau</option>
                    <option>Meudon</option>
                    <option>Montreuil</option>
                    <option>Noisiel</option>
                    <option>Noisy-le-Sec</option>
                    <option>Rambouillet</option>
                    <option>Antony</option>
                    <option>Montigny-le-Bretonneux</option>
                    <option>Arcueil</option>
                    <option>Ivry-sur-Seine</option>
                    <option>Gif-sur-Yvette</option>
                    <option>Les Clayes-sous-Bois</option>
                    <option>Pantin</option>
                    <option>Noisiel</option>
                    <option>Fontenay-sous-Bois</option>
                    <option>Bondy</option>
                    <option>Massy</option>
                    <option>Les Lilas</option>
                    <option>Bagnolet</option>
                    <option>Longjumeau</option>
                    <option>Bagneux</option>
                    <option>GUYANCOURT</option>
                    <option>Châtenay-Malabry</option>
                    <option>Orsay</option>
                    <option>Pontoise</option>
                    <option>Sceaux</option>
                    <option>ELANCOURT</option>
                    <option>Saint-Denis</option>
                    <option>Tremblay-en-France</option>
                    <option>Boulogne-Billancourt</option>
                    <option>Valmondois</option>
                    <option>Le Kremlin-Bicêtre</option>
                    <option>PLAISIR</option>
                    <option>Goussainville</option>
                    <option>Romainville</option>
                </Form.Control>
            </Form>
        )
    }
}