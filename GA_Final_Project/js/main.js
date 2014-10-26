$( document ).ready(function() {
	console.log( "ready!" );
	handleSubmit();
});

function handleSubmit(){
	$( "#submit" ).click(function() {
		$("#result").html("");
		var restName = $("#restName").val();
		var zipCode = $("#zipCode").val();
		getData(restName, zipCode);
	});
}

function getData(name, zip){
	var requestURL = 'http://dinr-api.mckenneth.com/api/restaurants?dba='+name+'&zip_code='+zip;
    $.ajax({
        type: "GET",
        url: requestURL, // the URL of our request that's set as a variable
        success: function(data) {
        	console.log(data);
        	if(data.response.data.length>0){
        		displayRestaurants(data);
        	} else {
        		displaySorry(); 
        	}
        	
        },
        error: function(){
        	alert("sorry, something went wrong"); 
        }
    })
};

function displayRestaurants(json){
	var response = json["response"];
	var data = response["data"];
	for (var i=0; i < data.length; i++) {
		var name = data[i]["dba"];
		var currentGrade = data[i]["current_grade"];
		var street = data[i]["street_address"];
		insertHTML(name, street, currentGrade);
	}
}

function displaySorry() {
	$('#result').append("<div class='sorryDiv'>Sorry, no restaurants match that name. Please check your spelling and zip code and try again.</div>")
}

function insertHTML(name, street, grade){
	var html = '<div class="rest-container"><div class="rest"><p class="rest-name">'+name+'</p>'+'<p class="rest-street">'+street+'</p><p class="rest-grade">'+grade+'</p>'+'</div></div>';
	$("#result").append(html);
}

