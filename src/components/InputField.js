import React from "react";
import TextField from '@material-ui/core/TextField';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';


class InputField extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            passwordLength: "",
            error: ""
        }
    }

    setInput = (e) => {

        let passwordLength = e.target.value;
        let error;
        if(!Number(passwordLength)){
            error = "Should be number."
        }else if(passwordLength > 50){
            error = "Password length cannot be exceed than 50."
        }

        this.setState({ passwordLength, error  }); 
        this.props.setValue(passwordLength, false)
    }

    render() {
        let { passwordLength,error   } = this.state;
        return (
            <form  autoComplete="off">
                <TextField color={!error ? "primary" : "secondary"} type="Number" value={passwordLength} onChange={(e) => this.setInput(e)} fullWidth id="outlined-basic" label="Password Length" variant="outlined" />
                <FormHelperText id="component-error-text" className="error">{error}</FormHelperText>
               
            </form>
        )
    }
}

export default InputField;