//7

function yearOfBirth(age) {
    try {let yob = 2018 - age;
        if (yob > 2018) throw new Error("Not a valid age!")}
    catch (e) {
        console.log(e);
    }
}

function whoAmI(name, age) {

    if (!name || !age) {
        console.error("Arguments not valid");
    } else {
        const yob = yearOfBirth(age);
        console.log(`Hi, my name is ${name} and I'm ${yob} years old`);
        const yearOfBirth = 2018-age;
        console.log(`I was born in ${yearOfBirth}`);
    }
}

whoAmI('Dylan', 23);
