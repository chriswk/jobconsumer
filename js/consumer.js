$(document).ready(function () {
	$.ajax({
		url:"http://frozen-falls-4637.herokuapp.com/",
		dataType:"jsonp"
	}).done(function (data) {
		$.each(data.ads, function (idx, ad) {
			var holder = $("<div></div>").text("idx: " +idx + "\tid: " +ad.id + "\ttitle:" +ad.title);
			$("#jsonPAdholder").append(holder);
		});
	});
	$.ajax({
		url:"http://frozen-falls-4637.herokuapp.com/",
		dataType:"json"
	}).done(function (data) {
		$.each(data.ads, function (idx, ad) {
			var holder = $("<div></div>").text("idx: " +idx + "\tid: " +ad.id + "\ttitle:" +ad.title);
			$("#jsonAdholder").append(holder);
		})
	})
})