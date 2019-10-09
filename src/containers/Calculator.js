import React, {Component} from 'react';
import './Calculator.css';

class Calculator extends Component{
    constructor(props){
        super(props)

        this.state = {
            num1: 0,
            num2: 0,
            num3: 0,
            check1: false,
            check2: false,
            check3: false,
            result: 0,
            error: null,
        }
    }

    handleCheck = (e) => {
        if (e.target.name === "check1") {
            this.setState({ check1: e.target.checked })
        } else if (e.target.name === "check2") {
            this.setState({ check2: e.target.checked })
        } else {
            this.setState({ check3: e.target.checked })
        }   
    }

    handleChange = (e) => {
        if (e.target.name === "num1"){
            this.setState({ num1: e.target.value })
        } else if (e.target.name === "num2") {
            this.setState({ num2: e.target.value })
        } else {
            this.setState({ num3: e.target.value })
        }
    }

    operator = (e) => {
        if (e.target.name === "plus"){
            if (this.state.check1 === true && this.state.check2 === true && this.state.check3 === true) {
                this.setState({
                    result: parseInt(this.state.num1) + parseInt(this.state.num2) + parseInt(this.state.num3),
                    error: null
                })
            }
            else if (this.state.check1 === true && this.state.check2 === true) {
                this.setState({
                    result: parseInt(this.state.num1) + parseInt(this.state.num2),
                    error: null
                })
            }
            else if (this.state.check1 === true && this.state.check3 === true){
                this.setState({
                    result: parseInt(this.state.num1) + parseInt(this.state.num3),
                    error: null
                })
            }
            else if (this.state.check2 === true && this.state.check3 === true) {
                this.setState({
                    result: parseInt(this.state.num2) + parseInt(this.state.num3),
                    error: null
                })
            } else {
                this.setState({
                    result: 0,
                    error: 'Please check 2 or more checklist!'
                })
            }
        } else if (e.target.name === "minus") {
            if (this.state.check1 === true && this.state.check2 === true && this.state.check3 === true) {
                this.setState({
                    result: parseInt(this.state.num1) - parseInt(this.state.num2) - parseInt(this.state.num3),
                    error: null
                })
            }
            else if (this.state.check1 === true && this.state.check2 === true) {
                this.setState({
                    result: parseInt(this.state.num1) - parseInt(this.state.num2),
                    error: null
                })
            }
            else if (this.state.check1 === true && this.state.check3 === true){
                this.setState({
                    result: parseInt(this.state.num1) - parseInt(this.state.num3),
                    error: null
                })
            }
            else if (this.state.check2 === true && this.state.check3 === true) {
                this.setState({
                    result: parseInt(this.state.num2) - parseInt(this.state.num3),
                    error: null
                })
            } else {
                this.setState({
                    result: 0,
                    error: 'Please check 2 or more checklist!'
                })
            }
        } else if (e.target.name === "multiple"){
            if (this.state.check1 === true && this.state.check2 === true && this.state.check3 === true) {
                this.setState({
                    result: parseInt(this.state.num1) * parseInt(this.state.num2) * parseInt(this.state.num3),
                    error: null
                })
            }
            else if (this.state.check1 === true && this.state.check2 === true) {
                this.setState({
                    result: parseInt(this.state.num1) * parseInt(this.state.num2),
                    error: null
                })
            }
            else if (this.state.check1 === true && this.state.check3 === true){
                this.setState({
                    result: parseInt(this.state.num1) * parseInt(this.state.num3),
                    error: null
                })
            }
            else if (this.state.check2 === true && this.state.check3 === true) {
                this.setState({
                    result: parseInt(this.state.num2) * parseInt(this.state.num3),
                    error: null
                })
            } else {
                this.setState({
                    result: 0,
                    error: 'Please check 2 or more checklist!'
                })
            }
        } else {
            if (this.state.check1 === true && this.state.check2 === true && this.state.check3 === true) {
                this.setState({
                    result: parseInt(this.state.num1) / parseInt(this.state.num2) / parseInt(this.state.num3),
                    error: null
                })
            }
            else if (this.state.check1 === true && this.state.check2 === true) {
                this.setState({
                    result: parseInt(this.state.num1) / parseInt(this.state.num2),
                    error: null
                })
            }
            else if (this.state.check1 === true && this.state.check3 === true){
                this.setState({
                    result: parseInt(this.state.num1) / parseInt(this.state.num3),
                    error: null
                })
            }
            else if (this.state.check2 === true && this.state.check3 === true) {
                this.setState({
                    result: parseInt(this.state.num2) / parseInt(this.state.num3),
                    error: null
                })
            } else {
                this.setState({
                    result: 0,
                    error: 'Please check 2 or more checklist!'
                })
            }
        }
    }

    render() {
        return (
            <div className="container">
                <div className="input-container">
                    <div className="input">
                        <input className="input-field" name="num1" onChange={this.handleChange} />
                        <input className="check-box" type="checkbox" name="check1" onChange={this.handleCheck}/>
                    </div>
                    <div className="input">
                        <input className="input-field" name="num2" onChange={this.handleChange} />
                        <input className="check-box" type="checkbox" name="check2" onChange={this.handleCheck}/>
                    </div>
                    <div className="input">
                        <input className="input-field" name="num3" onChange={this.handleChange} />
                        <input className="check-box" type="checkbox" name="check3" onChange={this.handleCheck}/>
                    </div>
                </div>
                <div className="operator-container">
                    <button className="operator" name="plus" onClick={this.operator}>+</button>
                    <button className="operator" name="minus" onClick={this.operator}>-</button>
                    <button className="operator" name="multiple" onClick={this.operator}>x</button>
                    <button className="operator" name="divide" onClick={this.operator}>/</button>
                </div>
                <div className="line-container">
                    <hr className="line"/>
                </div>
                <div className="result">
                    <p className="text-result">Hasil: </p>
                    <p className="value-result">{this.state.result}</p>
                </div>
                <div>
                    <p className="warning">{this.state.error}</p>
                </div>
            </div>
        )
    }
}

export default Calculator;