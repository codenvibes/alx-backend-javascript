<h1 align="center"><b>0x00. ES6 BASICS</b></h1>
<div align="center"><code>JavaScript</code> <code>ES6</code></div>

<br>
<div align="center"><img src="https://github.com/codenvibes/alx-backend-javascript/blob/master/0x00-ES6_basic/images/08806026ef621f900121.png"></div>


<br>

## Concepts
<details>
<summary><b><a href="https://intranet.alxswe.com/concepts/852">JavaScript programming</a></b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href="https://intranet.alxswe.com/concepts/542">Software Linter</a></b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>

<!-- <br>

## Background Context -->


<!-- <br>
<hr>
<h3><a href=>Notes</a></h3>
<hr> -->


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

ES6, also known as ECMAScript 2015, is the sixth edition of the ECMAScript language specification. ECMAScript is the standard upon which JavaScript is based. ES6 introduced a significant update to JavaScript, adding many new features and improvements to the language, which have since become foundational for modern JavaScript development.

ECMA stands for the **European Computer Manufacturers Association**. It is an industry association dedicated to the standardization of information and communication systems. ECMA is responsible for developing standards like ECMAScript, which is the specification upon which JavaScript is based. The organization's goal is to ensure interoperability and uniformity across various computer systems and technologies.

<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>New features introduced in ES6</b></summary><br>

Some of the key features and enhancements introduced in ES6 include:

1. **Arrow Functions**: A shorter syntax for writing functions.
   ```javascript
   const add = (a, b) => a + b;
   ```

2. **Classes**: A new way to create objects and deal with inheritance, making it more similar to other object-oriented programming languages.
   ```javascript
   class Person {
     constructor(name) {
       this.name = name;
     }

     greet() {
       return `Hello, ${this.name}!`;
     }
   }
   ```

3. **Template Literals**: Enhanced string literals that allow for embedded expressions and multi-line strings.
   ```javascript
   const name = 'World';
   console.log(`Hello, ${name}!`);
   ```

4. **Destructuring Assignment**: A syntax for extracting values from arrays or properties from objects into distinct variables.
   ```javascript
   const [a, b] = [1, 2];
   const {name, age} = {name: 'Alice', age: 25};
   ```

5. **Default Parameters**: Allowing functions to have default values for parameters.
   ```javascript
   function greet(name = 'World') {
     return `Hello, ${name}!`;
   }
   ```

6. **Let and Const**: New ways to declare variables, with `let` being block-scoped and `const` for constants.
   ```javascript
   let count = 1;
   const MAX = 10;
   ```

7. **Modules**: A standardized way to organize and import/export code across files.
   ```javascript
   // In file myModule.js
   export const myValue = 42;

   // In another file
   import { myValue } from './myModule.js';
   ```

8. **Promises**: A native way to handle asynchronous operations, which makes it easier to work with asynchronous code.
   ```javascript
   let promise = new Promise((resolve, reject) => {
     // async operation
   });

   promise.then(result => {
     // handle result
   }).catch(error => {
     // handle error
   });
   ```

9. **Enhanced Object Literals**: Simplified syntax for defining objects, especially when the property names are dynamic.
   ```javascript
   const prop = 'name';
   const obj = {
     [prop]: 'Alice',
     greet() {
       return `Hello, ${this.name}!`;
     }
   };
   ```

10. **Iterators and Generators**: New mechanisms for working with sequences of values, useful for tasks like defining custom iteration behaviors.
    ```javascript
    function* idGenerator() {
      let id = 0;
      while (true) {
        yield id++;
      }
    }

    const gen = idGenerator();
    console.log(gen.next().value); // 0
    console.log(gen.next().value); // 1
    ```

These features and more have greatly enhanced the power, flexibility, and readability of JavaScript code, making ES6 a pivotal version in the evolution of the language.

<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>The difference between a constant and a variable</b></summary><br>

The main difference between a constant and a variable lies in their mutability:

1. **Variable**:
   - **Definition**: A variable is a storage location identified by a variable name that can hold data which can be changed during the program execution.
   - **Declaration in JavaScript**: Variables are declared using the `let` or `var` keywords.
   - **Example**:
     ```javascript
     let count = 10;
     count = 15; // The value of count is changed to 15.
     ```

2. **Constant**:
   - **Definition**: A constant is a storage location identified by a constant name that holds data which cannot be changed once it has been assigned.
   - **Declaration in JavaScript**: Constants are declared using the `const` keyword.
   - **Example**:
     ```javascript
     const MAX_USERS = 100;
     // MAX_USERS = 150; // This will cause an error because the value of MAX_USERS cannot be changed.
     ```

### Key Differences:

- **Mutability**:
  - Variables can be reassigned new values after their initial assignment.
  - Constants cannot be reassigned; their value remains fixed once set.

- **Scope**:
  - Both `let` and `const` are block-scoped, meaning they are only accessible within the block in which they are defined.
  - Variables declared with `var` are function-scoped or globally-scoped if not within a function.

- **Initialization**:
  - Variables declared with `let` or `var` can be declared without initialization.
  - Constants must be initialized at the time of declaration.

### Examples:

**Variable:**
```javascript
let name = 'Alice';
console.log(name); // Output: Alice
name = 'Bob';
console.log(name); // Output: Bob
```

**Constant:**
```javascript
const PI = 3.14159;
console.log(PI); // Output: 3.14159
// PI = 3.14; // This line would throw an error because PI is a constant and cannot be reassigned.
```

### Practical Use:
- Use **variables** when the value needs to change over time or based on conditions within the program.
- Use **constants** for values that should remain the same throughout the program, ensuring the integrity and clarity of the code by preventing accidental reassignment.

<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>Block-scoped variables</b></summary><br>

Block-scoped variables in JavaScript are variables that are accessible only within the block (enclosed by `{}`) in which they are declared. The two keywords used to declare block-scoped variables are `let` and `const`. 

### Characteristics of Block-Scoped Variables:

1. **Scope**: They are only accessible within the block where they are defined.
2. **Hoisting**: They are hoisted to the top of their block but are not initialized. Accessing them before declaration results in a `ReferenceError`.
3. **Re-declaration**: Variables declared with `let` and `const` cannot be redeclared within the same block.

### Examples and Differences:

#### Using `let`:

- **Example**:
  ```javascript
  if (true) {
    let x = 10;
    console.log(x); // Output: 10
  }
  console.log(x); // ReferenceError: x is not defined
  ```

  In this example, `x` is only accessible within the `if` block.

- **Reassignment**:
  ```javascript
  let y = 5;
  y = 10; // This is allowed.
  ```

#### Using `const`:

- **Example**:
  ```javascript
  if (true) {
    const z = 20;
    console.log(z); // Output: 20
  }
  console.log(z); // ReferenceError: z is not defined
  ```

  Similarly, `z` is only accessible within the `if` block.

- **Reassignment**:
  ```javascript
  const w = 30;
  // w = 40; // This will cause an error because you cannot reassign a constant.
  ```

### Why Use Block-Scoped Variables:

1. **Avoid Polluting the Global Scope**: Variables declared with `var` can unintentionally become global if not declared within a function, leading to potential conflicts. Block-scoped variables prevent this by limiting the scope to the block.
2. **Improved Readability and Maintainability**: By confining variables to the block where they are needed, it becomes easier to understand and maintain the code.
3. **Error Prevention**: Reducing the scope of variables can prevent accidental modifications or misuse outside of the intended context.

### Example with Loops:

Using `let` in loops ensures that each iteration gets a new binding of the variable, which is not the case with `var`.

- **Using `let` in a loop**:
  ```javascript
  for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000); // Outputs: 0, 1, 2
  }
  ```

- **Using `var` in a loop**:
  ```javascript
  for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000); // Outputs: 3, 3, 3
  }
  ```

  With `var`, the variable `i` is shared across all iterations, leading to unexpected results. Using `let` ensures `i` is block-scoped to each iteration.

### Summary:
Block-scoped variables (`let` and `const`) enhance the clarity, safety, and robustness of JavaScript code by confining variables to the smallest necessary scope, thereby reducing the risk of errors and conflicts.

<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>Arrow functions and function parameters default to them</b></summary><br>

### Arrow Functions

Arrow functions are a concise way to write functions in JavaScript introduced in ES6. They use a shorter syntax compared to traditional function expressions and have some unique characteristics, particularly regarding the handling of the `this` keyword.

#### Syntax:

```javascript
const functionName = (parameter1, parameter2, ...) => {
  // function body
  return expression;
};
```

For single-parameter functions and single-line function bodies, you can omit parentheses around the parameter and the braces and `return` keyword.

```javascript
const square = x => x * x;
```

### Characteristics of Arrow Functions:

1. **Concise Syntax**: They provide a shorter syntax, which is especially useful for small, one-line functions.
2. **Lexical `this` Binding**: Unlike regular functions, arrow functions do not have their own `this` context. Instead, they inherit `this` from the surrounding (lexical) scope at the time they are defined.

#### Example:

```javascript
function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++; // `this` refers to the Person object
    console.log(this.age);
  }, 1000);
}

const p = new Person();
```

In this example, the arrow function inside `setInterval` uses the `this` value from the surrounding `Person` constructor function.

### Default Parameters

Default parameters allow you to initialize function parameters with default values if no value or `undefined` is passed.

#### Syntax:

```javascript
function functionName(param1 = defaultValue1, param2 = defaultValue2, ...) {
  // function body
}
```

#### Example with Regular Function:

```javascript
function greet(name = 'World') {
  return `Hello, ${name}!`;
}

console.log(greet()); // Output: Hello, World!
console.log(greet('Alice')); // Output: Hello, Alice!
```

#### Example with Arrow Function:

```javascript
const greet = (name = 'World') => `Hello, ${name}!`;

console.log(greet()); // Output: Hello, World!
console.log(greet('Alice')); // Output: Hello, Alice!
```

### Combining Arrow Functions and Default Parameters

Arrow functions and default parameters can be combined seamlessly.

#### Example:

```javascript
const add = (a = 0, b = 0) => a + b;

console.log(add()); // Output: 0
console.log(add(5)); // Output: 5
console.log(add(5, 10)); // Output: 15
```

### Key Differences from Regular Functions:

1. **`this` Binding**: Arrow functions inherit `this` from the lexical scope, whereas regular functions have their own `this` context.
2. **Arguments Object**: Arrow functions do not have their own `arguments` object. If you need to use `arguments`, you should use a regular function or rest parameters.
   ```javascript
   const sum = (...args) => args.reduce((acc, curr) => acc + curr, 0);

   console.log(sum(1, 2, 3, 4)); // Output: 10
   ```

3. **Cannot be Used as Constructors**: Arrow functions cannot be used with the `new` keyword and cannot be used as constructors.

4. **No Prototype Property**: Arrow functions do not have a `prototype` property.

### Summary:

Arrow functions offer a concise syntax and lexical `this` binding, making them especially useful for short functions and callbacks. Default parameters enhance function flexibility by allowing parameters to have default values. Both features improve code readability and maintainability in modern JavaScript.

<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>Rest and spread function parameters</b></summary><br>

### Rest Parameters

Rest parameters allow you to represent an indefinite number of arguments as an array. This is useful for functions that need to handle a variable number of arguments.

#### Syntax:

```javascript
function functionName(...restParameter) {
  // function body
}
```

The rest parameter syntax `...restParameter` collects all remaining arguments passed to the function into an array.

#### Example:

```javascript
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10
console.log(sum(5, 10)); // Output: 15
```

In this example, `sum` can accept any number of arguments and sum them up using the `reduce` method.

### Spread Syntax

Spread syntax allows an iterable (such as an array) to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

#### Syntax:

- **Function Calls**: Expands an array into individual arguments.
  ```javascript
  functionName(...iterable);
  ```

- **Array Literals**: Expands an array into individual elements.
  ```javascript
  [...iterable];
  ```

- **Object Literals**: Expands an object into individual key-value pairs.
  ```javascript
  {...object};
  ```

#### Examples:

- **Function Calls**:
  ```javascript
  function multiply(a, b, c) {
    return a * b * c;
  }

  const numbers = [2, 3, 4];
  console.log(multiply(...numbers)); // Output: 24
  ```

- **Array Literals**:
  ```javascript
  const parts = ['shoulders', 'knees'];
  const lyrics = ['head', ...parts, 'and', 'toes'];
  console.log(lyrics); // Output: ['head', 'shoulders', 'knees', 'and', 'toes']
  ```

- **Object Literals**:
  ```javascript
  const obj1 = { a: 1, b: 2 };
  const obj2 = { b: 3, c: 4 };
  const mergedObj = { ...obj1, ...obj2 };
  console.log(mergedObj); // Output: { a: 1, b: 3, c: 4 }
  ```

### Key Differences and Usage:

- **Rest Parameters**:
  - Collects all remaining elements into an array.
  - Used in function parameter lists.
  - Useful for functions that accept an indefinite number of arguments.

- **Spread Syntax**:
  - Expands elements of an iterable (like an array) into individual elements.
  - Used in function calls, array literals, and object literals.
  - Useful for creating copies, merging arrays or objects, and passing arrays as function arguments.

### Combining Rest and Spread:

You can use rest parameters to collect arguments and spread syntax to pass them around or manipulate them.

#### Example:

```javascript
function sortNumbers(...numbers) {
  return numbers.sort((a, b) => a - b);
}

const nums = [5, 1, 7, 3];
console.log(sortNumbers(...nums)); // Output: [1, 3, 5, 7]
```

In this example, `sortNumbers` uses rest parameters to collect all arguments into an array and then uses the spread syntax to pass the elements of the `nums` array to the function.

### Summary:

- **Rest Parameters**: Collect multiple arguments into an array. Useful for functions that need to handle varying numbers of arguments.
- **Spread Syntax**: Expands arrays or objects into individual elements or key-value pairs. Useful for function calls, array and object manipulation. 

Both rest and spread syntax enhance the flexibility and readability of JavaScript code, making it easier to handle collections of data.

<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>String templating in ES6</b></summary><br>

String templating in ES6, also known as template literals, provides a more powerful and flexible way to create and manipulate strings compared to traditional string concatenation. Template literals are enclosed by backticks (`) and can include placeholders for embedding expressions.

### Key Features of Template Literals:

1. **Multiline Strings**: Template literals allow strings to span multiple lines without the need for concatenation or escape sequences.
2. **Interpolation**: You can embed expressions within a string using `${expression}` syntax.
3. **Tagged Templates**: Allows you to modify the output of template literals using a function.

### Basic Syntax:

```javascript
const template = `string text`;
const templateWithInterpolation = `string text ${expression} string text`;
```

### Examples:

#### Multiline Strings:

With traditional strings, multiline strings require escape sequences:

```javascript
const oldWay = "This is line 1.\nThis is line 2.";
console.log(oldWay);
// Output:
// This is line 1.
// This is line 2.
```

With template literals, you can write multiline strings directly:

```javascript
const newWay = `This is line 1.
This is line 2.`;
console.log(newWay);
// Output:
// This is line 1.
// This is line 2.
```

#### String Interpolation:

String interpolation allows embedding expressions within strings easily:

```javascript
const name = 'Alice';
const age = 30;

const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting);
// Output: Hello, my name is Alice and I am 30 years old.
```

Expressions can be anything that evaluates to a value, including arithmetic operations, function calls, and object property access:

```javascript
const a = 5;
const b = 10;

const sum = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(sum);
// Output: The sum of 5 and 10 is 15.

const user = { name: 'Bob', age: 25 };
const userInfo = `User's name is ${user.name} and age is ${user.age}.`;
console.log(userInfo);
// Output: User's name is Bob and age is 25.
```

#### Tagged Templates:

Tagged templates allow you to parse template literals with a function. The tag function receives an array of string literals and the interpolated values as arguments.

```javascript
function tag(strings, ...values) {
  console.log(strings); // Array of string literals
  console.log(values);  // Array of interpolated values
  return 'Tagged template output';
}

const taggedResult = tag`Hello, ${name}! You are ${age} years old.`;
console.log(taggedResult);
// Output:
// [ 'Hello, ', '! You are ', ' years old.' ]
// [ 'Alice', 30 ]
// Tagged template output
```

Tagged templates are useful for advanced scenarios such as sanitizing input, formatting data, or implementing custom templating logic.

### Use Cases:

1. **Dynamic Content Generation**:
   ```javascript
   const product = 'laptop';
   const price = 1200;
   const message = `The price of the ${product} is $${price}.`;
   console.log(message);
   // Output: The price of the laptop is $1200.
   ```

2. **Multiline HTML Strings**:
   ```javascript
   const listItems = ['Apple', 'Banana', 'Cherry'];
   const listHtml = `
     <ul>
       ${listItems.map(item => `<li>${item}</li>`).join('')}
     </ul>
   `;
   console.log(listHtml);
   // Output:
   // <ul>
   //   <li>Apple</li>
   //   <li>Banana</li>
   //   <li>Cherry</li>
   // </ul>
   ```

3. **Tagged Templates for Escaping HTML**:
   ```javascript
   function escapeHtml(strings, ...values) {
     return strings.reduce((result, string, i) => {
       const value = values[i - 1];
       const escapedValue = String(value)
         .replace(/&/g, '&amp;')
         .replace(/</g, '&lt;')
         .replace(/>/g, '&gt;')
         .replace(/"/g, '&quot;')
         .replace(/'/g, '&#39;');
       return result + escapedValue + string;
     });
   }

   const userInput = '<script>alert("hacked")</script>';
   const safeHtml = escapeHtml`<div>${userInput}</div>`;
   console.log(safeHtml);
   // Output: <div>&lt;script&gt;alert(&quot;hacked&quot;)&lt;/script&gt;</div>
   ```

### Summary:

Template literals in ES6 offer an enhanced way to work with strings in JavaScript. They provide multiline strings, string interpolation, and tagged templates, making string manipulation more powerful and convenient. This feature greatly improves code readability and maintainability by simplifying the syntax and reducing the need for concatenation.

<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>Object creation and their properties in ES6</b></summary><br>

In ES6 (ECMAScript 2015), object creation and properties received several enhancements, making it easier and more concise to work with objects. Here are some key features and techniques for creating and manipulating objects in ES6:

### 1. Object Literal Enhancements

#### Shorthand Property Names

When the property name is the same as the variable name, you can use shorthand syntax to create objects more concisely.

**Before ES6:**
```javascript
const name = 'Alice';
const age = 25;

const person = {
  name: name,
  age: age
};
```

**With ES6:**
```javascript
const name = 'Alice';
const age = 25;

const person = { name, age };
```

#### Method Definitions

ES6 allows you to define methods in objects without using the `function` keyword.

**Before ES6:**
```javascript
const person = {
  name: 'Alice',
  age: 25,
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};
```

**With ES6:**
```javascript
const person = {
  name: 'Alice',
  age: 25,
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
};
```

#### Computed Property Names

ES6 allows you to use expressions as property names inside object literals by using square brackets `[]`.

**Example:**
```javascript
const prop = 'name';
const person = {
  [prop]: 'Alice',
  ['greet' + 'ing']() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

console.log(person.name); // Output: Alice
person.greeting(); // Output: Hello, my name is Alice
```

### 2. Object Destructuring

Object destructuring allows you to extract properties from objects and assign them to variables.

**Example:**
```javascript
const person = { name: 'Alice', age: 25 };

const { name, age } = person;

console.log(name); // Output: Alice
console.log(age); // Output: 25
```

You can also use destructuring to assign to new variable names:

```javascript
const person = { name: 'Alice', age: 25 };

const { name: personName, age: personAge } = person;

console.log(personName); // Output: Alice
console.log(personAge); // Output: 25
```

### 3. Default Values

You can assign default values to properties in case they are `undefined`.

**Example:**
```javascript
const person = { name: 'Alice' };

const { name, age = 30 } = person;

console.log(name); // Output: Alice
console.log(age); // Output: 30
```

### 4. Spread Operator

The spread operator (`...`) allows you to spread the properties of an object into another object.

**Example:**
```javascript
const person = { name: 'Alice', age: 25 };
const job = { title: 'Developer', company: 'Tech Co.' };

const employee = { ...person, ...job };

console.log(employee);
// Output: { name: 'Alice', age: 25, title: 'Developer', company: 'Tech Co.' }
```

The spread operator can also be used to create a shallow copy of an object:

```javascript
const person = { name: 'Alice', age: 25 };

const personCopy = { ...person };

console.log(personCopy);
// Output: { name: 'Alice', age: 25 }
```

### 5. Object.assign

`Object.assign` is used to copy the values of all enumerable own properties from one or more source objects to a target object.

**Example:**
```javascript
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(returnedTarget); // Output: { a: 1, b: 4, c: 5 }
console.log(target); // Output: { a: 1, b: 4, c: 5 } (target is also modified)
```

### 6. Object Property Enumeration

ES6 introduced new methods for enumerating properties of objects.

- **Object.keys()**: Returns an array of a given object's property names.
- **Object.values()**: Returns an array of a given object's property values.
- **Object.entries()**: Returns an array of a given object's key-value pairs.

**Example:**
```javascript
const person = { name: 'Alice', age: 25 };

console.log(Object.keys(person)); // Output: ['name', 'age']
console.log(Object.values(person)); // Output: ['Alice', 25]
console.log(Object.entries(person)); // Output: [['name', 'Alice'], ['age', 25]]
```

### Summary

ES6 introduced several enhancements to object creation and manipulation, including shorthand property names, method definitions, computed property names, destructuring, default values, the spread operator, `Object.assign`, and new property enumeration methods. These features improve code readability, conciseness, and maintainability, making JavaScript objects easier to work with.

<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>Iterators and for-of loops</b></summary><br>

#### Iterators

An iterator is an object that provides a mechanism to traverse a collection, one element at a time. In JavaScript, an iterator is an object with a `next()` method that returns an object with two properties: `value` (the next value in the sequence) and `done` (a boolean indicating whether the iteration is complete).

**Creating an Iterator:**

You can create an iterator by defining an object with a `next()` method.

**Example:**

```javascript
function makeIterator(array) {
  let index = 0;
  return {
    next: function() {
      return index < array.length ?
        { value: array[index++], done: false } :
        { value: undefined, done: true };
    }
  };
}

const it = makeIterator(['a', 'b', 'c']);
console.log(it.next()); // { value: 'a', done: false }
console.log(it.next()); // { value: 'b', done: false }
console.log(it.next()); // { value: 'c', done: false }
console.log(it.next()); // { value: undefined, done: true }
```

#### Iterable Protocol

An object is iterable if it implements the iterable protocol. To be iterable, an object must have a method (typically named `Symbol.iterator`) that returns an iterator.

**Example:**

```javascript
const iterableObject = {
  [Symbol.iterator]: function() {
    let step = 0;
    return {
      next: function() {
        step++;
        if (step === 1) {
          return { value: 'Hello', done: false };
        } else if (step === 2) {
          return { value: 'World', done: false };
        }
        return { value: undefined, done: true };
      }
    };
  }
};

const iterator = iterableObject[Symbol.iterator]();
console.log(iterator.next()); // { value: 'Hello', done: false }
console.log(iterator.next()); // { value: 'World', done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

#### `for-of` Loop

The `for-of` loop is a new loop introduced in ES6 that iterates over iterable objects (such as arrays, strings, maps, sets, and more). It provides a simpler and more readable way to iterate over all elements in a collection.

**Example with Array:**

```javascript
const array = ['a', 'b', 'c'];

for (const element of array) {
  console.log(element);
}
// Output:
// a
// b
// c
```

**Example with String:**

```javascript
const string = 'Hello';

for (const char of string) {
  console.log(char);
}
// Output:
// H
// e
// l
// l
// o
```

**Example with Map:**

```javascript
const map = new Map([
  ['key1', 'value1'],
  ['key2', 'value2']
]);

for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}
// Output:
// key1: value1
// key2: value2
```

**Example with Set:**

```javascript
const set = new Set(['a', 'b', 'c']);

for (const value of set) {
  console.log(value);
}
// Output:
// a
// b
// c
```

### Summary

- **Iterators**: Objects with a `next()` method that returns `{ value, done }` pairs, used to traverse collections.
- **Iterable Protocol**: Objects with a `Symbol.iterator` method that returns an iterator.
- **`for-of` Loop**: A loop that iterates over iterable objects, providing a convenient way to loop through arrays, strings, maps, sets, and more.

These features make iterating over collections more flexible and powerful, improving the readability and maintainability of your JavaScript code.

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

Modify the following function to return the number of arguments passed to it using the rest parameter syntax
```
export default function returnHowManyArguments() {

}
```
Example:
```
> returnHowManyArguments("Hello", "Holberton", 2020);
3
>
```
Execution:
```
bob@dylan:~$ cat 4-main.js
import returnHowManyArguments from './4-rest-parameter.js';

console.log(returnHowManyArguments("one"));
console.log(returnHowManyArguments("one", "two", 3, "4th"));
bob@dylan:~$
bob@dylan:~$ npm run dev 4-main.js 
1
4
bob@dylan:~$
```
</details>

<details>
<summary>

### 5. The wonders of spread syntax
`mandatory`

File: [5-spread-operator.js]()
</summary>

Using spread syntax, concatenate 2 arrays and each character of a string by modifying the function below. Your function body should be one line long.
```
export default function concatArrays(array1, array2, string) {
}
```
Execution:
```
bob@dylan:~$ cat 5-main.js
import concatArrays from './5-spread-operator.js';

console.log(concatArrays(['a', 'b'], ['c', 'd'], 'Hello'));

bob@dylan:~$
bob@dylan:~$ npm run dev 5-main.js 
[
  'a', 'b', 'c',
  'd', 'H', 'e',
  'l', 'l', 'o'
]
bob@dylan:~$
```
</details>

<details>
<summary>

### 6. Take advantage of template literals
`mandatory`

File: [6-string-interpolation.js]()
</summary>

Rewrite the return statement to use a template literal so you can the substitute the variables you’ve defined.
```
export default function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };

  return 'As of ' + year + ', it was the seventh-highest income county in the United States'
        / ', with a per capita personal income of ' + budget.income + '. As of 2015, San Francisco'
        / ' proper had a GDP of ' + budget.gdp + ', and a GDP per capita of ' + budget.capita + '.';
}
```
Execution:
```
bob@dylan:~$ cat 6-main.js
import getSanFranciscoDescription from './6-string-interpolation.js';

console.log(getSanFranciscoDescription());

bob@dylan:~$
bob@dylan:~$ npm run dev 6-main.js 
As of 2017, it was the seventh-highest income county in the United States, with a per capita personal income of $119,868. As of 2015, San Francisco proper had a GDP of $154.2 billion, and a GDP per capita of $178,479.
bob@dylan:~$
```
</details>

<details>
<summary>

### 7. Object property value shorthand syntax
`mandatory`

File: [7-getBudgetObject.js]()
</summary>

Notice how the keys and the variable names are the same?

Modify the following function’s `budget` object to simply use the keyname instead.
```
export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income: income,
    gdp: gdp,
    capita: capita,
  };

  return budget;
}
```
Execution:
```
bob@dylan:~$ cat 7-main.js
import getBudgetObject from './7-getBudgetObject.js';

console.log(getBudgetObject(400, 700, 900));

bob@dylan:~$
bob@dylan:~$ npm run dev 7-main.js 
{ income: 400, gdp: 700, capita: 900 }
bob@dylan:~$
```
</details>

<details>
<summary>

### 8. No need to create empty objects before adding in properties
`mandatory`

File: [8-getBudgetCurrentYear.js]()
</summary>

Rewrite the ``getBudgetForCurrentYear`` function to use ES6 computed property names on the `budget` object
```
function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {};

  budget[`income-${getCurrentYear()}`] = income;
  budget[`gdp-${getCurrentYear()}`] = gdp;
  budget[`capita-${getCurrentYear()}`] = capita;

  return budget;
}
```
Execution:
```
bob@dylan:~$ cat 8-main.js
import getBudgetForCurrentYear from './8-getBudgetCurrentYear.js';

console.log(getBudgetForCurrentYear(2100, 5200, 1090));

bob@dylan:~$
bob@dylan:~$ npm run dev 8-main.js 
{ 'income-2021': 2100, 'gdp-2021': 5200, 'capita-2021': 1090 }
bob@dylan:~$
```
</details>

<details>
<summary>

### 9. ES6 method properties
`mandatory`

File: [9-getFullBudget.js]()
</summary>

Rewrite `getFullBudgetObject` to use ES6 method properties in the `fullBudget` object
```
import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars: function (income) {
      return `$${income}`;
    },
    getIncomeInEuros: function (income) {
      return `${income} euros`;
    },
  };

  return fullBudget;
}
```
Execution:
```
bob@dylan:~$ cat 9-main.js
import getFullBudgetObject from './9-getFullBudget.js';

const fullBudget = getFullBudgetObject(20, 50, 10);

console.log(fullBudget.getIncomeInDollars(fullBudget.income));
console.log(fullBudget.getIncomeInEuros(fullBudget.income));

bob@dylan:~$
bob@dylan:~$ npm run dev 9-main.js 
$20
20 euros
bob@dylan:~$
```
</details>

<details>
<summary>

### 10. For...of Loops
`mandatory`

File: [10-loops.js]()
</summary>

Rewrite the function `appendToEachArrayValue` to use ES6’s `for...of` operator. And don’t forget that var is not ES6-friendly.
```
export default function appendToEachArrayValue(array, appendString) {
  for (var idx in array) {
    var value = array[idx];
    array[idx] = appendString + value;
  }

  return array;
}
```
Execution:
```
bob@dylan:~$ cat 10-main.js
import appendToEachArrayValue from './10-loops.js';

console.log(appendToEachArrayValue(['appended', 'fixed', 'displayed'], 'correctly-'));

bob@dylan:~$
bob@dylan:~$ npm run dev 10-main.js 
[ 'correctly-appended', 'correctly-fixed', 'correctly-displayed' ]
bob@dylan:~$
```
</details>

<details>
<summary>

### 11. Iterator
`mandatory`

File: [11-createEmployeesObject.js]()
</summary>

Write a function named `createEmployeesObject` that will receive two arguments:

- `departmentName` (String)
- `employees` (Array of Strings)
```
export default function createEmployeesObject(departmentName, employees) {

}
```
The function should return an object with the following format:
```
{
     $departmentName: [
          $employees,
     ],
}
```
Execution:
```
bob@dylan:~$ cat 11-main.js
import createEmployeesObject from './11-createEmployeesObject.js';

console.log(createEmployeesObject("Software", [ "Bob", "Sylvie" ]));

bob@dylan:~$
bob@dylan:~$ npm run dev 11-main.js 
{ Software: [ 'Bob', 'Sylvie' ] }
bob@dylan:~$
```
</details>

<details>
<summary>

### 12. Let's create a report object
`mandatory`

File: [12-createReportObject.js]()
</summary>

Write a function named `createReportObject` whose parameter, `employeesList`, is the return value of the previous function `createEmployeesObject`.
```
export default function createReportObject(employeesList) {

}
```
`createReportObject` should return an object containing the key `allEmployees` and a method property called `getNumberOfDepartments`.

`allEmployees` is a key that maps to an object containing the department name and a list of all the employees in that department. If you’re having trouble, use the spread syntax.

The method property receives `employeesList` and returns the number of departments. I would suggest suggest thinking back to the ES6 method property syntax.
```
{
  allEmployees: {
     engineering: [
          'John Doe',
          'Guillaume Salva',
     ],
  },
};
```
Execution:
```
bob@dylan:~$ cat 12-main.js
import createEmployeesObject from './11-createEmployeesObject.js';
import createReportObject from './12-createReportObject.js';

const employees = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createEmployeesObject('marketing', ['Sylvie'])
};      

const report = createReportObject(employees);
console.log(report.allEmployees);
console.log(report.getNumberOfDepartments(report.allEmployees));

bob@dylan:~$
bob@dylan:~$ npm run dev 12-main.js 
{ engineering: [ 'Bob', 'Jane' ], marketing: [ 'Sylvie' ] }
2
bob@dylan:~$
```
</details>

<details>
<summary>

### 13. Iterating through report objects
`#advanced`

File: [100-createIteratorObject.js]()
</summary>

Write a function named `createIteratorObject`, that will take into argument a report Object created with the previous function `createReportObject`.

This function will return an iterator to go through every employee in every department.
```
export default function createIteratorObject(report) {

}
```
Execution:
```
bob@dylan:~$ cat 100-main.js
import createIteratorObject from "./100-createIteratorObject.js";

import createEmployeesObject from './11-createEmployeesObject.js';
import createReportObject from './12-createReportObject.js';

const employees = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createEmployeesObject('marketing', ['Sylvie'])
};

const report = createReportObject(employees);

const reportWithIterator = createIteratorObject(report);

for (const item of reportWithIterator) {
    console.log(item);
}

bob@dylan:~$
bob@dylan:~$ npm run dev 100-main.js 
Bob
Jane
Sylvie
bob@dylan:~$
```
</details>

<details>
<summary>

### 14. Iterate through object
`#advanced`

File: [101-iterateThroughObject.js]()
</summary>

Finally, write a function named `iterateThroughObject`. The function’s parameter `reportWithIterator` is the return value from `createIteratorObject`.
```
 export default function iterateThroughObject(reportWithIterator) {

 }
``` 
It should return every employee name in a string, separated by `|`
```
{
  allEmployees: {
     engineering: [
          'John Doe',
          'Guillaume Salva',
     ],
  },
  ...
};
```
Should return `John Doe | Guillaume Salva`

Reminder - the functions will be imported by the test suite.

Full example:
```
> employees = {
      ...createEmployeesObject('engineering', engineering),
      ...createEmployeesObject('design', design),
    };
>
> const report = createReportObject(employees);
> const reportWithIterator = createIteratorObject(report);
> iterateThroughObject(reportWithIterator)
'John Doe | Guillaume Salva | Kanye East | Jay Li'
> 
```
Execution:
```
bob@dylan:~$ cat 101-main.js
import createEmployeesObject from "./11-createEmployeesObject.js";
import createReportObject from './12-createReportObject.js';
import createIteratorObject from './100-createIteratorObject.js';
import iterateThroughObject from './101-iterateThroughObject.js';


const employees = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createEmployeesObject('marketing', ['Sylvie'])
};

const report = createReportObject(employees);
const reportWithIterator = createIteratorObject(report);

console.log(iterateThroughObject(reportWithIterator));

bob@dylan:~$
bob@dylan:~$ npm run dev 101-main.js 
Bob | Jane | Sylvie
bob@dylan:~$
```
</details>

