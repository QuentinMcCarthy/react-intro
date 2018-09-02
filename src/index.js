import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Form from "./form";

// Variables for the theme changing buttons
var temp = 0;
var temp2 = 0;

class App extends Component {
	constructor(props){
		super(props);

		// This is a state. States should contain things that are going to change
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
			darkTheme: false,
			editID: 0,
			buttonText: `Add New Item`,
			editingValue: ``
		}

		// These functions are bound to the constructor because they change the state
		this.changeText = this.changeText.bind(this);
		this.changeText2 = this.changeText2.bind(this);
		this.addNewItemToList = this.addNewItemToList.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
		this.handleChangeText = this.handleChangeText.bind(this);
	}

	// Rendering JSX
	render(){
		return (
			<div>
				<div className={this.state.jumboClass}>
					<h1 className="display-4">Shopping List</h1>
					<h3 className={this.state.textType}>{this.state.text}</h3>

					<ShoppingList
						list={this.state.list}
						editItem={this.handleEdit}
						deleteItem={this.handleDelete}
					/>

					<hr />

					<Form
						{...this.state}
						addNew={this.addNewItemToList}
						updateItem={this.handleUpdate}
						changeText={this.handleChangeText}
					/>

					<button onClick={this.changeText}>Button</button>
					<button onClick={this.changeText2}>Other button</button>
				</div>
			</div>
		)
	}

	// Functions defined below
	changeText(e){
		e.preventDefault();

		// alert("h3 will be changed.");

		temp++;

		// Changing the state involves changing the state object.
		// This changes things in the JSX, if defined.
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

		// Changing the state involves changing the state object.
		// This changes things in the JSX, if defined.
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

	// Adding a new item to the list
	addNewItemToList(itemName){
		// The new item should have the same syntax as the others.
		// The "id" of the item should be unique, so define it as the list's length + 1
		// This way of defining the id will not work when deletion comes into play,
		// as if an item is deleted, the list length + 1 may no longer be unique.
		var newItem = {
			id: this.state.list.length + 1,
			name: itemName
		};

		// "concat" adds items to the end of the list.
		this.setState({ list: this.state.list.concat(newItem) });
	}

	// Handling editing of the listi tem.
	handleEdit(itemToEdit){
		this.setState({
			editID: itemToEdit.id,
			buttonText: `Edit Item`,
			editingValue: itemToEdit.name
		});
	}

	handleDelete(itemToDelete){
		console.log(itemToDelete);
	}

	handleUpdate(updatedItem){
		console.log(updatedItem);
	}

	handleChangeText(inputValue){
		this.setState({
			editingValue: inputValue
		});
	}
}

// Separate class, defined in the "App" class' JSX
class ShoppingList extends Component {
	render(){
		return (
			<div>
				<ul className="list-group">
					{
						this.props.list.map(item => {
							return (
								<li key={item.id} item={item} className="list-group-item text-left">
									{item.name}
									<span className="controls">
										<span className="edit" onClick={this.edit.bind(this, item)}>Edit</span> - <span className="delete" onClick={this.delete.bind(this, item)}>Delete</span>
										{/*<button onClick={this.edit}>Edit</button>*/}
										{/*<button onClick={this.delete}>Delete</button>*/}
									</span>
								</li>
							);
						})
					}
				</ul>
			</div>
		)
	}

	// Editing of the item calls a handler for the editing, defined in App
	edit(item){
		this.props.editItem(item);
	}

	// Deletion of the item calls a handler for the deletion, defined in App
	delete(item){
		this.props.deleteItem(item);
	}
}

// Render the JSX on the HTML element "root" defined in ./public/index.html
ReactDOM.render(<App />, document.getElementById("root"));
