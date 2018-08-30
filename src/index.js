import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Form from "./form";

class App extends Component {
	constructor(){
		super();

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
			]
		}
	}

	render(){
		return (
			<div>
				<div className="jumbotron text-center">
					<h1 className="display-4">Shopping List</h1>

					<ShoppingList list={this.state.list} />

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
