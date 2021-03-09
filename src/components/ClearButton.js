import React, { Component } from "react";
import "./ClearButton.scss";

export class ClearButton extends Component {
	render() {
		return (
			<div className="clear-btn" onClick={() => this.props.handleClear()}>
				<span>C</span>lear
			</div>
		);
	}
}

export default ClearButton;
