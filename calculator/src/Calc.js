import './Calc.scss';
import { Component } from 'react';
const base64string = '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';
const sound = new Audio("data:audio/wav;base64," + base64string),
      initial = '0',
      isOp = /[*/+-]/,   
      multipleOps = /(\*|\+|\/|-)?(\.|\-)?\d+/g;  

class Calc extends Component {
	constructor() {
		super();
		
		this.state = {
			display: initial,
			formula: ""
		}
	}
	
	playSound = () => {
		sound.currentTime = 0;
		sound.play();
	}
	handleLimit = () => {
		const value = this.state.display;
		this.setState({
			display: 'ZU VIELE ZAHLEN'
		});
		setTimeout(() => this.setState({display: value}), 2000);
	}
	handleNumbers = (e) => {
		this.playSound();
		if (this.state.display.length >= 10) {
			this.handleLimit();
		}
		if (this.state.display.length < 10) {
			this.state.display === '0' || isOp.test(this.state.display) ? 
			this.setState({
				display: e.target.value,
				formula: [...this.state.formula, e.target.value]
			}) : 
			this.setState({
				display: [...this.state.display, e.target.value],
				formula: [...this.state.formula, e.target.value]
			});
		}
				
	}
	handleClear = () => {
		this.playSound();
		this.setState({
			display: initial,
			formula: ""
		});
	}
	handleOps = (e) => {
		this.playSound();
		// new equation is being started from old result
		if (this.state.formula.includes("=")) {
			const result = this.state.formula.slice(-1); 
			this.setState({
				display: e.target.value,
				formula: result.concat(e.target.value)
			});
		}
		// checking if prv and current both -
		else if (e.target.value === '-' && this.state.display === '-') {
			this.setState({
				display: "+",
				formula: [...this.state.formula.slice(0, -1), "+"]
			});
		}
		// normal operator operations being done
		else {
			this.setState({
				display: e.target.value,
				formula: [...this.state.formula, e.target.value]
			});
		} 
	}
	handleEqual = (e) => {
		this.playSound();
		// checking if string has multiple consecutive ops then we keep the last one
		var tempResult = eval(this.state.formula.join("").match(multipleOps));
		const expression = tempResult.join("");
		const result = parseFloat(eval(expression).toFixed(5));
		const fullResult = [e.target.value, result];
		this.setState({
			display: result,
			formula: this.state.formula.concat(fullResult)
		});
	}
	handleDecimal = (e) => {
		this.playSound();
		// no decimal point in our number so add one
		if (!this.state.display.includes(".")) {
			this.setState({
				display: [...this.state.display, e.target.value],
				formula: [...this.state.formula, e.target.value]
			});
		} 	
	}
	
	render() {
		return(
			<div>
				<div className="calc">
					<div className="formula-screen">{this.state.formula}</div>
					<div id="display" className="output-screen">{this.state.display}</div>
					<Buttons 
						numbers={this.handleNumbers}
						clear={this.handleClear}
						ops={this.handleOps}
						equals={this.handleEqual}
						dec={this.handleDecimal}/>
				</div>
			</div>
			
		);
	}
}

class Buttons extends Component {
	render() {
		return (
			<div>
				<button id="divide" value="/" onClick={this.props.ops}>/</button>
				<button id="clear" value="AC" onClick={this.props.clear}>AC</button>
				<button>?</button>
				<button id="multiply" value="*" onClick={this.props.ops}>x</button>
				<button id="seven" value="7" onClick={this.props.numbers}>7</button>
				<button id="eight" value="8" onClick={this.props.numbers}>8</button> 
				<button id="nine" value="9" onClick={this.props.numbers}>9</button>
				<button id="subtract" value="-" onClick={this.props.ops}>-</button>
				<button id="four" value="4" onClick={this.props.numbers}>4</button>
				<button id="five" value="5" onClick={this.props.numbers}>5</button>
				<button id="six" value="6" onClick={this.props.numbers}>6</button>
				<button id="add" value="+" onClick={this.props.ops}>+</button>
				<button id="one" value="1" onClick={this.props.numbers}>1</button>
				<button id="two" value="2" onClick={this.props.numbers}>2</button>
				<button id="three" value="3" onClick={this.props.numbers}>3</button>
				<button id="decimal" value="." onClick={this.props.dec}>.</button>
				<button id="zero" value="0" onClick={this.props.numbers}>0</button>
				<button id="equals" value="=" onClick={this.props.equals}>=</button>
			</div>	
		);
		
	}
}

export default Calc;
