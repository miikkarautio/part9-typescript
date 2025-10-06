const calculateBmi = (height: number, weight: number) => {
    height = height / 100 //Koska metreinä
    let bmi: number = weight / (height * height)
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi > 18.5 && bmi < 25) {
        return 'Normal range'
    } else if (bmi > 25 && bmi < 30) {
        return 'Overweight'
    } else if (bmi > 30) {
        return 'Obesity'
    }
}

console.log(calculateBmi(186, 20));