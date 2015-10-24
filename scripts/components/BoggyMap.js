var React = require("react");

module.exports = React.createClass({
	render: function(){
		return (
			<article>
				<section>
					<header>
						<h3>Meet Your Creek</h3>
					</header>
				</section>
				<iframe src="https://www.google.com/maps/d/embed?mid=zjNSnUNrmqjc.kf_ZG7dYGCek" width="100%" height="480"></iframe>
			</article>
		);
	}
});