const SCORE_WEIGHTS = {
    Perfect: 1,
    Great: 0.8,
    OK: 0.6,
    Bad: 0.4,
    Miss: 0
  };
  
  const GRADE_THRESHOLDS = [
    { grade: 'D', minPercentage: 0 },
    { grade: 'C', minPercentage: 60 },
    { grade: 'B', minPercentage: 68 },
    { grade: 'A', minPercentage: 86 },
    { grade: 'S', minPercentage: 93 },
    { grade: 'SS', minPercentage: 96 }
  ];
  
  export const calculateGrade = results => {
    if (!results) throw new Error('Results object is required');
    
    let total = 0;
    let weightedScore = 0;
    for (const [key, value] of Object.entries(results)) {
      if (typeof value !== 'number') throw new Error('Invalid score value');
      total += value;
      weightedScore += value * (SCORE_WEIGHTS[key] || 0);
    }
    
    if (total === 0) throw new Error('Total score cannot be zero');
  
    const percentage = (weightedScore / total) * 100;
    console.log(percentage);
    
    const grade = GRADE_THRESHOLDS.slice().reverse().find(threshold => percentage >= threshold.minPercentage)?.grade;
    return grade || 'D';
  };
  
  export const showResults = (results, title) => {
    let grade = calculateGrade(results);
    const canvas = document.getElementsByClassName('canvasContainer')[0];
    canvas.style.display = 'none';
    document.getElementById('stylesheet').href = './css/results.css';
    document.getElementById('grade').textContent = grade;
    document.getElementById('title').textContent = title;
  };