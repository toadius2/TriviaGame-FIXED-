$(document).ready(function () {

	var question1 = {
		text: "What is the largest volcano in the solar system",
		answer: ["<div class='text-center btn btn-info btn-block' data-correct='true'>Olympus Mons</div>",
			"<div class='text-center btn btn-info btn-block'>Sakurajima</div>",
			"<div class='text-center btn btn-info btn-block'>Mauna Loa</div>",
			"<div class='text-center btn btn-info btn-block'>Tamu Massif</div>"],
		correct: false,
	}

	var question2 = {
		text: "What is the name of the deepest area of the Pacific Ocean?",
		answer: ["<div class='text-center btn btn-info btn-block' data-correct='true'>The Marianas Trench</div>",
			"<div class='text-center btn btn-info btn-block'>The Tonga Trench</div>",
			"<div class='text-center btn btn-info btn-block'>The South Sandwich Trench</div>",
			"<div class='text-center btn btn-info btn-block'>The Diamantina Trench</div>"],
		correct: false,
	}


	var question3 = {
		text: "Who is the best selling rapper of all time?",
		answer: ["<div class='text-center btn btn-info btn-block' data-correct='true'>Eminem</div>",
			"<div class='text-center btn btn-info btn-block'>50 Cent</div>",
			"<div class='text-center btn btn-info btn-block'>Tupac</div>",
			"<div class='text-center btn btn-info btn-block'>Dr. Dre</div>"],
		correct: false,
	}

	var question4 = {
		text: "What is the name of Rockstar's most recent game, which has received almost universal praise by critics?</div>",
		answer: ["<div class='text-center btn btn-info btn-block' data-correct='true'>Red Dead Redemption 2</div>",
				"<div class='text-center btn btn-info btn-block'>GTA V</div>",
			"<div class='text-center btn btn-info btn-block'>L.A. Noire</div>",
			"<div class='text-center btn btn-info btn-block'>Red Dead Redemption. (You are legit stupid if you pick this choice.)</div>"],
		correct: false,
	}

	var question5 = {
		text: "What is the name of the major video game industry convention held annually at the LA Convention Center?</div>",
		answer: ["<div class='text-center btn btn-info btn-block' data-correct='true'>E3</div>",
			"<div class='text-center btn btn-info btn-block'>E4</div>",
			"<div class='text-center btn btn-info btn-block'>PAX</div>",
			"<div class='text-center btn btn-info btn-block'>E for All</div>"],
		correct: false,
	}

	var question6 = {
		text: "What is the name of the largest anime convention held in the United States every year?</div>",
		answer: ["<div class='text-center btn btn-info btn-block' data-correct='true'>Anime Expo</div>",
			"<div class='text-center btn btn-info btn-block'>Anime Matsuri</div>",
			"<div class='text-center btn btn-info btn-block'>Sakura-Con</div>",
			"<div class='text-center btn btn-info btn-block'>Otakon</div>"],
		correct: false,
	}

	var question7 = {
		text: "In Call of Duty: Modern Warfare, what was the maximum prestige level a player could attain?</div>",
		answer: ["<div class='text-center btn btn-info btn-block' data-correct='true'>10</div>",
			"<div class='text-center btn btn-info btn-block'>5</div>",
			"<div class='text-center btn btn-info btn-block'>15</div>",
			"<div class='text-center btn btn-info btn-block'>20</div>"],
		correct: false,
	}

	var question8 = {
		text: "How many Donkey Kong Country titles were released for Super Nintendo?</div>",
		answer: ["<div class='text-center btn btn-info btn-block' data-correct='true'>3</div>",
			"<div class='text-center btn btn-info btn-block'>1</div>",
			"<div class='text-center btn btn-info btn-block'>2</div>",
			"<div class='text-center btn btn-info btn-block'>4</div>"],
		correct: false,
	}


	var question9 = {
		text: "What is the name of the 'self-healing' concept Lamborghini car from 2017?",
		answer: ["<div class='text-center btn btn-info btn-block' data-correct='true'>The Terzo Millenio</div>",
			"<div class='text-center btn btn-info btn-block'>The 350 GTV</div>",
			"<div class='text-center btn btn-info btn-block'>The Asterion</div>",
			"<div class='text-center btn btn-info btn-block'>The Egoista</div>"],
		correct: false,
	}

	var question10 = {
		text: "Where is that $100,000?",
		answer: ["<div class='text-center btn btn-info btn-block' data-correct='true'>All of the above</div>",
			"<div class='text-center btn btn-info btn-block'>At the other end of the rainbow</div>",
			"<div class='text-center btn btn-info btn-block'>What $100,000?</div>",
			"<div class='text-center btn btn-info btn-block'>Just give me your bank account information, so it can be wired over!</div>"],
		correct: false,
	}

	var questionBank = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];
	var bankLength = questionBank.length;
	var count = 0;
	var intervalID;
	var time = 15;


	$("#start").click(function () {

		createQuestions(questionBank[count]);
		$("#splashScreen").css('display', 'none');
		$("#questions").css('display', 'inherit');

	});



	function createQuestions(array) {


		randomizeAnswers();
		intervalID = setInterval(timer, 1000);
		$("alarm").css('background', '#FFF');
		$("#text").html("<div><h4>" + array.text);

		for (var i = 0; i < array.answer.length; i++) {
			$("#answers").append(array.answer[i]);
		};

		correct();
	}


	function nextQuestion() {
		createQuestions(questionBank[count]);
	}


	function correct() {
		$("#answers div").click(function () {

			var questCorrect = $(this).data("correct");

			if (questCorrect === true) {
				$(this).css('background', '#5CB85C');
				questionBank[count].correct = "Okay, okay. I see...I bet you just googled this one, didn't you?";
				count++;
				clearInterval(intervalID);
				time = 15;
				setTimeout(function () {
					checkGameEnd();
				}, 300);

			} else {
				$(this).css('background', '#D9534F');
				questionBank[count].correct = "Sorrrrry! But we were looking for the CORRECT answer here, not the INCORRECT one.";
				count++;
				clearInterval(intervalID);
				time = 15;
				setTimeout(function () {
					checkGameEnd();
				}, 300);
			}

		});
	}


	function checkGameEnd() {
		if (count === questionBank.length) {
			$("#questions").css('display', 'none');
			createResults();
			$("#gameOver").css('display', 'inherit');

		} else {
			$("#answers").empty();
			nextQuestion();
		}
	}


	function createResults() {

		for (var i = 0; i < bankLength; i++) {

			$("#results").append("<div>Question #" + [i + 1] + ': ' + questionBank[i].correct + "</div>");
		}
	}


	$("#restart").click(function () {

		count = 0;
		$("#results").empty();

		for (var i = 0; i < bankLength; i++) {
			questionBank[i].correct = false;
		}
		$("#gameOver").css('display', 'none');
		$("#splashScreen").css('display', 'inherit');

	});


	function timer() {
		$("#timer h1").html("" + time);
		$("#timer").css('visibility', 'inherit');

		if (time === 0) {

			$("#alarm").css('background', '#D9534F');
			clearInterval(intervalID);
			time = 15;
			questionBank[count].correct = "HAHAHAHA! Wow, you suck at this game!";
			count++;
			setTimeout(function () {
				checkGameEnd();
			}, 600);
		}
		time--;
	};

	function randomizeAnswers() {
		for (var i = 0; i < questionBank.length; i++) {
			questionBank[i].answer.sort(function (a, b) { return 0.5 - Math.random() });
		}
	}
});