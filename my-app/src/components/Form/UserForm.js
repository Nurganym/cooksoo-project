import React, { Component } from 'react'
import FormDetail from './FormDetail';
import Confirm from './Confirm';
import Success from './Success';

export class UserForm extends Component {
    // eslint-disable-next-line
    state = {
        step:1,
        name: '',
        number: '',
        street: '',
        house: '',
        flat: '',
        porch: '',
        floor: '',
        comments: ''
    }
    // Proceed to next step

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }
    // Go back to prev step

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    // Handle fields change
    handleChange = input => e => {
        this.setState({[input] : e.target.value})
    }
 render() {
     const { step } = this.state;
     const { name, number, street, house, flat, porch, floor, 
        comments } = this.state;
        const values = { name, number, street, house, flat, porch, floor, 
            comments };
            // eslint-disable-next-line
     switch(step) {
        case 1:
            return (
                <FormDetail 
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
                />
            )
            // eslint-disable-next-line
            case 2: 
            return (
                <Confirm 
                nextStep={this.nextStep}
                prevStep={this.nextStep}
                values={values}
                />
            ) 
            // eslint-disable-next-line 
            case 3: 
            return (
                <Success />
            )  
     }
 }
} 

export default UserForm