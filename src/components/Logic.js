import React from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';

import Success from "./Success";

class Logic extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            passwordString: this.randomstring(props.passwordLength),
            copied: false
        }
    }

    randomstring = (L) => {
        var s = '';
        var randomchar = function () {
            var n = Math.floor(Math.random() * 62);
            if (n < 10) return n; //1-10
            if (n < 36) return String.fromCharCode(n + 55); //A-Z
            return String.fromCharCode(n + 61); //a-z
        }
        while (s.length < L) s += randomchar();
        return s;
    }

    render() {

        const { passwordString } = this.state;

        return (<div>
            <CopyToClipboard className="copy" text={passwordString}
                onCopy={() => this.setState({ copied: true })}>
                <div>
                <span>{passwordString} </span>
                <FileCopyOutlinedIcon className="copy-icon" />
                </div>
            </CopyToClipboard>
            {this.state.copied ? <Success /> : null}
        </div>)
    }
}

export default Logic