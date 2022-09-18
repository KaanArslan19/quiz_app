
function Question(questionText, answerVariants, correctAnswer){
    this.questionText = questionText; 
    this.answerVariants = answerVariants;
    this.correctAnswer = correctAnswer;
   

}

Question.prototype.checkAnswer = function(answer){
    return answer == this.correctAnswer;

}


let questions = [
    new Question("1 - Which of the following keywords is used to define a variable in Javascript?",{ a: "var", b: "let",c: "Both A and B ", d: "None of the Above"}, "c"),

    new Question("2 - Which of the following methods is used to access HTML elements using Javascript?",{ a: "getElementbyId()", b: "getElementsyClassName()",c: "Both A and B", d: "None of the Above"}, "c"),

    new Question("3 - Upon encountering empty statements, what does the Javascript Interpreter do ? ",{ a: "Throws and error", b: "Ignores the statements",c: "Gives a warning", d: "None of the Above"}, "b"),
    
    new Question("4 - Which of the following methods can be used to display data in some form using Javascript ? ",{ a: "document.write()", b: "console.log()",c: "window.alert()", d: "All of the above"}, "d"),

]