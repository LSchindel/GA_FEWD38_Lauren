$( document ).ready(function(){
	displayVals();
});


function displayVals() {
  var singleValues = $( "#single" ).val();

  var multipleValues = $( "#multiple" ).val() || [];
  
  $( "p" ).html( "<b>Single:</b> " + singleValues +
    " <b>Multiple:</b> " + multipleValues.join( ", " ) );
}