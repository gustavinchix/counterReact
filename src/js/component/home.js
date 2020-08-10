import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import PropType from "prop-types";

var seconds = 0;
var minutes = 0;
var hours = 0;

export function Home(props) {
	document.body.style = "background: black;"; //Cambia el color de fondo a negro
	return (
		<div>
			<div style={{ fontSize: "6em" }}>
				<span
					class="badge badge-secondary"
					style={{ marginLeft: "20px" }}>
					<FontAwesomeIcon icon={faClock} />
				</span>

				<span
					class="badge badge-secondary"
					style={{ marginLeft: "20px" }}>
					{props.hours}
				</span>

				<span
					class="badge badge-secondary"
					style={{ marginLeft: "20px" }}>
					{props.minutes}
				</span>

				<span
					class="badge badge-secondary"
					style={{ marginLeft: "20px" }}>
					{seconds}
				</span>
			</div>
		</div>
	);
}

/*Home.proptypes = {
	seconds: PropType.int,
	minutes: PropType.int,
	hours: PropType.int
};*/
