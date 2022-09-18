

//************************************************CLICK FUNCTIONS*****************************************

const quiz = new Quiz(questions);
const ui = new UI();


ui.btn_start.addEventListener("click", function(){ //get it on ui funnction instead of writing the long version
        ui.quiz_box.classList.add("active");
        startTimer(10);
        startTimerLine();
        ui.showQuestion(quiz.nextQuestion());
        ui.showNumberOfQuestion(quiz.questionIndex +1, quiz.questionz.length); //got the question index here
        ui.btn_next.classList.remove("show");          
})

ui.btn_next.addEventListener("click", function(){
    if(quiz.questionz.length != quiz.questionIndex +1 ){ 
        quiz.questionIndex += 1;
        clearInterval(counter); // to clear the interval value
        clearInterval(counterLine);
        startTimer(10);
        startTimerLine();
        ui.showQuestion(quiz.nextQuestion());    
        ui.showNumberOfQuestion(quiz.questionIndex +1, quiz.questionz.length); 
        console.log(quiz.questionIndex);
        ui.btn_next.classList.remove("show");  
    }else{
        console.log("quiz bitmiştir.");
        clearInterval(counter);
        clearInterval(counterLine);
        ui.quiz_box.classList.remove("active");
        ui.score_box.classList.add("active");
        ui.showScore(quiz.questionz.length, quiz.totalCorrectAnswer);
    }
})



ui.btn_quit.addEventListener("click", function(){
    window.location.reload(); //reloads the page 
})

ui.btn_replay.addEventListener("click", function(){
    quiz.questionIndex = 0;
    quiz.totalCorrectAnswer = 0;
    ui.btn_start.click(); // clicked the button via js
    ui.score_box.classList.remove("active"); // to hide scorebox
})


//*****************************************************************************************



function optionSelected(option){
    clearInterval(counter);
    clearInterval(counterLine);
    let answer = option.querySelector("span b").textContent;
    let question = quiz.nextQuestion();

    if(question.checkAnswer(answer)) {
        quiz.totalCorrectAnswer += 1;
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend", ui.correctIcon);
    } else {
        option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend", ui.incorrectIcon);
    }

    for(let i=0; i < ui.option_list.children.length; i++) {
        ui.option_list.children[i].classList.add("disabled");
    }

    ui.btn_next.classList.add("show");
}
let counter;

function startTimer(time){
    counter = setInterval(timer, 1000);
    
    function timer(){
        ui.time_second.textContent = time;
        time--;
        if (time < 0){
            clearInterval(counter);
            ui.time_text.textContent = "Time is Over";

            let answer = quiz.nextQuestion().correctAnswer;

            for(let option of ui.option_list.children){
               
                if (option.querySelector("span b").textContent == answer){
                    option.classList.add("correct");
                    option.insertAdjacentHTML("beforeend", ui.correctIcon);
                }
                option.classList.add("disabled");
               
        }
        ui.btn_next.classList.add("show");
    }else{
        ui.time_text.textContent = "Seconds Remaining";
    }

}

}

function startTimerLine(){
    let line_width = 0;
    
    counterLine = setInterval(timer,20);

    function timer(){
        line_width += 1;
        ui.time_line.style.width = line_width + "px";

        if (line_width > 548){
            clearInterval(counterLine);
        }

    }
}
