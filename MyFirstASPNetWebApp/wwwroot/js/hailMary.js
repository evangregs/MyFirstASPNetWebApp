
// this is the function that initiates when someone clicks the submit button
$("#btnSend").click(function () {
    // assign the user input values to variables for convenience and multiply by the syllabus weight
    let assignments = parseInt($("#assignments").val()) * .5
    let groupProject = parseInt($("#groupProject").val()) * .1
    let quiz = parseInt($("#quiz").val()) * .1
    let midtermExam = parseInt($("#midtermExam").val()) * .1
    let finalExam = parseInt($("#finalExam").val()) * .1
    let intex = parseInt($("#intex").val()) * .1

    // calculate total percentage grade 
    let total = assignments + groupProject + quiz + midtermExam + finalExam + intex
    let finalGrade = ''

    // use if statements to assign appropriate letter grade 
    if (total >= 94) {
        finalGrade = 'A'
    }
    else if (total >= 90) {
        finalGrade = 'A-'
    }
    else if (total >= 87) {
        finalGrade = 'B+'
    }
    else if (total >= 84) {
        finalGrade = 'B'
    }
    else if (total >= 80) {
        finalGrade = 'B-'
    }
    else if (total >= 77) {
        finalGrade = 'C+'
    }
    else if (total >= 74) {
        finalGrade = 'C'
    }
    else if (total >= 70) {
        finalGrade = 'C-'
    }
    else if (total >= 67) {
        finalGrade = 'D+'
    }
    else if (total >= 64) {
        finalGrade = 'D'
    }
    else if (total >= 60) {
        finalGrade = 'D-'
    }
    else {
        finalGrade = 'E'
    }

    // output the final letter grade to the html element of the "letters" class
    $("#letters").html("Your final grade is: " + finalGrade)
})
