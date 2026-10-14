let energy = 70;
let stress = 20;
let progress = 0;
let actionsLeft = 7;
let gameOver = false;
let studyCount = 0;
let coffeeCount = 0;
let sleepCount = 0;
let procrastinateCount = 0;

document.getElementById("studyButton").onclick = function(){
    // change stats based on the action
    energy -= 20;
    stress += 25;
    progress += 25;
    actionsLeft -= 1;

    // make sure values between 0-100
    limitStats();
    
    updateStats();

    updateBars();

    studyCount += 1;

    if (studyCount == 1){
    document.getElementById("message").innerHTML = "You studied hard! Your assignment is getting done!";
    }
    else if (studyCount == 2){
        document.getElementById("message").innerHTML = "Another study session? You're really working hard!";
    }
    else{
        document.getElementById("message").innerHTML = "You've been studying for hours. Your brain needs a break!";
    }
    
    document.getElementById("eventMessage").innerHTML = "";

    checkGame();
    updateCharacter();
};

document.getElementById("coffeeButton").onclick = function(){
    
    energy += 20;
    stress += 5;
    actionsLeft -= 1;

    limitStats();
    
    updateStats();

    updateBars();
    
    coffeeCount += 1;

    if (coffeeCount == 1){
        document.getElementById("message").innerHTML = "You got a coffee! You feel more awake!";
    }
    else if (coffeeCount == 2){
        document.getElementById("message").innerHTML = "Another coffee? You're becoming a caffeine expert!";
    }
    else{
        document.getElementById("message").innerHTML = "That's a lot of coffee! Maybe try sleeping instead?";
    }
    
    document.getElementById("eventMessage").innerHTML = "";

    checkGame();
    updateCharacter();
};

document.getElementById("sleepButton").onclick = function(){
    
    energy += 30;
    stress -= 15;
    actionsLeft -= 1;

    limitStats();
    
    updateStats();

    updateBars();
    
    sleepCount += 1;

    if (sleepCount == 1){
        document.getElementById("message").innerHTML = "You got some sleep! You feel refreshed!";
    }
    else if (sleepCount == 2){
        document.getElementById("message").innerHTML = "Another nap? You're catching up on your sleep!";
    }
    else{
        document.getElementById("message").innerHTML = "You've been sleeping a lot. Don't forget your assignment!";
    }
    
    document.getElementById("eventMessage").innerHTML = "";

    checkGame();
    updateCharacter();
};

document.getElementById("procrastinateButton").onclick = function(){
    
    stress -= 10;
    progress -= 5;
    actionsLeft -= 1;

    limitStats();
    
    updateStats();

    updateBars();

    procrastinateCount += 1;

    if (procrastinateCount == 1){
        document.getElementById("message").innerHTML = "You spent hours scrolling TikTok!";
    }
    else if (procrastinateCount == 2){
        document.getElementById("message").innerHTML = "Still scrolling? Your assignment isn't going to finish itself!";
    }
    else{
        document.getElementById("message").innerHTML = "You're officially a professional procrastinator!";
    }
    
    document.getElementById("eventMessage").innerHTML = "";

    checkGame();
    updateCharacter();
};

document.getElementById("randomButton").onclick = function(){

    actionsLeft -= 1;

    randomEvent();

    limitStats();
    updateStats();
    updateBars();

    document.getElementById("message").innerHTML = "You decided to take a chance!";

    checkGame();
    updateCharacter();
};

function checkGame(){

    if (energy <= 0){
        document.getElementById("message").innerHTML = "Game Over! You passed out from exhaustion!";
        gameOver = true;
    } 
    else if (stress >= 100){
        document.getElementById("message").innerHTML = "Game Over! You burned out from too much stress!";
        gameOver = true;

    }
    else if (progress >= 100){
        document.getElementById("message").innerHTML = "Congratulations! You survived UTM!";
        gameOver = true;
    }
    else if (actionsLeft <= 0){
        document.getElementById("message").innerHTML = "Game Over! You missed your assignment deadline!";
        gameOver = true;
    }

    if (gameOver == true){
        document.getElementById("studyButton").disabled = true;
        document.getElementById("coffeeButton").disabled = true;
        document.getElementById("sleepButton").disabled = true;
        document.getElementById("procrastinateButton").disabled = true;
        document.getElementById("randomButton").disabled = true;
    }
}

function limitStats(){
    if (energy > 100){
        energy = 100;
    }
    else if (energy < 0){
        energy = 0;
    }

    if (stress > 100){
        stress = 100;
    }
    else if (stress < 0){
        stress = 0;
    }
    if (progress > 100){
        progress = 100;
    }
    else if (progress < 0){
        progress = 0;
    }
}

document.getElementById("restartButton").onclick = function(){
    energy = 70;
    stress = 20;
    progress = 0;
    actionsLeft = 7;
    gameOver = false;
    studyCount = 0;
    coffeeCount = 0;
    sleepCount = 0;
    procrastinateCount = 0;

    updateStats();

    document.getElementById("message").innerHTML = "Choose an action to start your university survival journey!";

    document.getElementById("studyButton").disabled = false;
    document.getElementById("coffeeButton").disabled = false;
    document.getElementById("sleepButton").disabled = false;
    document.getElementById("procrastinateButton").disabled = false;
    document.getElementById("randomButton").disabled = false;
    document.getElementById("eventMessage").innerHTML = "";

    updateBars();
    updateCharacter();

};

function updateBars(){
    document.getElementById("energyBar").style.width = energy + "%";

    document.getElementById("stressBar").style.width = stress + "%";

    document.getElementById("progressBar").style.width = progress + "%";

    if (energy <= 30){
        document.getElementById("energyBar").style.backgroundColor = "red";
    }
    else{
        document.getElementById("energyBar").style.backgroundColor = "#4caf50";
    }
}

function randomEvent(){

    let event = Math.floor(Math.random() * 4);

    if (event == 0){
        stress += 20;
        document.getElementById("eventMessage").innerHTML = "Surprise Quiz! Stress +20";
    }
    else if (event == 1){
        energy -= 10;
        document.getElementById("eventMessage").innerHTML = "You missed the bus! Energy -10";
    }
    else if (event == 2){
        actionsLeft += 1;
        document.getElementById("eventMessage").innerHTML = "Assignment extension! Actions Left +1";
    }
    else{
        stress -= 15;
        document.getElementById("eventMessage").innerHTML = "Class cancelled! Stress -15";
    }
}

function updateCharacter(){

    // images generated by AI
    if (energy <= 0){
        document.getElementById("studentImage").src = "images/studentExhausted.png";
    }
    else if (stress >= 100){
        document.getElementById("studentImage").src = "images/studentStressed.png";
    }
    else if (progress >= 100){
        document.getElementById("studentImage").src = "images/studentHappy.png";
    }
    else if (actionsLeft <= 0){
        document.getElementById("studentImage").src = "images/studentBurnedout.png";
    }
    else if (energy <= 30 || stress >= 70){
        document.getElementById("studentImage").src = "images/studentTired.png";
    }
    else{
        document.getElementById("studentImage").src = "images/studentNormal.png";
    }
}

function updateStats(){
    document.getElementById("energy").innerHTML = energy;
    document.getElementById("stress").innerHTML = stress;
    document.getElementById("progress").innerHTML = progress;
    document.getElementById("actions").innerHTML = actionsLeft;
}