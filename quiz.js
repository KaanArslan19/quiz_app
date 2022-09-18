function Quiz(questionz){
    this.questionz = questionz;
    this.questionIndex = 0;
    
    this.totalCorrectAnswer = 0;
}

Quiz.prototype.nextQuestion = function(){
    return this.questionz[this.questionIndex]; 
}



