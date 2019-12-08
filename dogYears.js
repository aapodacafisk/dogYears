/* convert to dog years, though it does not take into account recent research into how dogs age and is not accurate. */
let myAge = 28;
let earlyYears = 2;
earlyYears *= 10.5;
let laterYears = myAge - 2;
laterYears *= 4;
let myAgeInDogYears = earlyYears + laterYears;
let myName = "Alex".toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)