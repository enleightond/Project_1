$(document).ready(function() {
	$('#userChoice').hide();
	$('.level').hide();
	$('#practicePage').hide();


//////////////// START BUTTON FUNCTIONALITY

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

////////////////  MENU AND SUBMENU SELECTION 

	$("#study, #studyMenu").hover(function(event){
		event.preventDefault();
		$('#studyMenu').show();	
	},
		function(event) {
		$('#studyMenu').hide();
	});

	$("#practice, #practiceMenu").hover(function(event){
		event.preventDefault();
		$('#practiceMenu').show();	
	},
		function(event) {
		$('#practiceMenu').hide();
	});

	$("#test, #testMenu").hover(function(event){
		event.preventDefault();
		$('#testMenu').show();	
	},
		function(event) {
		$('#testMenu').hide();
	});

	$(".subMenu").hover(function(event){
		$(event.target).parent().find('.level').show();	
	},
		function(event) {
		$('.level').hide();
	});
////////////////////////////////////////////////
//
//
// BRINGING UP FLASHCARD WITH USER SELECTIONS
//
//                                             
////////////////////////////////////////////////

	$(".level").on("click", function(event){
		$("#userChoice").hide();
		var type = $(event.target).data("type");
		var level = $(event.target).data("level");
		var cardDiv = makeFlashCard(menuOptions[type][level].title, menuOptions[type][level].description);
		$('#flashCard').append(cardDiv);
	})
	
	var menuOptions = {
		study :	{

			array:{
				easy:{
					title:"Easy Array",
					description:"Arrays look like this []"
				},
				medium: {
					title:"Medium Array",
					description:"Arrays look like this :)"
				},
				hard: {
					title:"Hard Array",
					description:"Arrays look like this ..|.,"
				}
			},
			object:{
				easy:{
					title:"Easy Object",
					description:"Objects look like this {}"
				},
				medium:{
					title:"Medium Object",
					description:"Objects look like this :)"
				},
				hard:{
					title:"Hard Object",
					description:"Objects look like this ..|.,"
				}
			},
			func:{
				easy:{
					title:"Easy Function",
					description:"Function look like this ()"
				},
				medium:{
					title:"Medium Function",
					description:"Function look like this :)"
				},
				hard:{
					title:"Hard Function",
					description:"Function look like this ..|.,"
				}
			},
			callback:{
				easy: {
					title:"Easy Callback",
					description:"Callbacks look like this {([])}"
				},
				medium: {
					title:"Medium Callback",
					description:"Callback look like this :)"
				},
				hard:{
					title:"Hard Callback",
					description:"Callbacks look like this ..|.,"
				}
			}
		},

		practice : {
			array:{
				easy:{
					title:"pEasy Array",
					description:"Arrays look like this []"
				},
				medium: {
					title:"pMedium Array",
					description:"Arrays look like this :)"
				},
				hard: {
					title:"pHard Array",
					description:"Arrays look like this ..|.,"
				}
			},
			objects:{
				easy:{
					title:"Easy Object",
					description:"Objects look like this {}"
				},
				medium:{
					title:"Medium Object",
					description:"Objects look like this :)"
				},
				hard:{
					title:"Hard Object",
					description:"Objects look like this ..|.,"
				}
			},
			funktion:{
				easy:{
					title:"Easy Function",
					description:"Function look like this ()"
				},
				medium:{
					title:"Medium Function",
					description:"Function look like this :)"
				},
				hard:{
					title:"Hard Function",
					description:"Function look like this ..|.,"
				}
			},
			callbacks:{
				easy: {
					title:"Easy Callback",
					description:"Callbacks look like this {([])}"
				},
				medium: {
					title:"Medium Callback",
					description:"Callback look like this :)"
				},
				hard:{
					title:"Hard Callback",
					description:"Callbacks look like this ..|.,"
				}
			}
		},

		test : {
			array:{
				easy:{
					title:"tEasy Array",
					description:"Arrays look like this []"
				},
				medium: {
					title:"tMedium Array",
					description:"Arrays look like this :)"
				},
				hard: {
					title:"tHard Array",
					description:"Arrays look like this ..|.,"
				}
			},
			objects:{
				easy:{
					title:"Easy Object",
					description:"Objects look like this {}"
				},
				medium:{
					title:"Medium Object",
					description:"Objects look like this :)"
				},
				hard:{
					title:"Hard Object",
					description:"Objects look like this ..|.,"
				}
			},
			funktion:{
				easy:{
					title:"Easy Function",
					description:"Function look like this ()"
				},
				medium:{
					title:"Medium Function",
					description:"Function look like this :)"
				},
				hard:{
					title:"Hard Function",
					description:"Function look like this ..|.,"
				}
			},
			callbacks:{
				easy: {
					title:"Easy Callback",
					description:"Callbacks look like this {([])}"
				},
				medium: {
					title:"Medium Callback",
					description:"Callback look like this :)"
				},
				hard:{
					title:"Hard Callback",
					description:"Callbacks look like this ..|.,"
				}
			}
		}
	}

	function makeFlashCard(titleContent, descriptionContent){
		var card = $('<div>')
		card.addClass('card col-md-4 col-md-offset-4')
		
		var title = $('<h4>')
		title.html(titleContent)

		var description = $('<p>')
		description.html(descriptionContent)

		card.append(title)
		card.append(description)

		return card;

	}

});