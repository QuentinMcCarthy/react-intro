import React, { Component } from "react";

class Form extends Component {
	render(){
		return (
			<div>
				<form>
					<input type="text" className="form-control" id="listInput" />
					<button type="submit" className="btn btn-primary w-100 mt-2">Add New Item</button>
				</form>
			</div>
		)
	}
}

export default Form;
