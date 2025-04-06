class Biodata {
    constructor(name, gender, dob) {
        this.name = name;
        this.gender = gender;
        this.dob = dob;
    }
    getName() {
        return this.name;
    }
    getGender() {
        return this.gender;
    }
    getDob() {
        return this.dob
    }
}

const newStudent = (name, gender, dob) => {
    let student = new Biodata(name, gender, dob);
    return console.log(`New student registered with the following details; Name: ${student.name}, Gender: ${student.gender}, Dob: ${student.dob}`);
}


const doubleNumber = (array) => (
    console.log(array.map((x) => x * 2))
)


const isLegal = new Promise((resolve, reject) => {
    let age = 18;
    if (age >= 18) {
        resolve("Promise is resolved successfully, you are legal");    
    } else {
        reject("Promise is rejected, you are not legal");
    }
})

isLegal.then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error)
}) 

async function displayMessage() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("This message will be displayed after three seconds");
        }, 3000);
    });

    const message = await promise;
    console.log(message)
}

export { newStudent, doubleNumber, displayMessage };