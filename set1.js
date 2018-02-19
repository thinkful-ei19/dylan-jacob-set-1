//5

function yearOfBirth(age) {
    return 2018 - age;
}

function whoAmI(name, age) {
    const yob = yearOfBirth(age);
    console.log(`Hi, my name is ${name} and I'm ${yob} years old`);
    const yearOfBirth = 2018-age;
    console.log(`I was born in ${yearOfBirth}`);
}

whoAmI('Dylan', 23);
