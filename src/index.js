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
					name: `Felines`
				},
				{
					id: 2,
					name: `Vulpines`
				},
				{
					id: 3,
					name: `Cervines`
				}
			],
			text: `Hello World!`,
			textType: `h3`,
			jumboClass: `jumbotron text-center`,
			darkTheme: false
		}

		this.changeText = this.changeText.bind(this);
		this.changeText2 = this.changeText2.bind(this);
		this.addNewItemToList = this.addNewItemToList.bind(this);
	}

	render(){
		return (
			<div>
				<div className={this.state.jumboClass}>
					<h1 className="display-4">Shopping List</h1>
					<h3 className={this.state.textType}>{this.state.text}</h3>

					<ShoppingList list={this.state.list} />

					<hr />

					<Form addNew={this.addNewItemToList}/>

					<button onClick={this.changeText}>Button</button>
					<button onClick={this.changeText2}>Other button</button>
				</div>
			</div>
		)
	}

	changeText(e){
		e.preventDefault();

		// alert("h3 will be changed.");

		temp++;

		this.setState({
			text: `Button has been clicked ${temp} times`,
			textType: `h3`,
			darkTheme: !this.state.darkTheme
		});

		if(!this.state.darkTheme){
			this.setState({ jumboClass: `jumbotron text-center jumboDark` });
		} else{
			this.setState({ jumboClass: `jumbotron text-center` });
		}
	}

	changeText2(e){
		e.preventDefault();

		temp2++;

		this.setState({
			text: `Other button has been clicked ${temp2} times`,
			textType: `h4`,
			darkTheme: !this.state.darkTheme
		});

		if(!this.state.darkTheme){
			this.setState({ jumboClass: `jumbotron text-center jumboDark` });
		} else{
			this.setState({ jumboClass: `jumbotron text-center` });
		}
	}

	addNewItemToList(itemName){
		var newItem = {
			id: this.state.list.length + 1,
			name: itemName
		};

		this.setState({ list: this.state.list.concat(newItem) });
	}
}

class ShoppingList extends Component {
	render(){
		return (
			<div>
				<ul className="list-group">
					{
						this.props.list.map(item => {
							return (
								<li key={item.id} item={item} className="list-group-item">{item.name}
									<span className="controls">
										<span className="edit" onClick={this.editItem.bind(this, item)}>Edit</span> - <span className="delete" onClick={this.deleteItem.bind(this, item)}>Delete</span>
										{/*<button onClick={this.editItem}>Edit</button>*/}
										{/*<button onClick={this.deleteItem}>Delete</button>*/}
									</span>
								</li>
							)
						})
					}
				</ul>
			</div>
		)
	}

	editItem(item){
		console.log(`Editing: `);
		console.log(item);
	}

	deleteItem(item){
		console.log(`Deleting: `);
		console.log(item);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
