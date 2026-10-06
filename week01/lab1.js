// JavaScript Refresher Exercises

//Exercise 1
function capitalizeLetters(string) {
    const words = string.split(" ");
    const result = [];

    for (let i = 0; i < words.length; i++) {
        const word = words[i];

        const firstLetter = word[0];
        const capitalizeFirstLetter = firstLetter.toUpperCase();
        const capitalizeWord = capitalizeFirstLetter + word.slice(1);

        result.push(capitalizeWord);
    }

    return result.join(" ");
}

console.log("==========");
console.log("Exercise 1");
console.log(capitalizeLetters("the quick brown fox"));

//Exercise 2
function largestNumbers(x, y, z) {
    let result = 0;
    if (x > y){
        result = x;
    } else {
        result = y;
    }
    if (z > result){
        result = z;
    }
    return result;
}

console.log("==========");
console.log("Exercise 2");
console.log(largestNumbers (1,0,1));
console.log(largestNumbers (0,-10,-20));
console.log(largestNumbers (1000,510,440));


//Exercise 3
function lastThree(string) {
    if (string.length > 1){
        return string.slice(-3) + string.slice(0,-3);
    }
    return string;
}

console.log("==========");
console.log("Exercise 3");
console.log(lastThree("Python"));
console.log(lastThree("JavaScript"));
console.log(lastThree("Hi"));


//Exercise 4
function angleTypes(angle) {
    if(angle < 90) {
        return "Acute angle.";
    }
    if(angle === 90) {
        return "Right angle.";
    }
    if(angle < 180) {
        return "Obtuse angle.";
    }
    return "Straight angle.";
}

console.log("==========");
console.log("Exercise 4");
console.log(angleTypes(47))
console.log(angleTypes(90))
console.log(angleTypes(145))
console.log(angleTypes(180))
console.log("==========");