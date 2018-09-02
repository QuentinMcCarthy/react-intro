import React, { Component } from "react";

class Form extends Component {
	constructor(props){
		super(props);

		this.onSubmit = this.onSubmit.bind(this);
	}

	render(){
		return (
			<div>
				<form onSubmit={this.onSubmit}>
					<input type="text" ref="newItem" className="form-control text-center" id="listInput" />
					<button type="submit" className="btn btn-primary w-100 mt-2">Add New Item</button>
				</form>
			</div>
		)
	}

	onSubmit(e){
		e.preventDefault();

		var newItem = this.refs.newItem.value.trim();

		if(!newItem){
			alert(`Please enter an item`);
			return;
		}

		// console.log(newItem);

		this.props.addNew(newItem);

		this.refs.newItem.value = ``;
	}
}

export default Form;
