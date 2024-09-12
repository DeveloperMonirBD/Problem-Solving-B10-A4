// ### Task-1

function calculateTax(income, expenses) {
    if (income < 0 || income < expenses || expenses < 0 || typeof income !== 'number' || typeof expenses !== 'number') {
        return 'Invalid Input';
    }

    const tax = (income - expenses) * 0.2;
    
    return tax;
}

// console.log(calculateTax(10000, 3000));
// console.log(calculateTax(34000, 1753));
// console.log(calculateTax(5000, 1500));
// console.log(calculateTax(7000, 7000));
// console.log(calculateTax(-5000, 2000));
// console.log(calculateTax(6000, -1500));

// ### Task-2

function sendNotification(email) {
    if (email.indexOf('@') === -1) {
        return 'Invalid Email';
    }

    const splitsEmail = email.split('@');
    const userName = splitsEmail[0];
    const domainName = splitsEmail[1];

    const notificationMessage = `${userName} sent you an email from ${domainName}`;

    return notificationMessage;
}

// console.log(sendNotification('zihad@gmail.com'));
// console.log(sendNotification('farhan34@yahoo.com'));
// console.log(sendNotification('nadim.naem5@outlook.com'));
// console.log(sendNotification('fahim234.hotmail.com'));
// console.log(sendNotification('sadia8icloud.com'));

// ###Task - 3

function checkDigitsInName(name) {
    if (typeof name !== 'string') {
        return 'Invalid Input';
    }

    for (let i = 0; i < name.length; i++) {
        if (!isNaN(name[i]) && name[i] !== ' ') {
            return true;
        }
    }

}

// console.log(checkDigitsInName('Raj123'));
// console.log(checkDigitsInName('Suman'));
// console.log(checkDigitsInName('Name2024'));
// console.log(checkDigitsInName('!@#'));
// console.log(checkDigitsInName(['Raj']));

// ### Task-4

function calculateFinalScore(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return 'Invalid Input';
    }

    const { name, testScore, schoolGrade, isFFamily } = obj;

    if (typeof name !== 'string' || typeof testScore !== 'number' || testScore > 50 || typeof schoolGrade !== 'number' || schoolGrade > 30 || typeof isFFamily !== 'boolean') {
        return 'Invalid Input';
    }

    let finalScore = testScore + schoolGrade;

    if (isFFamily) {
        finalScore += 20;
    }

    return finalScore >= 80;
}

// console.log(calculateFinalScore({ name: 'Rajib', testScore: 45, schoolGrade: 25, isFFamily: true }));
// console.log(calculateFinalScore({ name: 'Rajib', testScore: 45, schoolGrade: 25, isFFamily: false }));
// console.log(calculateFinalScore('hello'));
// console.log(calculateFinalScore({ name: 'Rajib', testScore: 15, schoolGrade: 25, isFFamily: true }));

// ### Task-5

function waitingTime(waitingTimes, serialNumber) {
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
        return 'Invalid Input';
    }

    let totalTime = 0;
    // for (let i = 0; i < waitingTimes.length; i++) {
    //     totalTime += waitingTimes[i];
    // }
    // let averageTime = Math.round(totalTime / waitingTimes.length);

    //optional:- for of loop:
    for (let time of waitingTimes) {
        totalTime += time;
    }
    let averageTime = Math.round(totalTime / waitingTimes.length);

    let remainingSerial = serialNumber - waitingTimes.length - 1;

    const waitingTime = remainingSerial * averageTime;
    return waitingTime;
}


// console.log(waitingTime([3, 5, 7, 11, 6], 10));
// console.log(waitingTime([13, 2], 6));
// console.log(waitingTime([13, 2, 6, 7, 10], 6));
// console.log(waitingTime([6], 4));
// console.log(waitingTime(7, 10));
// console.log(waitingTime('[6,2]', 9));
// console.log(waitingTime([7, 8, 3, 4, 5], '9'));
