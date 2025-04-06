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



export { newStudent, doubleNumber };