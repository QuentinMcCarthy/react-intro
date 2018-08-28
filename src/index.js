import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

class App extends Component {
	render(){
		return (
			<div>
				<div className="jumbotron text-center">
					<h1 className="display-4">Shopping List</h1>

					<ul className="list-group">
						<li className="list-group-item">Lorem Ipsum</li>
						<li className="list-group-item">Dolor sit</li>
						<li className="list-group-item">Amet consectetur</li>
						<li className="list-group-item">Adipisciing</li>
						<li className="list-group-item">Elit</li>
					</ul>

					<hr />

					<form>
						<input type="text" className="form-control" id="listInput" />
						<button type="submit" className="btn btn-primary w-100 mt-2">Add New Item</button>
					</form>
				</div>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
