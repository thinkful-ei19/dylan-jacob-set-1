//8

function yearOfBirth(age) {
    try {let yob = 2018 - age;
        if (yob > 2018) throw new Error("Not a valid age!")
    return yob;}
    catch (e) {
        console.log(e);
    }
}

function whoAmI(name, age) {
    if (typeof name !== "string" || typeof age !== "number") {
        console.log("Arguments not valid!");
    }
    if (!name || !age) {
        console.error("Arguments not valid");
    } else {
        const yob = yearOfBirth(age);
        console.log(`Hi, my name is ${name} and I'm ${age} years old`);
        console.log(`I was born in ${yob}`);
    }
}

whoAmI(124, "23");
