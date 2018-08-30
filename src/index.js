import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Form from "./form";

var temp = 0;
var temp2 = 0;

class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			list: [
				{
					id: 1,
					name: "Felines"
				},
				{
					id: 2,
					name: "Vulpines"
				},
				{
					id: 3,
					name: "Cervines"
				}
			],
			text: "Hello World!",
			textType: "h3"
		}

		this.changeText = this.changeText.bind(this);
		this.changeText2 = this.changeText2.bind(this);
	}

	render(){
		return (
			<div>
				<div className="jumbotron text-center">
					<h1 className="display-4">Shopping List</h1>
					<h3 className={this.state.textType}>{this.state.text}</h3>

					<ShoppingList list={this.state.list} />

					<hr />

					<Form />

					<button onClick={this.changeText}>Button</button>
					<button onClick={this.changeText2}>Other button</button>
				</div>
			</div>
		)
	}

	changeText(e){
		e.preventDefault();

		// alert("h3 will be changed.");

		temp++

		this.setState({
			text: "Button has been clicked "+temp+" times",
			textType: "h3"
		});
	}

	changeText2(e){
		e.preventDefault();

		temp2++

		this.setState({
			text: "Other button has been clicked "+temp2+" times",
			textType: "h4"
		});
	}
}

class ShoppingList extends Component {
	render(){
		return (
			<div>
				<ul className="list-group">
					{
						this.props.list.map(item => {
							return <li key={item.id} item={item} className="list-group-item">{item.name}</li>
						})
					}
				</ul>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
