var React = require("react");
var $ = require("jquery");

module.exports = React.createClass({
	componentDidMount: function(){
		console.log("ran?");
		$.get("https://api.twitter.com/1.1/search/tweets.json?q=%23ATXboggycreek").done((data,err)=>{
			console.log(data,err);
		});
	},
	render: function(){
		return (
			<article>
				social butterfly!
			</article>
		);
	}
});