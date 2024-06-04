/**
* AUTH: bugsnvibes
* TASK: Write a function named createEmployeesObject that will receive
        two arguments:
        - `departmentName` (String)
        - `employees` (Array of Strings)
*/

export default function createEmployeesObject(departmentName, employees) {
  const employeesObject = {
    [departmentName]: employees
  };

  return employeesObject;
}
