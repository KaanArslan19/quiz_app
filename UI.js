function UI(){
    this.btn_start = document.querySelector(".btn_start"),
    this.btn_next = document.querySelector(".next_btn"),
    this.btn_replay = document.querySelector(".btn_replay"),
    this.btn_quit = document.querySelector(".btn_quit"),
    this.quiz_box = document.querySelector(".quiz_box");
    this.score_box = document.querySelector(".score_box");
    this.time_text = document.querySelector(".time_text");
    this.time_second = document.querySelector(".time_second");
    this.option_list = document.querySelector(".option_list");
    this.time_line = document.querySelector(".time_line");
    this.correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>';
    this.incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>';
}

UI.prototype.showQuestion = function(question){
    let questions = `<span>${question.questionText}</span>`;
    let options = ''; //first we defined empty string

    for (let answer in question.answerVariants){ 
        options += 
        `
           <div class="option">
                <span><b>${answer}</b>: ${question.answerVariants[answer]}</span>
       
           </div>
        
        
        `;
    }
    document.querySelector(".question_text").innerHTML = questions;
    this.option_list.innerHTML = options; 
    const option = this.option_list.querySelectorAll(".option"); 


    for (let opt of option){
        opt.setAttribute("onclick", "optionSelected(this)");
    }
}

UI.prototype.showNumberOfQuestion = function(questionOrder, totalQuestions){
    let tag = `<span class="badge bg-warning ">${questionOrder}/${totalQuestions}</span>`;
    document.querySelector(".quiz_box .question_index").innerHTML = tag;
    
}

UI.prototype.showScore = function(totalQuestions, correctAnswer){
    let tag = `${correctAnswer} out of ${totalQuestions}.`;
    document.querySelector(".score_box .score_text").innerHTML = tag;
}
    
