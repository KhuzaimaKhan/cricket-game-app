var wickets = 0;
var balls = 0;
var runs = 0;
var overs = 1;
var overBalls = 0;
var InThisOver = [];
var inning = 1;
var target = 0;
var needToWin = 0;
var remainingBalls = 0;
var remainingWickets = 0;


var msgBox = document.getElementById('msgBox');
var scoreBox = document.getElementById('scoreBox');
var scoreMsgBox = document.getElementById('scoreMsg');

function play() {
    var bating = Math.floor(Math.random() * 7);



    if (bating == 5) {
        bating = 0;
        wickets = wickets + 1;
        var score = "W";
        var scoreMsg = "Its a Wickets";
    }


    else if (bating == 4) {
        score = 4;
        scoreMsg = "Its an Amaizing 4";
    }

    else if (bating == 6) {
        score = 6;
        scoreMsg = "Its a Super 6";
    }

    else {
        score = bating;
        scoreMsg = bating + " Runs";

    }

    if (balls == 6) {
        overBalls = 0;
        overs = overs + 1;
        InThisOver = [];
    }

    runs = runs + bating;
    InThisOver.push(score);
    balls = balls + 1;
    overBalls = overBalls + 1;
    needToWin = target - runs;
    remainingBalls = 12 - balls;
    remainingWickets = 2 - wickets;

    if (inning == 1) {
        var scoreCard = runs + "/" + wickets + " \n Balls:" + overBalls + " Overs:\n " + overs +
            " InThisOver: " + InThisOver;
        var msg = "Ist Inning, Team A Batting";
    }
    else {
        var scoreCard = runs + "/" + wickets + "  Balls: " + overBalls + " Overs: " + overs +
            " In this Over: " + InThisOver + " Balls remaining: " + remainingBalls +
            " Need to Win: " + needToWin;
        var msg = "2nd Inning Team B Batting" + " Target: " + target;
    }

    if (inning == 1 && (balls == 12 || wickets == 2)) {
        target = runs + 1;
        msg = "1st Inning finished, Target is: " + target;
        inning = inning + 1;
        balls = 0;
        runs = 0;
        wickets = 0;
        overBalls = 0;
        overs = 1;
        InThisOver = [];
    }


    if (inning == 2 && (balls == 12 || wickets == 2 || runs > target)) {

        if (runs > target) {
            msg = "Team B Won By " + remainingWickets + " wickets";


        }
        else {
            msg = "Team A Won By " + needToWin + " runs";

        }
        document.getElementById("playBtn").disabled = true;

    }



    console.log(msg);
    console.log(scoreMsg)
    console.log(scoreCard);
    msgBox.innerHTML = msg;
    scoreBox.innerHTML = scoreCard;
    scoreMsgBox.innerHTML = scoreMsg;
}
function replay() {
    location.reload();
}

