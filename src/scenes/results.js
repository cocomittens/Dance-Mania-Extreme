export const calculateGrade = results => {
    let total = 0;
    let weightedScore = 0;
    let percentage;
    total += results.Perfect;
    total += results.Great;
    total += results.OK;
    total += results.Bad;
    total += results.Miss;

    weightedScore += results.Perfect;
    weightedScore += results.Great * .8;
    weightedScore += results.OK * .6;
    weightedScore += results.Bad * .4;
    
    percentage = (weightedScore/total) * 100;
    console.log(percentage);
    if (percentage < 60) return 'D';
    if (percentage >= 60 && percentage < 68) return 'C';
    if (percentage >= 68 && percentage < 86) return 'B';
    if (percentage >= 86 && percentage < 93) return 'A';
    if (percentage >= 93 && percentage < 96) return 'S';
    if (percentage >= 96) return 'SS';
}

export const showResults = () => {
    let grade = calculateGrade(results);
    canvas.style.display = 'none';
    document.getElementById('stylesheet').href = './css/results.css';
    document.getElementById('grade').innerHTML = grade;
    document.getElementById('title').innerHTML = title;
}