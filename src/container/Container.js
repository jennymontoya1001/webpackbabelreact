import React, { Component } from 'react';
import Component1 from '../components/Component1';
import Component2 from '../components/Component2';
import styled from 'styled-components';

const DivStyle = styled.div`
    background-color: beige;
    border: 1px solid purple;
`
export default class Container extends Component {
    render() {
        return (
            <DivStyle>
                <h1>Soy el contenedor</h1>
                <Component1/>
                <Component2/>
                <h2>Hola Prueba</h2>
            </DivStyle>
        )
    }
}
