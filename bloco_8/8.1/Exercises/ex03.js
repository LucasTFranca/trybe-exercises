const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

function rectifySchoolReport(student, right) {
  let total = 0;
  for (const key in right) {
    if (right[key] === student[key]) {
      total += 1;
    } else if (right[key] !== student[key] && student[key] !== 'N.A') {
      total -= 0.5;
    }
  }
  console.log(total);
}

function schoolReport(student, right, action) {
  action(student, right);
}

schoolReport(studentAnswers, rightAnswers, rectifySchoolReport);