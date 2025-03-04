const college = {
    name : 'FPI',
    department:'computer',
    group:'a',
    events:['problemsolve','clave'],
    unique:{
        color:'red',
        result:{
            cgpa:3.5,
            semester:'6th',
        }
    }

}
const value = Object.values(college);
console.log(college.unique.result.semester);
