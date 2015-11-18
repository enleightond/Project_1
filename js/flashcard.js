$(document).ready(function() {

$('#userChoice').hide();
$('.arrDiff').hide();
$('.objDiff').hide();
$('.funDiff').hide();
$('.calDiff').hide();

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

$(".chooseArrDiff").hover(function(event){
	event.preventDefault();
	$('.arrDiff').show();	
},
	function(event) {
	$('.arrDiff').hide();
});

$(".chooseObjDiff").hover(function(event){
	event.preventDefault();
	$('.objDiff').show();
}, function(event) {
	$('.objDiff').hide();	
});

$(".chooseFunDiff").hover(function(event){
	event.preventDefault();
	$('.funDiff').show();
},
	function(event) {
	$('.funDiff').hide();	
});

$(".chooseCalDiff").hover(function(event){
	event.preventDefault();
	$('.calDiff').show();
},	
	function(event) {
	$('.calDiff').hide();	
});


// var inputName= document.getElementById("name");
// localStorage.setItem("name", inputName.value);

// var inputEmail= document.getElementById("email");
// localStorage.setItem("email", inputEmail.value);

});