// Write your solution in this file!
// 1️⃣ Define the employee object
const employee = {
    name: "Sam",
    streetAddress: "11 Broadway"
};

// 2️⃣ Returns a new employee with an updated key-value pair (non-destructive)
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
}

// 3️⃣ Updates employee with a key-value pair (destructive)
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

// 4️⃣ Deletes a key from a cloned employee object (non-destructive)
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}

// 5️⃣ Deletes a key directly from the employee object (destructive)
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
