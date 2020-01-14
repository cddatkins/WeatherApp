import React, {useState} from 'react';
import {InputGroup, Button, FormControl} from 'react-bootstrap';

export default function WeatherInput() {
    const [input, setInput] = useState("");

    function handleOnChange(e)
    {
        setInput(e.value);
    }

    return (
        <div>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <Button variant="outline-secondary">Button</Button>
                </InputGroup.Prepend>
                <FormControl aria-describedby="basic-addon1" />
            </InputGroup>
        </div>
        
    );
}