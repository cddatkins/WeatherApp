import React from 'react';
import {InputGroup, Button, FormControl} from 'react-bootstrap';

export default function WeatherInput(props) {

    const weatherInputField = React.createRef();
    function handleButtonClick(e) {
        const {value} =  weatherInputField.current;
        console.log(value);
        props.onClick(value);
    }

    return (
        <div>
            <InputGroup className="mb-3">
                <FormControl placeholder="Enter a City or ZipCode" ref={weatherInputField} />
                <InputGroup.Append>
                <Button variant="outline-secondary" onClick={handleButtonClick}>Search</Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
    );
}