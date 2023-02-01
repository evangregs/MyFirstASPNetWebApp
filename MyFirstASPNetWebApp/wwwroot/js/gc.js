const { type } = require("jquery");

assig = parseFloat($("#assig").val());
gp = parseFloat($("#gp").val());
quiz = parseFloat($("#quiz").val());
me = parseFloat($("#me").val());
fe = parseFloat($("#fe").val());
intex = parseFloat($("#fe").val());

/*finalGrade = (assig * .5) + (gp * .1) + (quiz * .1) + (me * .1) + (fe * .1) + (intex * .1);*/
assigw = parseInt($("#assig").val()) * .5
gpw = typeof(document.getElementById("gp").innerHTML)
quizw = quiz * .1
mew = parseInt($("#me").val()) * .1
few = fe * .1
intexw = intex * .1

finalGrade = assigw + gpw + quizw + mew + few + intexw

letterGrade = '';

if (finalGrade >= 94) {
    letterGrade = 'A';
}
else if (finalGrade >= 90) {
    letterGrade = 'A-';
}
else if (finalGrade >= 87) {
    letterGrade = 'B+';
}
else if (finalGrade >= 84) {
    letterGrade = 'B';
}
else if (finalGrade >= 80) {
    letterGrade = 'B-';
}
else if (finalGrade >= 77) {
    letterGrade = 'C+';
}
else if (finalGrade >= 74) {
    letterGrade = 'C';
}
else if (finalGrade >= 70) {
    letterGrade = 'C-';
}
else if (finalGrade >= 67) {
    letterGrade = 'D+';
}
else if (finalGrade >= 64) {
    letterGrade = 'D';
}
else if (finalGrade >= 60) {
    letterGrade = 'D-';
}
else {
    letterGrade = 'E';
}

$("#btnSend").click(function () {
    alert(assigw)
    alert(gpw)
    alert(quizw)
    alert(mew)
    alert(few)
    alert(intexw)
})


