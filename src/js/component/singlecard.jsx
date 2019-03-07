import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function SingleCard(props) {
	return (
		<div className="card w-50">
			<img
				className="card-img-top"
				src="https://via.placeholder.com/100"
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">
					Full Name: {props.name} <br />
					Gender: {props.gender}
				</p>
				<Link to={"/details/" + (props.camel + 1)}>
					<a href="#" className="btn btn-primary">
						Details
					</a>
				</Link>
			</div>
		</div>
	);
}

export default SingleCard;

SingleCard.propTypes = {
	name: PropTypes.string,
	gender: PropTypes.string,
	camel: PropTypes.string
};
