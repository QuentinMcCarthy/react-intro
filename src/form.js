import React, { Component } from "react";

class Form extends Component {
	constructor(props){
		super(props);

		// These functions are bound to the constructor because they change the state
		this.onSubmit = this.onSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	render(){
		return (
			<div>
				<form onSubmit={this.onSubmit}>
					<input type="text" ref="newItem" className="form-control" id="listInput" value={this.props.editingValue} onChange={this.onChange} />
					<button type="submit" className="btn btn-primary w-100 mt-2">{this.props.buttonText}</button>
				</form>
			</div>
		)
	}

	// When the form is submitted i.e. a "submit" type is clicked within the form element.
	onSubmit(e){
		e.preventDefault();

		// trim() deletes whitespace from around the value.
		var newItem = this.refs.newItem.value.trim();

		if(!newItem){
			alert(`Please enter an item`);
			return;
		}

		// this.props.editID === 0
		if(!this.props.editID){
			this.props.addNew(newItem);
		} else {
			let updatingItem = {
				id: this.props.editID,
				item: newItem
			}

			this.props.updateItem(updatingItem);
		}

		this.refs.newItem.value = ``;
	}

	onChange(e){
		this.props.changeText(e.target.value);
	}
}

export default Form;
