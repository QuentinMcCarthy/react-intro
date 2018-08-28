import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Form from "./form";

class App extends Component {
	render(){
		return (
			<div>
				<div className="jumbotron text-center">
					<h1 className="display-4">Shopping List</h1>

					<ShoppingList />

					<hr />

					<Form />
				</div>
			</div>
		)
	}
}

class ShoppingList extends Component {
	render(){
		return (
			<div>
				<ul className="list-group">
					<li className="list-group-item">Lorem Ipsum</li>
					<li className="list-group-item">Dolor sit</li>
					<li className="list-group-item">Amet consectetur</li>
					<li className="list-group-item">Adipisciing</li>
					<li className="list-group-item">Elit</li>
				</ul>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
