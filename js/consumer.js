$(document).ready(function () {
	$.ajax({
		url:"http://frozen-falls-4637.herokuapp.com/",
		dataType:"jsonp"
	}).done(function (data) {
		$.each(data.ads, function (idx, ad) {
			var holder = $("<div></div>").text("idx: " +idx + "id: " +ad.id + " title:" +ad.title);
			$("#adholder").append(holder);
		});
	});
})