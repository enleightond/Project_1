$(document).ready(function() {
	$('#userChoice').hide();
	$('.arrDiff').hide();
	$('.objDiff').hide();
	$('.funDiff').hide();
	$('.calDiff').hide();
	$('#practicePage').hide();

// START BUTTON FUNCTIONALITY

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

// NOTES
 
// var choices = function(); need to select the subject, and difficulty.
// userImput === array value --> push into Header/description

// DOM manipulation: need to create or append to html for the subject Divs and Options Divs

// need to clean up the code below, and loop thru for all buttons with same functionality.
// Must return userInput to be directed to new page. 

// MENU CHOICES REVEAL

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
	}, 
		function(event) {
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

//////////////////////////////////////////////
//
//
// BRINGING UP FLASHCARD WITH USER SELECTIONS
//
//
//////////////////////////////////////////////

	$(".array").on("click", function(){
		$("#userChoice").hide();
		var cardDiv = makeFlashCard()
		$('#flashCard').append(cardDiv)
	})


	var selectOption = function() {

	}

	var study = {
		array:{
			easy: "statement",
			medium: "something",
			hard: "something else"
		},
		objects:{
			easy: "",
			medium: "",
			hard: ""
		},
		funktion:{
			easy: "",
			medium: "",
			hard: ""
		},
		callbacks:{
			easy: "",
			medium: "",
			hard: ""
		}

	};

	function makeFlashCard (){
		var card = $('<div>')
		card.addClass('card')
		card.addClass('col-md-5')


		var title = $('<h4>')
		title.html('Array')
		var description = $('<p>')
		description.html('Arrays are great!')

		card.append(title)
		card.append(description)

		return card;

	}






});