var React = require("react");

module.exports = React.createClass({
	render: function(){
		return (
			<nav>
				<div className="nav-wrapper">
					<a href="#" className="brand-logo right">Boggy Creek</a>
					<ul id="nav-mobile" className="left hide-on-med-and-down">
						<li><a href="#data-viz">Data</a></li>
						<li><a href="#dyk">Did You Know?</a></li>
						<li><a href="#social-feed">Social</a></li>
					</ul>
				</div>
			</nav>
		);
	}
});