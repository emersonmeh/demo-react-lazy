import React from 'react';
import Button from '@material-ui/core/Button';


export const BButton = (props) => {
    return (
        <Button id='botao' variant="contained" color="primary" onClick={props.onClick} >
            {props.text}
        </Button>
    )
}

export default BButton;