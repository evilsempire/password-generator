import React from "react";
import { Container, Card, CardContent } from '@material-ui/core';

import InputField from "./InputField";
import ButtonField from "./ButtonField";
import Logic from "./Logic";

class Wrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            passwordLength: 0,
            isTriggered: false
        }
    }

    render() {
        // return <Container maxWidth="sm">
        //     <InputField setValue={(passwordLength,isTriggered) => this.setState({passwordLength,isTriggered})}/>
        //     {this.state.isTriggered ? <Logic passwordLength={this.state.passwordLength}/>: null}
        //     <ButtonField calculate={(isTriggered) => this.setState({isTriggered: !isTriggered})}/>
        // </Container>
        return (
            <Card variant="outlined">
                <CardContent>
                    
                    <Container maxWidth="sm">
                        <InputField setValue={(passwordLength, isTriggered) => this.setState({ passwordLength, isTriggered })} />
                        {this.state.isTriggered ? <Logic passwordLength={this.state.passwordLength} /> : null}
                        <ButtonField calculate={(isTriggered) => this.setState({ isTriggered: !isTriggered })} />
                    </Container>
                </CardContent>
            </Card>
        )
    }
}

export default Wrapper;