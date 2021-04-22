var player1 = localStorage.getItem("player1-name");
var player2 = localStorage.getItem("player2-name");

player1_score = 0;
player2_score = 0;

document.getElementById("player_1name").innerHTML = player1 + " : -";
document.getElementById("player_2name").innerHTML = player2 + " : -";

document.getElementById("p1score").innerHTML = player1_score;
document.getElementById("p2score").innerHTML = player2_score;

document.getElementById("question_turn").innerHTML = "Question Turn : " + player1 ;
document.getElementById("ANSWER_turn").innerHTML = "Answer Turn : " + player2 ;

