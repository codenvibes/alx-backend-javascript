<h1 align="center"><b>0X05. NODEJS BASICS</b></h1>
<div align="center"><code>Back-end</code> <code>JavaScript</code> <code>ES6</code> <code>NodeJS</code> <code>ExpressJS</code></div>

<br><div align=""><img src="https://github.com/codenvibes/alx-backend-javascript/blob/master/0x05-Node_JS_basic/images/82692897e15d9f03256f.jpeg"></div>

<!-- <br>
<hr>
<h3><a href=>Notes</a></h3>
<hr> -->


<!--==================================================-->
<br>

## Resources
<details>
<summary><b><a href="https://intranet.alxswe.com/rltoken/hROgW3QO9jqFnFP-Nzwh8A">Node JS getting started</a></b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href="https://intranet.alxswe.com/rltoken/Wt69QV2xygB4GEqob26AjQ">Process API doc</a></b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href="https://intranet.alxswe.com/rltoken/IS4y9rRCblX71W_oeXpymw">Child process</a></b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href="https://intranet.alxswe.com/rltoken/XsfrhG9NRLuuaTpVZlZv_g">Express getting started</a></b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href="https://intranet.alxswe.com/rltoken/EBGDj1FwLrK_y4kgxp8hfg">Mocha documentation</a></b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href="https://intranet.alxswe.com/rltoken/vnDSbLsicMDdxcf5YUSXIg">Nodemon documentation</a></b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>



<!--==================================================-->
<br>

## Learning Objectives
<details>
<summary><b><a href=" "> </a>run javascript using NodeJS</b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>use NodeJS modules</b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>use specific Node JS module to read files</b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>use <code>process</code> to access command line arguments and the environment</b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>create a small HTTP server using Node JS</b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>create a small HTTP server using Express JS</b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>create advanced routes with Express JS</b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>use ES6 with Node JS with Babel-node</b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>use Nodemon to develop faster</b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>



<br>

<!--==================================================-->
<br>

## Requirements
- Allowed editors: <code>vi</code>, <code>vim</code>, <code>emacs</code>, <code>Visual Studio Code</code>
- All your files will be interpreted/compiled on Ubuntu 18.04 LTS using <code>node</code> (version 12.x.x)
- All your files should end with a new line
- A <code>README.md</code> file, at the root of the folder of the project, is mandatory
- Your code should use the <code>js</code> extension
- Your code will be tested using <code>Jest</code> and the command <code>npm run test</code>
- Your code will be verified against lint using ESLint
- Your code needs to pass all the tests and lint. You can verify the entire project running <code>npm run full-test</code>
- All of your functions/classes must be exported by using this format: <code>module.exports = myFunction;</code>

<!--==================================================-->
<br>

## Provided files
<h3><code>database.csv</code></h3>

<pre><code>firstname,lastname,age,field
Johann,Kerbrou,30,CS
Guillaume,Salou,30,SWE
Arielle,Salou,20,CS
Jonathan,Benou,30,CS
Emmanuel,Turlou,40,CS
Guillaume,Plessous,35,CS
Joseph,Crisou,34,SWE
Paul,Schneider,60,SWE
Tommy,Schoul,32,SWE
Katie,Shirou,21,CS
</code></pre>

<h3><code>package.json</code></h3>

<details>
<summary>Click to show/hide file contents</summary>
<pre><code>
{
  "name": "node_js_basics",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "test": "./node_modules/mocha/bin/mocha --require babel-register --exit",
    "dev": "nodemon --exec babel-node --presets babel-preset-env ./server.js ./database.csv"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "chai-http": "^4.3.0",
    "express": "^4.17.1"
  },
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-env": "^1.7.0",
    "nodemon": "^2.0.2",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "chai": "^4.2.0",
    "mocha": "^6.2.2",
    "request": "^2.88.0",
    "sinon": "^7.5.0"
  }
}
</code>
</pre>
</details>

<h3><code>babel.config.js</code></h3>

<details>
<summary>Click to show/hide file contents</summary>
<pre><code>
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
</code>
</pre>
</details>

<h3><code>.eslintrc.js</code></h3>

<details>
<summary>Click to show/hide file contents</summary>
<pre><code>
module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'max-classes-per-file': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides:[
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};
</code>
</pre>
</details>

<h3>and…</h3>

Don’t forget to run <code>$ npm install</code> when you have the <code>package.json</code>


<!--==================================================-->
<br>

## Tasks
<details>
<summary>

### 0. Executing basic javascript with Node JS
`mandatory`

File: [0-console.js]()
</summary>

<p>In the file <code>0-console.js</code>, create a function named <code>displayMessage</code> that prints in <code>STDOUT</code> the string argument.</p>

<pre><code>bob@dylan:~$ cat 0-main.js
const displayMessage = require('./0-console');

displayMessage("Hello NodeJS!");

bob@dylan:~$ node 0-main.js
Hello NodeJS!
bob@dylan:~$
</code></pre>


</details>

<details>
<summary>

### 1. Using Process stdin
`mandatory`

File: [1-stdin.js]()
</summary>

<p>Create a program named <code>1-stdin.js</code> that will be executed through command line:</p>

<ul>
<li>It should display the message <code>Welcome to Holberton School, what is your name?</code> (followed by a new line)</li>
<li>The user should be able to input their name on a new line</li>
<li>The program should display <code>Your name is: INPUT</code></li>
<li>When the user ends the program, it should display <code>This important software is now closing</code> (followed by a new line)</li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>Your code will be tested through a child process, make sure you have everything you need for that</li>
</ul>

<pre><code>bob@dylan:~$ node 1-stdin.js 
Welcome to Holberton School, what is your name?
Bob
Your name is: Bob
bob@dylan:~$ 
bob@dylan:~$ echo "John" | node 1-stdin.js 
Welcome to Holberton School, what is your name?
Your name is: John
This important software is now closing
bob@dylan:~$ 
</code></pre>


</details>

<details>
<summary>

### 2. Reading a file synchronously with Node JS
`mandatory`

File: [2-read_file.js]()
</summary>

<p>Using the database <code>database.csv</code> (provided in project description), create a function <code>countStudents</code> in the file <code>2-read_file.js</code></p>

<ul>
<li>Create a function named <code>countStudents</code>. It should accept a path in argument</li>
<li>The script should attempt to read the database file synchronously</li>
<li>If the database is not available, it should throw an error with the text <code>Cannot load the database</code></li>
<li>If the database is available, it should log the following message to the console <code>Number of students: NUMBER_OF_STUDENTS</code></li>
<li>It should log the number of students in each field, and the list with the following format: <code>Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES</code></li>
<li>CSV file can contain empty lines (at the end) - and they are not a valid student!</li>
</ul>

<pre><code>bob@dylan:~$ cat 2-main_0.js
const countStudents = require('./2-read_file');

countStudents("nope.csv");

bob@dylan:~$ node 2-main_0.js
2-read_file.js:9
    throw new Error('Cannot load the database');
    ^

Error: Cannot load the database
...
bob@dylan:~$
bob@dylan:~$ cat 2-main_1.js
const countStudents = require('./2-read_file');

countStudents("database.csv");

bob@dylan:~$ node 2-main_1.js
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
bob@dylan:~$ 
</code></pre>


</details>

<details>
<summary>

### 3. Reading a file asynchronously with Node JS
`mandatory`

File: [ 3-read_file_async.js]()
</summary>

<p>Using the database <code>database.csv</code> (provided in project description), create a function <code>countStudents</code> in the file <code>3-read_file_async.js</code></p>

<ul>
<li>Create a function named <code>countStudents</code>. It should accept a path in argument (same as in <code>2-read_file.js</code>)</li>
<li>The script should attempt to read the database file asynchronously</li>
<li>The function should return a Promise</li>
<li>If the database is not available, it should throw an error with the text <code>Cannot load the database</code></li>
<li>If the database is available, it should log the following message to the console <code>Number of students: NUMBER_OF_STUDENTS</code></li>
<li>It should log the number of students in each field, and the list with the following format: <code>Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES</code></li>
<li>CSV file can contain empty lines (at the end) - and they are not a valid student!</li>
</ul>

<pre><code>bob@dylan:~$ cat 3-main_0.js
const countStudents = require('./3-read_file_async');

countStudents("nope.csv")
    .then(() =&gt; {
        console.log("Done!");
    })
        .catch((error) =&gt; {
        console.log(error);
    });

bob@dylan:~$ node 3-main_0.js
Error: Cannot load the database
...
bob@dylan:~$
bob@dylan:~$ cat 3-main_1.js
const countStudents = require('./3-read_file_async');

countStudents("database.csv")
    .then(() =&gt; {
        console.log("Done!");
    })
        .catch((error) =&gt; {
        console.log(error);
    });
console.log("After!");

bob@dylan:~$ node 3-main_1.js
After!
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
Done!
bob@dylan:~$ 
</code></pre>

<p><strong>Tips:</strong></p>

<ul>
<li>Using asynchronous callbacks is the preferred way to write code in Node to avoid blocking threads</li>
</ul>


</details>

<details>
<summary>

### 4. Create a small HTTP server using Node's HTTP module
`mandatory`

File: [4-http.js]()
</summary>

<p>In a file named <code>4-http.js</code>, create a small HTTP server using the <code>http</code> module:</p>

<ul>
<li>It should be assigned to the variable <code>app</code> and this one must be exported </li>
<li>HTTP server should listen on port 1245</li>
<li>Displays <code>Hello Holberton School!</code> in the page body for any endpoint as plain text</li>
</ul>

<p>In terminal 1:</p>

<pre><code>bob@dylan:~$ node 4-http.js
...
</code></pre>

<p>In terminal 2:</p>

<pre><code>bob@dylan:~$ curl localhost:1245 &amp;&amp; echo ""
Hello Holberton School!
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/any_endpoint &amp;&amp; echo ""
Hello Holberton School!
bob@dylan:~$ 
</code></pre>


</details>

<details>
<summary>

### 5. Create a more complex HTTP server using Node's HTTP module
`mandatory`

File: [5-http.js]()
</summary>

<p>In a file named <code>5-http.js</code>, create a small HTTP server using the <code>http</code> module:</p>

<ul>
<li>It should be assigned to the variable app and this one must be exported</li>
<li>HTTP server should listen on port 1245</li>
<li>It should return plain text</li>
<li>When the URL path is <code>/</code>, it should display <code>Hello Holberton School!</code> in the page body</li>
<li>When the URL path is <code>/students</code>, it should display <code>This is the list of our students</code> followed by the same content as the file <code>3-read_file_async.js</code> (with and without the database) - the name of the database must be passed as argument of the file</li>
<li>CSV file can contain empty lines (at the end) - and they are not a valid student!</li>
</ul>

<p>Terminal 1:</p>

<pre><code>bob@dylan:~$ node 5-http.js database.csv
...
</code></pre>

<p>In terminal 2:</p>

<pre><code>bob@dylan:~$ curl localhost:1245 &amp;&amp; echo ""
Hello Holberton School!
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/students &amp;&amp; echo ""
This is the list of our students
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
bob@dylan:~$ 
</code></pre>


</details>

<details>
<summary>

### 6. Create a small HTTP server using Express
`mandatory`

File: [6-http_express.js]()
</summary>

<p>Install Express and in a file named <code>6-http_express.js</code>, create a small HTTP server using Express module:</p>

<ul>
<li>It should be assigned to the variable <code>app</code> and this one must be exported </li>
<li>HTTP server should listen on port 1245</li>
<li>Displays <code>Hello Holberton School!</code> in the page body for the endpoint <code>/</code></li>
</ul>

<p>In terminal 1:</p>

<pre><code>bob@dylan:~$ node 6-http_express.js
...
</code></pre>

<p>In terminal 2:</p>

<pre><code>bob@dylan:~$ curl localhost:1245 &amp;&amp; echo ""
Hello Holberton School!
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/any_endpoint &amp;&amp; echo ""
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
&lt;meta charset="utf-8"&gt;
&lt;title&gt;Error&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;pre&gt;Cannot GET /lskdlskd&lt;/pre&gt;
&lt;/body&gt;
&lt;/html&gt; 
bob@dylan:~$ 
</code></pre>


</details>

<details>
<summary>

### 7. Create a more complex HTTP server using Express
`mandatory`

File: [7-http_express.js]()
</summary>

<p>In a file named <code>7-http_express.js</code>, recreate the small HTTP server using <code>Express</code>:</p>

<ul>
<li>It should be assigned to the variable app and this one must be exported</li>
<li>HTTP server should listen on port 1245</li>
<li>It should return plain text</li>
<li>When the URL path is <code>/</code>, it should display <code>Hello Holberton School!</code> in the page body</li>
<li>When the URL path is <code>/students</code>, it should display <code>This is the list of our students</code> followed by the same content as the file <code>3-read_file_async.js</code> (with and without the database) - the name of the database must be passed as argument of the file</li>
<li>CSV file can contain empty lines (at the end) - and they are not a valid student!</li>
</ul>

<p>Terminal 1:</p>

<pre><code>bob@dylan:~$ node 7-http_express.js database.csv
...
</code></pre>

<p>In terminal 2:</p>

<pre><code>bob@dylan:~$ curl localhost:1245 &amp;&amp; echo ""
Hello Holberton School!
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/students &amp;&amp; echo ""
This is the list of our students
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
bob@dylan:~$ 
</code></pre>


</details>

<details>
<summary>

### 8. Organize a complex HTTP server using Express
`mandatory`

File: [full_server/utils.js](), [full_server/controllers/AppController.js](), [full_server/controllers/StudentsController.js](), [full_server/routes/index.js](), [full_server/server.js]()
</summary>

<p>Obviously writing every part of a server within a single file is not sustainable. Let’s create a full server in a directory named <code>full_server</code>.</p>

<p>Since you have used ES6 and Babel in the past projects, let’s use <code>babel-node</code> to allow to use ES6 functions like <code>import</code> or <code>export</code>.</p>

### 8.1 Organize the structure of the server
<ul>
<li>Create 2 directories within:

<ul>
<li><code>controllers</code></li>
<li><code>routes</code></li>
</ul></li>
<li>Create a file <code>full_server/utils.js</code>, in the file create a function named <code>readDatabase</code> that accepts a file path as argument:

<ul>
<li>It should read the database asynchronously</li>
<li>It should return a promise</li>
<li>When the file is not accessible, it should reject the promise with the error</li>
<li>When the file can be read, it should return an object of arrays of the firstname of students per fields</li>
</ul></li>
</ul>

### 8.2 Write the App controller
<p>Inside the file <code>full_server/controllers/AppController.js</code>:</p>

<ul>
<li>Create a class named <code>AppController</code>. Add a static method named <code>getHomepage</code></li>
<li>The method accepts <code>request</code> and <code>response</code> as argument. It returns a 200 status and the message <code>Hello Holberton School!</code></li>
</ul>

### 8.3 Write the Students controller
<p>Inside the file <code>full_server/controllers/StudentsController.js</code>, create a class named <code>StudentsController</code>. Add two static methods:</p>

<p>The first one is <code>getAllStudents</code>:</p>

<ul>
<li>The method accepts <code>request</code> and <code>response</code> as argument</li>
<li>It should return a status 200</li>
<li>It calls the function <code>readDatabase</code> from the <code>utils</code> file, and display in the page:

<ul>
<li>First line: <code>This is the list of our students</code></li>
<li>And for each field (order by alphabetic order case insensitive), a line that displays the number of students in the field, and the list of first names (ordered by appearance in the database file) with the following format: <code>Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES</code></li>
</ul></li>
<li>If the database is not available, it should return a status 500 and the error message <code>Cannot load the database</code></li>
</ul>

<p>The second one is <code>getAllStudentsByMajor</code>:</p>

<ul>
<li>The method accepts <code>request</code> and <code>response</code> as argument</li>
<li>It should return a status 200</li>
<li>It uses a parameter that the user can pass to the browser <code>major</code>. The <code>major</code> can only be <code>CS</code> or <code>SWE</code>. If the user is passing another parameter, the server should return a 500 and the error <code>Major parameter must be CS or SWE</code></li>
<li>It calls the function <code>readDatabase</code> from the <code>utils</code> file, and display in the page the list of first names  for the students (ordered by appearance in the database file) in the specified field <code>List: LIST_OF_FIRSTNAMES_IN_THE_FIELD</code></li>
<li>If the database is not available, it should return a status 500 and the error message <code>Cannot load the database</code></li>
</ul>

### 8.4 Write the routes
<p>Inside the file <code>full_server/routes/index.js</code>:</p>

<ul>
<li>Link the route <code>/</code> to the <code>AppController</code></li>
<li>Link the route <code>/students</code>  and <code>/students/:major</code>to the <code>StudentsController</code></li>
</ul>

### 8.5 Write the server reusing everything you created
<p>Inside the file named <code>full_server/server.js</code>, create a small Express server:</p>

<ul>
<li>It should use the routes defined in <code>full_server/routes/index.js</code></li>
<li>It should use the port <code>1245</code></li>
</ul>

### 8.6 Update `package.json` (if you are running it from outside the folder `full_server`)
<p>If you are starting node from outside of the folder <code>full_server</code>, you will have to update the command <code>dev</code> by: <code>nodemon --exec babel-node --presets babel-preset-env ./full_server/server.js ./database.csv</code></p>

<p><strong>Warning:</strong></p>

<ul>
<li>Don’t forget to export your express app at the end of <code>server.js</code> (<code>export default app;</code>)</li>
<li>The database filename is passed as argument of the <code>server.js</code> BUT, for testing purpose, you should retrieve this filename at the execution (when <code>getAllStudents</code> or <code>getAllStudentsByMajor</code>  are called for example)</li>
</ul>

<p>In terminal 1:</p>

<pre><code>bob@dylan:~$ npm run dev
...
</code></pre>

<p>In terminal 2:</p>

<pre><code>bob@dylan:~$ curl localhost:1245 &amp;&amp; echo ""
Hello Holberton School!
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/students &amp;&amp; echo ""
This is the list of our students
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/students/SWE &amp;&amp; echo ""
List: Guillaume, Joseph, Paul, Tommy
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/students/French -vvv &amp;&amp; echo ""
*   Trying 127.0.0.1...
* TCP_NODELAY set
* Connected to localhost (127.0.0.1) port 1245 (#0)
&gt; GET /students/SWES HTTP/1.1
&gt; Host: localhost:1245
&gt; User-Agent: curl/7.58.0
&gt; Accept: */*
&gt;
&lt; HTTP/1.1 500 Internal Server Error
&lt; X-Powered-By: Express
&lt; Date: Mon, 06 Jul 2020 03:29:00 GMT
&lt; Connection: keep-alive
&lt; Content-Length: 33
&lt;
* Connection #0 to host localhost left intact
Major parameter must be CS or SWE
bob@dylan:~$ 
</code></pre>

<p>If you want to add test to validate your integration, you will need to add this file: <code>.babelrc</code>
</p>

<p></p>


</details>

