'use strict';
var React = require("react");
var ReactDOM = require("react-dom");
var navBarEl = document.getElementById("header");
var mapEl = document.getElementById("map");
//var dataVizEl = document.getElementById("data-viz");
var didYouKnowEl = document.getElementById("dyk");
var socialFeedEl = document.getElementById("social-feed");
var whatToDoEl = document.getElementById("what-to-do");
var callToActionEl = document.getElementById("cta");
var footerEl = document.getElementById("footer");
var NavBar = require("./components/NavBar");
var BoggyMap = require("./components/BoggyMap");
var CallToAction = require("./components/CallToAction");
//var DataVisualization = require("./components/DataVisualization");
var DidYouKnow = require("./components/DidYouKnow");
var SocialFeed = require("./components/SocialFeed");
var WhatToDo = require("./components/WhatToDo");
var Footer = require("./components/Footer");

ReactDOM.render(<NavBar />,navBarEl);
ReactDOM.render(<BoggyMap />, mapEl);
// ReactDOM.render(<DataVisualization />, didYouKnowEl);
ReactDOM.render(<DidYouKnow />, socialFeedEl);
ReactDOM.render(<WhatToDo />, callToActionEl);
ReactDOM.render(<SocialFeed />, whatToDoEl);
//ReactDOM.render(<CallToAction />, );
ReactDOM.render(<Footer />,footerEl);


