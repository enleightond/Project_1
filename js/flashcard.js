$(document).ready(function() {

$('#userChoice').hide();
//onClickEvent(){}

$("#startBtn").on('click', function(event){
	event.preventDefault();
var userName = $("#name").val(),
    userEmail = $("#email").val();
	
	localStorage.setItem("name",userName);    
	localStorage.setItem("email",userEmail);

	$('#userInfo').hide();

});

$("#startBtn").on('click', function(event){
	event.preventDefault();
	$('#userChoice').show();
	
});


// var inputName= document.getElementById("name");
// localStorage.setItem("name", inputName.value);

// var inputEmail= document.getElementById("email");
// localStorage.setItem("email", inputEmail.value);

});