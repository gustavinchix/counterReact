import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import PropType from "prop-types";
import "bootstrap";
import "../styles/index.scss";

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
					{hours}
				</span>

				<span
					class="badge badge-secondary"
					style={{ marginLeft: "20px" }}>
					{minutes}
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

setInterval(function() {
	if (seconds <= 58) {
		seconds += 1;
	} else {
		seconds = 0;
		minutes += 1;
	}
	if (minutes >= 60) {
		hours += 1;
		minutes = 0;
	}

	ReactDOM.render(<Home />, document.querySelector("#app"));
}, 1000);
