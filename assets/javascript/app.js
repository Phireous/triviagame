

	var userAnswers = [];

	var time;

	var correct;

	var wrong;

	var timeOut;

	var intervalId;

	var clockRunning = false;

	function startGame() {
		userAnswers = [];
		correct = 0;
		wrong = 0;
		timeOut = 0;

		var q = $(".questions");

		var a = $(".answers");

		var t = $(".timer");

		var question1 = $("<p>").text("Insert question 1 here");

		var answers1 = {answer1: $("<button class='wrong'>").html("wrong1"),
		answer2: $("<button class='correct'>").html("correct"),
		answer3: $("<button class='wrong'>").html("wrong2"),
		answer4: $("<button class='wrong'>").html("wrong3")
		}

		var question2 = $("<p>").text("Insert question 2 here");

		var answers2 = {answer1: $("<button class='wrong'>").html("wrong1"),
		answer2: $("<button class='wrong'>").html("wrong"),
		answer3: $("<button class='correct'>").html("correct"),
		answer4: $("<button class='wrong'>").html("wrong3")
		}

		var question3 = $("<p>").text("Insert question 3 here");

		var answers3 = {answer1: $("<button class='correct'>").html("correct"),
		answer2: $("<button class='wrong'>").html("wrong"),
		answer3: $("<button class='wrong'>").html("wrong2"),
		answer4: $("<button class='wrong'>").html("wrong3")
		}

		var question4 = $("<p>").text("Insert question 4 here");

		var answers4 = {answer1: $("<button class='wrong'>").html("wrong1"),
		answer2: $("<button class='wrong'>").html("wrong"),
		answer3: $("<button class='wrong'>").html("wrong2"),
		answer4: $("<button class='correct'>").html("correct")
		}

		var question5 = $("<p>").text("Insert question 5 here");

		var answers5 = {answer1: $("<button class='wrong'>").html("wrong1"),
		answer2: $("<button class='correct'>").html("correct"),
		answer3: $("<button class='wrong'>").html("wrong2"),
		answer4: $("<button class='wrong'>").html("wrong3")
		}

		var question6 = $("<p>").text("Insert question 6 here");

		var answers6 = {answer1: $("<button class='correct'>").html("correct"),
		answer2: $("<button class='wrong'>").html("wrong"),
		answer3: $("<button class='wrong'>").html("wrong2"),
		answer4: $("<button class='wrong'>").html("wrong3")
		}

		var question7 = $("<p>").text("Insert question 7 here");

		var answers7 = {answer1: $("<button class='wrong'>").html("wrong1"),
		answer2: $("<button class='wrong'>").html("wrong"),
		answer3: $("<button class='wrong'>").html("wrong2"),
		answer4: $("<button class='correct'>").html("correct")
		}

		
		function q1(){
			time = 5;
			t.html(time);
			q.html(question1);
			a.empty();
			a.append(answers1.answer1, " ", answers1.answer2, " ", answers1.answer3, " ", answers1.answer4);

			function countDown() {
				time--;
				t.html(time);
				if (time < 1) {
					stopTime();
					userAnswers.push("time out");
					q1t();
				}
			};

			function stopTime() {
				clearInterval(intervalId);
				clockRunning = false;
			};


			if (!clockRunning) {
        		intervalId = setInterval(countDown, 1000);
        		clockRunning = true;
        	}
			
			$(".correct").on("click", function() {
				userAnswers.push("correct");
				stopTime();
				q1c();
			});

			$(".wrong").on("click", function(){
				userAnswers.push("wrong");
				stopTime();
				q1w();
			})
			
		};

		function q1c() {
			q.html("CORRECT");
			t.empty();
			a.empty();
			setTimeout(q2, 3000);
		}

		function q1w() {
			q.html("INCORRECT THE ANSWER IS: ");
			t.empty();
			a.empty();
			setTimeout(q2, 3000);
		}

		function q1t() {
			q.html("TIMES UP THE ANSWER IS: ");
			t.empty();
			a.empty();
			setTimeout(q2, 3000);
		}

		function q2(){
			time = 5;
			t.html(time);
			q.html(question2);
			a.empty();
			a.append(answers2.answer1, " ", answers2.answer2, " ", answers2.answer3, " ", answers2.answer4);

			function countDown() {
				time--;
				t.html(time);
				if (time < 1) {
					stopTime();
					userAnswers.push("time out");
					q2t();
				}
			};

			function stopTime() {
				clearInterval(intervalId);
				clockRunning = false;
			};


			if (!clockRunning) {
        		intervalId = setInterval(countDown, 1000);
        		clockRunning = true;
        	}

			$(".correct").on("click", function() {
				userAnswers.push("correct");
				stopTime();
				q2c();
			});

			$(".wrong").on("click", function(){
				userAnswers.push("wrong");
				stopTime();
				q2w();
			})
		};

		function q2c() {
			q.html("CORRECT");
			t.empty();
			a.empty();
			setTimeout(q3, 3000);
		}

		function q2w() {
			q.html("INCORRECT THE ANSWER IS: ");
			t.empty();
			a.empty();
			setTimeout(q3, 3000);
		}

		function q2t() {
			q.html("TIMES UP THE ANSWER IS: ");
			t.empty();
			a.empty();
			setTimeout(q3, 3000);
		}


		function q3(){
			time = 5;
			t.html(time);
			q.html(question3);
			a.empty();
			a.append(answers3.answer1, " ", answers3.answer2, " ", answers3.answer3, " ", answers3.answer4);

			function countDown() {
				time--;
				t.html(time);
				if (time < 1) {
					stopTime();
					userAnswers.push("time out");
					q3t();
				}
			};

			function stopTime() {
				clearInterval(intervalId);
				clockRunning = false;
			};


			if (!clockRunning) {
        		intervalId = setInterval(countDown, 1000);
        		clockRunning = true;
        	}

			$(".correct").on("click", function() {
				userAnswers.push("correct");
				stopTime();
				q3c();
			});

			$(".wrong").on("click", function(){
				userAnswers.push("wrong");
				stopTime();
				q3w();
			})
		};

		function q3c() {
			q.html("CORRECT");
			t.empty();
			a.empty();
			setTimeout(q4, 3000);
		}

		function q3w() {
			q.html("INCORRECT THE ANSWER IS: ");
			t.empty();
			a.empty();
			setTimeout(q4, 3000);
		}

		function q3t() {
			q.html("TIMES UP THE ANSWER IS: ");
			t.empty();
			a.empty();
			setTimeout(q4, 3000);
		}


		function q4(){
			time = 5;
			t.html(time);
			q.html(question4);
			a.empty();
			a.append(answers4.answer1, " ", answers4.answer2, " ", answers4.answer3, " ", answers4.answer4);

			function countDown() {
				time--;
				t.html(time);
				if (time < 1) {
					stopTime();
					userAnswers.push("time out");
					q4t();
				}
			};

			function stopTime() {
				clearInterval(intervalId);
				clockRunning = false;
			};


			if (!clockRunning) {
        		intervalId = setInterval(countDown, 1000);
        		clockRunning = true;
        	}

			$(".correct").on("click", function() {
				userAnswers.push("correct");
				stopTime();
				q4c();
			});

			$(".wrong").on("click", function(){
				userAnswers.push("wrong");
				stopTime();
				q4w();
			})
		};

		function q4c() {
			q.html("CORRECT");
			t.empty();
			a.empty();
			setTimeout(q5, 3000);
		}

		function q4w() {
			q.html("INCORRECT THE ANSWER IS: ");
			t.empty();
			a.empty();
			setTimeout(q5, 3000);
		}

		function q4t() {
			q.html("TIMES UP THE ANSWER IS: ");
			t.empty();
			a.empty();
			setTimeout(q5, 3000);
		}


		function q5(){
			time = 5;
			t.html(time);
			q.html(question5);
			a.empty();
			a.append(answers5.answer1, " ", answers5.answer2, " ", answers5.answer3, " ", answers5.answer4);

			function countDown() {
				time--;
				t.html(time);
				if (time < 1) {
					stopTime();
					userAnswers.push("time out");
					q5t();
				}
			};

			function stopTime() {
				clearInterval(intervalId);
				clockRunning = false;
			};


			if (!clockRunning) {
        		intervalId = setInterval(countDown, 1000);
        		clockRunning = true;
        	}

			$(".correct").on("click", function() {
				userAnswers.push("correct");
				stopTime();
				q5c();
			});

			$(".wrong").on("click", function(){
				userAnswers.push("wrong");
				stopTime();
				q5w();
			})
		};

		function q5c() {
			q.html("CORRECT");
			t.empty();
			a.empty();
			setTimeout(q6, 3000);
		}

		function q5w() {
			q.html("INCORRECT THE ANSWER IS: ");
			t.empty();
			a.empty();
			setTimeout(q6, 3000);
		}

		function q5t() {
			q.html("TIMES UP THE ANSWER IS: ");
			t.empty();
			a.empty();
			setTimeout(q6, 3000);
		}


		function q6(){
			time = 5;
			t.html(time);
			q.html(question6);
			a.empty();
			a.append(answers6.answer1, " ", answers6.answer2, " ", answers6.answer3, " ", answers6.answer4);

			function countDown() {
				time--;
				t.html(time);
				if (time < 1) {
					stopTime();
					userAnswers.push("time out");
					q6t();
				}
			};

			function stopTime() {
				clearInterval(intervalId);
				clockRunning = false;
			};


			if (!clockRunning) {
        		intervalId = setInterval(countDown, 1000);
        		clockRunning = true;
        	}

			$(".correct").on("click", function() {
				userAnswers.push("correct");
				stopTime();
				q6c();
			});

			$(".wrong").on("click", function(){
				userAnswers.push("wrong");
				stopTime();
				q6w();
			})
		};

		function q6c() {
			q.html("CORRECT");
			t.empty();
			a.empty();
			setTimeout(q7, 3000);
		}

		function q6w() {
			q.html("INCORRECT THE ANSWER IS: ");
			t.empty();
			a.empty();
			setTimeout(q7, 3000);
		}

		function q6t() {
			q.html("TIMES UP THE ANSWER IS: ");
			t.empty();
			a.empty();
			setTimeout(q7, 3000);
		}


		function q7(){
			time = 5;
			t.html(time);
			q.html(question7);
			a.empty();
			a.append(answers7.answer1, " ", answers7.answer2, " ", answers7.answer3, " ", answers7.answer4);

			function countDown() {
				time--;
				t.html(time);
				if (time < 1) {
					stopTime();
					userAnswers.push("time out");
					q7t();
				}
			};

			function stopTime() {
				clearInterval(intervalId);
				clockRunning = false;
			};


			if (!clockRunning) {
        		intervalId = setInterval(countDown, 1000);
        		clockRunning = true;
        	}

			$(".correct").on("click", function() {
				userAnswers.push("correct");
				stopTime();
				q7c();
			});

			$(".wrong").on("click", function(){
				userAnswers.push("wrong");
				stopTime();
				q7w();
			})
		};

		function q7c() {
			q.html("CORRECT");
			t.empty();
			a.empty();
			setTimeout(tally, 3000);
		}

		function q7w() {
			q.html("INCORRECT THE ANSWER IS: ");
			t.empty();
			a.empty();
			setTimeout(tally, 3000);
		}

		function q7t() {
			q.html("TIMES UP THE ANSWER IS: ");
			t.empty();
			a.empty();
			setTimeout(tally, 3000);
		}





		q1();
	}

	function tally(){
		console.log(userAnswers)
		for (var i = 0; i < userAnswers.length; i++) {
			if (userAnswers[i] == "correct") {
				correct ++;
			}
			if (userAnswers[i] == "wrong"){
				wrong++;
			};
			if (userAnswers[i] == "time out") {
				timeOut++;
			}
		};
		$(".answers").html("<button class='restart'>Restart</button>")
		$(".restart").on("click", startGame)
		$(".questions").html("Correct: " + correct + "<br> Wrong: " + wrong + "<br> Timed out: " + timeOut);

	}


	startGame();
