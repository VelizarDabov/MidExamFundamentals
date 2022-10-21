function bonusScoring(input) {
    let studentCount = input.shift().split(' ').map(Number);
    let lecturesCount = input.shift().split(' ').map(Number);
    let additionalBonus = input.shift().split(' ').map(Number);
    let highest = 0;
    let attendedLectures = 0
    for (let i = 0; i < studentCount; i++) {
        let attendance = input.shift()
        let totalScore = Math.round(+attendance / +lecturesCount * (5 + +additionalBonus))
        if (totalScore >= highest) {
            highest = totalScore;
            attendedLectures = attendance;
        }

    }

    console.log(`Max Bonus: ${highest}.`);
    console.log(`The student has attended ${attendedLectures} lectures.`);
}
bonusScoring([ 

    '5',  '25', '30', 
  
    '12', '19', '24', 
  
    '16', '20' 
  
  ] )