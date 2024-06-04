/**
* AUTH: bugsnvibes
* TASK: Write a function named `createReportObject` whose parameter,
        `employeesList`, is the return value of the previous function
        `createEmployeesObject`.
        `createReportObject` should return an object containing the
        key `allEmployees` and a method property called `getNumberOfDepartments`.
*/

export default function createReportObject(employeesList) {
  return {
      allEmployees: { ...employeesList },
      getNumberOfDepartments: function() {
          return Object.keys(this.allEmployees).length;
      }
  };
}
