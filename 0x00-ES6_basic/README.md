<h1 align="center"><b>0x00. ES6 BASICS</b></h1>
<div align="center"><code>JavaScript</code> <code>ES6</code></div>

<!-- <br>

## Background Context -->


<!-- <br>
<hr>
<h3><a href=>Notes</a></h3>
<hr> -->

<br>

<img src="https://github.com/codenvibes/alx-backend-javascript/blob/master/0x00-ES6_basic/images/08806026ef621f900121.png">

<br>

## Resources
<details>
<summary><b><a href="https://www.w3schools.com/js/js_es6.asp">ECMAScript 6 - ECMAScript 2015</a></b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements">Statements and declarations</a></b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions">Arrow functions</a></b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" ">Default parameters</a></b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters">Rest parameter</a></b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href="https://towardsdatascience.com/javascript-es6-iterables-and-iterators-de18b54f4d4?gi=64286fae9e52">Javascript ES6 — Iterables and Iterators</a></b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<!-- <br>

**man or help:**
- `` -->

<br>

## Learning Objectives
<details>
<summary><b><a href=" "> </a>What ES6 is</b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>New features introduced in ES6</b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>The difference between a constant and a variable</b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>Block-scoped variables</b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>Arrow functions and function parameters default to them</b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>Rest and spread function parameters</b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>String templating in ES6</b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>Object creation and their properties in ES6</b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>Iterators and for-of loops</b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<br>

## Requirements
- All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All your files should end with a new line
- A `README.md` file, at the root of the folder of the project, is mandatory
- Your code should use the `js` extension
- Your code will be tested using the [Jest Testing Framework](https://jestjs.io/)
- Your code will be analyzed using the linter [ESLint](https://eslint.org/) along with specific rules that we’ll provide
- All of your functions must be exported


<br>

## Setup
### Install NodeJS 12.11.x
(in your home directory):
```
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```
```
$ nodejs -v
v12.11.1
$ npm -v
6.11.3
```
### Install Jest, Babel, and ESLint
in your project directory, install Jest, Babel and ESList by using the supplied `package.json` and run `npm install`.

<br>

## Configuration files
Add the files below to your project directory

### `package.json`
Click here to show/hide file contents
### `babel.config.js`
Click here to show/hide file contents
### `.eslintrc.js`
Click here to show/hide file contents
### Finally…
Don’t forget to run `npm install` from the terminal of your project folder to install all necessary project dependencies.

<!-- <br>

## More Info -->

<br>

## Tasks
<details>
<summary>

### 0. Const or let?
`mandatory`

File: [0-constants.js]()
</summary>

Modify

- function `taskFirst` to instantiate variables using `const`
- function `taskNext` to instantiate variables using `let`
```
export function taskFirst() {
  var task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  var combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
```
Execution example:
```
bob@dylan:~$ cat 0-main.js
import { taskFirst, taskNext } from './0-constants.js';

console.log(`${taskFirst()} ${taskNext()}`);

bob@dylan:~$ 
bob@dylan:~$ npm run dev 0-main.js 
I prefer const when I can. But sometimes let is okay
bob@dylan:~$ 
```
</details>

<details>
<summary>

### 1. Block Scope
`mandatory`

File: [1-block-scoped.js]()
</summary>

Given what you’ve read about `var` and hoisting, modify the variables inside the function `taskBlock` so that the variables aren’t overwritten inside the conditional block.
```
export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    var task = true;
    var task2 = false;
  }

  return [task, task2];
}
```
Execution:
```
bob@dylan:~$ cat 1-main.js
import taskBlock from './1-block-scoped.js';

console.log(taskBlock(true));
console.log(taskBlock(false));
bob@dylan:~$
bob@dylan:~$ npm run dev 1-main.js 
[ false, true ]
[ false, true ]
bob@dylan:~$
```
</details>

<details>
<summary>

### 2. Arrow functions
`mandatory`

File: [2-arrow.js]()
</summary>

Rewrite the following standard function to use ES6’s arrow syntax of the function `add` (it will be an anonymous function after)
```
export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  const self = this;
  this.addNeighborhood = function add(newNeighborhood) {
    self.sanFranciscoNeighborhoods.push(newNeighborhood);
    return self.sanFranciscoNeighborhoods;
  };
}
```
Execution:
```
bob@dylan:~$ cat 2-main.js
import getNeighborhoodsList from './2-arrow.js';

const neighborhoodsList = new getNeighborhoodsList();
const res = neighborhoodsList.addNeighborhood('Noe Valley');
console.log(res);
bob@dylan:~$
bob@dylan:~$ npm run dev 2-main.js 
[ 'SOMA', 'Union Square', 'Noe Valley' ]
bob@dylan:~$
```
</details>

<details>
<summary>

### 3. Parameter defaults
`mandatory`

File: [3-default-parameter.js]()
</summary>

Condense the internals of the following function to 1 line - without changing the name of each function/variable.

***Hint***: The key here to define default parameter values for the function parameters.
```
export default function getSumOfHoods(initialNumber, expansion1989, expansion2019) {
  if (expansion1989 === undefined) {
    expansion1989 = 89;
  }

  if (expansion2019 === undefined) {
    expansion2019 = 19;
  }
  return initialNumber + expansion1989 + expansion2019;
}
```
Execution:
```
bob@dylan:~$ cat 3-main.js
import getSumOfHoods from './3-default-parameter.js';

console.log(getSumOfHoods(34));
console.log(getSumOfHoods(34, 3));
console.log(getSumOfHoods(34, 3, 4));
bob@dylan:~$
bob@dylan:~$ npm run dev 3-main.js 
142
56
41
bob@dylan:~$
```
</details>

<details>
<summary>

### 4. Rest parameter syntax for functions
`mandatory`

File: [4-rest-parameter.js]()
</summary>


</details>

<details>
<summary>

### 5. 
`mandatory`

File: []()
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

<details>
<summary>

### 12. 
`mandatory`

File: []()
</summary>


</details>

<details>
<summary>

### 13. 
`#advanced`

File: []()
</summary>


</details>

<details>
<summary>

### 14. 
`#advanced`

File: []()
</summary>


</details>

