
// Assignment:
// Create a list of all of the donations to Kurt Schaefer's Campaign
// (CITIZENS TO ELECT KURT SCHAEFER ATTORNEY GENERAL)


$(document).ready(function() {

	// 1.
	// When the page is loaded,
	// call the loadData() function.

loadData();

});

function loadData() {

	// 2.
	// Write an AJAX call here to load your data.
	// Then PASS the data to writeTable();

	$.getJSON("js/donations_over_5k.json", function(data) {
		writeTable(data);}
		)
}


function writeTable(data) {

	// 3.
	// Make a list of every donation made to "CITIZENS TO ELECT KURT SCHAEFER ATTORNEY GENERAL"
	// Do this by looping through the data and writing a new table row (<tr></tr>) for every donation.
	// Each row should contain of three columns (<td></td>): 
	// - Contribution Date
	// - Contributon Information
	// - Amount

//trying to fix contribution dates to propublica style
// 	var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// blog.posts().all(function(posts){
//   for(var i = 0; i < posts.length; i++){
//     jQuery('.'+MYWRAPPER_CLASS).append(function(){
//       var dt = new Date(posts[i].date);
//       return (posts[i].thumbnail) ? '<div class="coll"><div class="date"><span>'+months[dt.getMonth()]+dt.getDate()+'</span></div><a class="lastpost_title" href="'+posts[i].url+'"><h4>'+posts[i].title+'</h4></a><div class="blog-post"><p>'+posts[i].excerpt+'<p/></div></a><div class="link-read"><a href="'+posts[i].url+'">Read More</a></div>' : '<a href="'+posts[i].url+'"><h4>'+posts[i].title+'</h4></div>';

//     });
//   }
// });


	$.each(data, function(i, item) {

		if (item["Committee"] === "CITIZENS TO ELECT KURT SCHAEFER ATTORNEY GENERAL") {
			$("table.donations tbody").append(
				"<tr>"+
					"<td class='date'>"+item["Contribution Date"]+"</td>"+
	                "<td>"+item["Contribution Information"]+"</td>"+
	                "<td class='amount'>"+item["Amount"]+"</td>"+
                "</tr>"
			);
		}
	});
}

