var quizs = false;
var secs = 1000 * 40;
var tot = 0;
var startQ = false;
var resetIF = false;

//get values 
function check(){
    var radios = document.getElementsByClassName("ans");
    for (var i = 0, len = radios.length; i < len; i++) {
        if (radios[i].checked) {
            return true;
        }
    }
    return false;
}

radioButtonR(true);

//radio button checkup
function getVal(qName) {
    var radiosNum = document.getElementsByName(qName);
    for (var i = 0, length = radiosNum.length; i < length; i++) {
        if (radiosNum[i].checked) {
            var answerValue = Number(radiosNum[i].value);
        }
    }if (isNaN(answerValue)) {
        answerValue = 0;
    }
    return answerValue;
}
//marking answers
function submitq() {
    if (startQ == false) {//start button not pressed warning
        window.alert("Quiz didnt Started")
    }else if (check() == false) {//not select answers warning
        window.alert("please answer all questions");
    }else {
        clearTimeout(timer);
        if (getVal("q1") === 1) {
            document.getElementById("c_ans1").style.backgroundColor = "#bef786";
            tot += 2;
        } else {
            document.getElementById("c_ans1").style.backgroundColor = "#f7b5f2";
            tot -= 1;
        }
        //answer2
        if (getVal("q2") === 1) {
            document.getElementById("c_ans2").style.backgroundColor = "#bef786";
            tot += 2;
        } else {
            document.getElementById("c_ans2").style.backgroundColor = "#f7b5f2";
            tot -= 1;
        }
        //answer3
        if (getVal("q3") === 1) {
            document.getElementById("c_ans3").style.backgroundColor ="#bef786";
            tot += 2;
        } else {
            document.getElementById("c_ans3").style.backgroundColor = "#f7b5f2";
            tot -= 1;
        }
        //answer4
        if (getVal("q4") === 1) {
            document.getElementById("c_ans4").style.backgroundColor = "#bef786";
            tot += 2;
        } else {
            document.getElementById("c_ans4").style.backgroundColor = "#f7b5f2";
            tot -= 1;
        }
        //answer5
        if (getVal("q5") === 1) {
            document.getElementById("c_ans5").style.backgroundColor = "#bef786";
            tot += 2;
        } else {
            document.getElementById("c_ans5").style.backgroundColor = "#f7b5f2";
            tot -= 1;
        }
        //answer6
        if (getVal("q6") === 1) {
            document.getElementById("c_ans6").style.backgroundColor = "#bef786";
            tot += 2;
        } else {
            document.getElementById("c_ans6").style.backgroundColor = "#f7b5f2";
            tot -= 1;
        }
        //answer7
        if (getVal("q7") === 1) {
            document.getElementById("c_ans7").style.backgroundColor = "#bef786";
            tot += 2;
        } else {
            document.getElementById("c_ans7").style.backgroundColor ="#f7b5f2";
            tot -= 1;
        }
        //answer8
        if (getVal("q8") === 1) {
            document.getElementById("c_ans8").style.backgroundColor = "#bef786";
            tot += 2;
        } else {
            document.getElementById("c_ans8").style.backgroundColor = "#f7b5f2";
            tot -= 1;
        }
        //answer9
        if (getVal("q9") === 1) {
            document.getElementById("c_ans9").style.backgroundColor ="#f7b5f2";
            tot += 2;
        } else {
            document.getElementById("c_ans9").style.backgroundColor = "#f7b5f2";
            tot -= 1;
        }
        //answer10
        if (getVal("q10") === 1) {
            document.getElementById("c_ans10").style.backgroundColor ="#f7b5f2";
            tot += 2;
        } else {
            document.getElementById("c_ans10").style.backgroundColor = "#f7b5f2";
            tot -= 1;
        }
        resetIF = true;
        quizs = true;
        startQ = false;
        showScore = tot + "&nbsp; <strong>/20 Score!</strong>";
        document.getElementById("Scoring").innerHTML = showScore;}
}
//radio butto disable situation
function radiobtn(getBol) {
    var radios = document.getElementsByClassName("ans");
    for(var i=0; i < radios.length;i++){
        radios[i].disabled = getBol;
    }
}

// reset function
function resetq() {
    radiobtn();
    var labels= document.getElementsByClassName("white");
    for (var k = 0; k < labels.length; k++){
        labels[k].style["background-color"] =  "rgba(255,51,62,0)";
    }
    var radios = document.getElementsByClassName("ans");
    for(var i=0; i < radios.length;i++){
        radios[i].checked = false;
    }
    clearTimeout(timer);
    document.getElementById("Scoring").innerHTML = "";
    document.getElementById("timing").innerHTML= "";
    seconds = 1000 * 40;
    tot = 0;
    startQ = false;
    quizs = false;
    resetIF = false;
}

// set timer
function setTimer() {
    if(secs == 40000)
        timer = setInterval(setTimer, 1000)
        secs -= 1000;
        document.getElementById("timing").innerHTML = ":"+ secs/1000+"s";
    if (secs <= 0) {
        clearInterval(timer);
       window.alert("oops !!! Time Over");
        radiobtn(true);
        submitq();
    }
    document.getElementById("timing").innerHTML=":"+  seconds/1000+"s";
}
//start funtion
function start() {
    if (resetIF == true){//if reset is needed
        resetq()
    }
    startQ = true;
    radiobtn(false);
    setTimer()
}
