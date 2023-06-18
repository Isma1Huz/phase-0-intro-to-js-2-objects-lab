// //Write your solution in this file!
const employee = {
    name: "Ismael",
    streetAddress: "Ngong"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign({}, employee, {[key]: value });
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key]= value;
    return employee
}
function deleteFromEmployeeByKey(employee, key){
    let newobj = { ...employee };
    delete newobj[key];
    return newobj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}










