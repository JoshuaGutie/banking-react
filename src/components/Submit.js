import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class Submit extends Component {
    render() {
        return (
            <div className="App">
            <header className="App-header">
              <h1>Banking App</h1>
            </header>
      
            <form className="input-amount">
            <TextField label="Amount" variant="outlined" />
            <Button variant='outlined' size='small'>Click me</Button>
            </form>
          </div>
        );
    }
}

export default Submit;
