import React from 'react';
import {Form, FormControl, FormGroup} from 'react-bootstrap';

export class SelectYear extends React.Component {
    constructor(props){
        super(props);
        // "useless constructor" why? J'utilise les props?
    }
    render() {
        return (
            <Form style={{marginBottom:"5px"}}>
                <Form.Control onChange={this.props.selectYear} as="select" value={this.props.year}>
                    <option>2021</option>
                    <option>2022</option>
                    <option>2023</option>
                    <option>2024</option>
                    <option>2025</option>
                    <option>2026</option>
                    <option>2027</option>
                </Form.Control>
            </Form>
        )
    }
}