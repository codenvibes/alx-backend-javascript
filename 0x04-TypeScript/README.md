<h1 align="center"><b>0x04. TYPESCRIPT</b></h1>
<div align="center"><code>JavaScript</code> <code>TypeScript</code></div>

<!-- <br>

## Background Context -->

<br>

<img src="https://github.com/codenvibes/alx-backend-javascript/blob/master/0x04-TypeScript/images/baea85b5e9a9fb5c36ec.png" width=30%>


<!-- <br>
<hr>
<h3><a href=>Notes</a></h3>
<hr> -->

<br>

## Resources
<details>
<summary><b><a href="https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html">TypeScript in 5 minutes</a></b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href="https://www.typescriptlang.org/docs/handbook/basic-types.html">TypeScript documentation</a></b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<!-- <br>

**man or help:**
- `` -->

<br>

## Learning Objectives
<details>
<summary><b><a href=" "> </a>Basic types in Typescript</b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>Interfaces, Classes, and functions</b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>How to work with the DOM and Typescript</b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>Generic types</b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>How to use namespaces</b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>How to merge declarations</b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>How to use an ambient Namespace to import an external library</b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>Basic nominal typing with Typescript</b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<br>

## Requirements
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All your files should end with a new line
- All your files will be transpiled on Ubuntu 18.04
- Your TS scripts will be checked with `jest` (version 24.9.* )
- A `README.md `file, at the root of the folder of the project, is mandatory
- Your code should use the `ts` extension when possible
- The Typescript compiler should not show any warning or error when compiling your code

<!-- <br>

## More Info -->

<br>

## Configuration Files
Please use these files for the following tasks

### `package.json`
Click to show/hide file contents
### `.eslintrc.js`
Click to show/hide file contents
### `tsconfig.json`
Click to show/hide file contents
### `webpack.config.js`
Click to show/hide file contents

<br>

## Tasks
<details>
<summary>

### 0. Creating an interface for a student
`mandatory`

File: [task_0/js/main.ts](), [task_0/package.json](), [task_0/.eslintrc.js](), [task_0/tsconfig.json](), [task_0/webpack.config.js]()
</summary>

Copy the following configuration files (provided above) into the `task_0` directory: `package.json`, `.eslintrc.js`, `tsconfig.json`, `webpack.config.js`

Write your code in the `main.ts` file:

- Write an interface named Student that accepts the following elements: `firstName(string)`, `lastName(string)`, `age(number)`, and `location(string)`
- Create two students, and create an array named `studentsList` containing the two variables
- Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
- Each row should contain the first name of the student and the location

Requirements:

- When running, Webpack should return `No type errors found`.
- Every variable should use TypeScript when possible.

</details>

<details>
<summary>

### 1. Let's build a Teacher interface
`mandatory`

File: [task_1/js/main.ts](), [task_1/webpack.config.js](), [task_1/tsconfig.json](), [task_1/package.json]()
</summary>

Create a directory `task_1` and copy these configuration files into this folder: `package.json`, `tsconfig.json`, `webpack.config.js`

- `firstName(string)` and `lastName(string)`. These two attributes should only be modifiable when a Teacher is first initialized
- `fullTimeEmployee(boolean)` this attribute should always be defined
- `yearsOfExperience(number)` this attribute is optional
- `location(string)` this attribute should always be defined
- Add the possibility to add any attribute to the Object like `contract(boolean)` without specifying the name of the attribute

Example:
```
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// should print
// Object
// contract: false
// firstName: "John"
// fullTimeEmployee: false
// lastName: "Doe"
// location: "London"
```
</details>

<details>
<summary>

### 2. Extending the Teacher class
`mandatory`

File: [task_1/js/main.ts]()
</summary>

Write an interface named `Directors` that extends `Teacher`. It requires an attribute named `numberOfReports(number)`

Example:
```
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

// should print
// Object
// firstName: "John"
// fullTimeEmployee: true
// lastName: "Doe"
// location: "London"
// numberOfReports: 17
```
</details>

<details>
<summary>

### 3. Printing teachers
`mandatory`

File: [task_1/js/main.ts]()
</summary>

Write a function `printTeacher`:

- It accepts two arguments `firstName` and `lastName`
- It returns the first letter of the firstName and the full lastName
- Example: `printTeacher("John", "Doe") -> J. Doe`

Write an interface for the function named `printTeacherFunction`.

</details>

<details>
<summary>

### 4. Writing a class
`mandatory`

File: [task_1/js/main.ts]()
</summary>

Write a Class named `StudentClass`:

- The constructor accepts firstName(string) and `lastName(string)` arguments
- The class has a method named `workOnHomework` that return the string `Currently working`
- The class has a method named `displayName`. It returns the firstName of the student
- The constructor of the class should be described through an Interface
- The class should be described through an Interface

Requirements:

- You can reuse the Webpack configuration from the previous exercise to compile the code.
- When running `npm run build`, no TypeScript error should be displayed.
Every variable should use TypeScript when possible.

</details>

<details>
<summary>

### 5. Advanced types Part 1
`mandatory`

File: [task_2/js/main.ts](), [task_2/webpack.config.js](), [task_2/tsconfig.json](), [task_2/package.json]()
</summary>


</details>

<details>
<summary>

### 6. 
`mandatory`

File: []()
</summary>


</details>

<details>
<summary>

### 7. 
`mandatory`

File: []()
</summary>


</details>

<details>
<summary>

### 8. 
`mandatory`

File: []()
</summary>


</details>

<details>
<summary>

### 9. 
`mandatory`

File: []()
</summary>


</details>

<details>
<summary>

### 10. 
`mandatory`

File: []()
</summary>


</details>

<details>
<summary>

### 11. 
`mandatory`

File: []()
</summary>


</details>

