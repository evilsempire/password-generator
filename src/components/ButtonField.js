import React from "react";
import { Button, Icon, SaveIcon } from '@material-ui/core';


class ButtonField extends React.Component {
    render() {
        return (
            <div className="generate">
                <Button variant="outlined" onClick={() => this.props.calculate()}>Generate</Button>
            </div>
        )
    }
}

export default ButtonField;