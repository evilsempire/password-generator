import React from "react";
import Alert from '@material-ui/lab/Alert'
class Success extends React.Component{
    render(){
        return <Alert severity="success" color="info">
        Copied to Clipboard!
      </Alert>
    }
}

export default Success;