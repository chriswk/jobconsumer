function parseData(placeholder, data) {
	$.each(data.ads, function (idx, ad) {
		var holder = $("<div></div>").text("idx: " +idx + "\tid: " +ad.id + "\ttitle:" +ad.title);
		$(placeholder).append(holder);
	});	
}

function getNode(node, name) {
	console.log(node.getElementsByTagName(name)[0].textContent);
	return node.getElementsByTagName(name)[0].textContent;
}
$(document).ready(function () {
	$.ajax({
		url:"http://frozen-falls-4637.herokuapp.com/json",
		dataType:"jsonp"
	}).done(function (data) {
		parseData("#jsonPAdholder", data);
	});
	$.ajax({
		url:"http://frozen-falls-4637.herokuapp.com/json",
		dataType:"json"
	}).done(function (data) {
		parseData("#jsonAdholder", data);
	});
	
	$.ajax({
		url:"http://frozen-falls-4637.herokuapp.com/xml",
		dataType:"xml"
	}).done(function (data) {
		$.each(data.getElementsByTagName("response"), function (idx, el) {
			var holder = $("<div></div>").text("idx: " +idx +"\tid: " +getNode(el, "id") +"\ttitle: " +getNode(el, "title"));
			$("#xmlAdHolder").append(holder);
		})
	});
})