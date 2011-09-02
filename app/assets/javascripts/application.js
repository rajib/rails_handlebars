// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// = require jquery
// = require jquery_ujs
// = require_tree .

// var source   = $("#some-template").html();
// var template = Handlebars.compile(source);
// var data = { users: [
//     {username: "alan", firstName: "Alan", lastName: "Johnson", email: "alan@test.com" },
//     {username: "allison", firstName: "Allison", lastName: "House", email: "allison@test.com" },
//     {username: "ryan", firstName: "Ryan", lastName: "Carson", email: "ryan@test.com" }
//   ]};
// $("#content-placeholder").html(template(data));


$(document).ready(function() {
	$('#listRefresh').click(function() {
		var source = $("#listTemplate").html();
		var template = Handlebars.compile(source);
	  $.ajax({
		   type: "GET",
		   url: "/projects",
		   dataType: "json",
		   success: function(json){
				 $("#listPlaceholder").html(template(json));
				console.log(template(json));
		   }
		 });
	});
});

