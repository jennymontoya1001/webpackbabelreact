import React, { Component } from 'react';
import H2Styled, {DivStyled} from '../styled/StyledComponent2';

export default class Component2 extends Component {
    render() {
        return (
            <DivStyled>
                <H2Styled>Soy el componente 2</H2Styled>
            </DivStyled>
        )
    }
}
