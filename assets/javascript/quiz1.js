var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
var questions = [
    //Words questions
    [ "What do these ASL letters spell out?", "Cat", "Cow", "Cop", "A" ],
	[ "What do these ASL letters spell out?", "Top", "Mop", "Run", "C" ],
	[ "What do these ASL letters spell out?", "Pool", "Soup", "Food", "C" ],
	[ "What do these ASL letters spell out?", "Vote", "Jump", "Jeep", "B" ],
    [ "What do these ASL letters spell out?", "Vote", "Vans", "Toes", "A" ],
    [ "What do these ASL letters spell out?", "Jazz", "Quiz", "Lake", "B" ],
    [ "What do these ASL letters spell out?", "Wave", "Body", "Sway", "C" ],
    [ "What do these ASL letters spell out?", "Warm", "Water", "Wasp", "B" ],
    [ "What do these ASL letters spell out?", "Job", "Jog", "Jaw", "B" ],
    [ "What do these ASL letters spell out?", "Macaroni", "Machine", "Mountain", "C" ],
    //Numbers questions
    [ "What number is this sign?", "9", "3", "6", "A" ],
    [ "What number is this sign?", "0", "10", "9", "A" ],
    [ "What number is this sign?", "3", "7", "6", "C" ],
    [ "What number is this sign?", "3", "8", "2", "B" ],
    [ "What number is this sign?", "3", "8", "7", "C" ],
];

function _(x){
	return document.getElementById(x);
}
function renderQuestion(){
	test = _("test");
	if(pos >= questions.length){
		test.innerHTML = "<h2>You got "+correct+" out of "+questions.length+" questions correct</h2>";
		_("test_status").innerHTML = "Test Completed";
		pos = 0;
		correct = 0;
		return false;
	}
	_("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
	question = questions[pos][0];
	chA = questions[pos][1];
	chB = questions[pos][2];
	chC = questions[pos][3];
	test.innerHTML = "<h3>"+question+"</h3>";
	test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br><br>";
	test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}
function checkAnswer(){
	choices = document.getElementsByName("choices");
	for(var i=0; i<choices.length; i++){
		if(choices[i].checked){
			choice = choices[i].value;
		}
	}
	if(choice == questions[pos][4]){
		correct++;
	}
	pos++;
	renderQuestion();
}
window.addEventListener("load", renderQuestion, false);

/*-------- hambuger nav -------------*/
function openNav() {
    document.getElementById("mySidenav").style.display = "block";
}

function closeNav() {
    document.getElementById("mySidenav").style.display = "none";
}
$('#menu').slicknav({
		prependTo:'#demo1'
});




