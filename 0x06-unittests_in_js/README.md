<h1 align="center"><b>0X06. UNITTESTS IN JS</b></h1>
<div align="center"><code>UnitTests</code> <code>Back-end</code> <code>JavaScript</code> <code>ES6</code> <code>NodeJS</code> <code>ExpressJS</code> <code>Mocha</code></div>

<br>
<div align="center"><img alt="" src="https://github.com/codenvibes/alx-backend-javascript/blob/master/0x06-unittests_in_js/images/90f79a666e174e6c4ffc.jpeg"></div>

<!-- <br>
<hr>
<h3><a href=>Notes</a></h3>
<hr> -->


<!--==================================================-->
<br>

## Resources
<details>
<summary><b><a href="https://mochajs.org/">Mocha documentation</a></b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href="https://www.chaijs.com/api/">Chai</a></b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href="https://intranet.alxswe.com/rltoken/5KsW5N9sG3sGWW3z-jkNwA">Sinon</a></b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href="https://expressjs.com/en/guide/routing.html">Express</a></b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href="https://intranet.alxswe.com/rltoken/FcJfzr2jUJSj8Xp3z9L1wg">Request</a></b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href="https://intranet.alxswe.com/rltoken/HwB8gViDosy8znk7H9i4Pw">How to Test NodeJS Apps using Mocha, Chai and SinonJS</a></b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>



<!--==================================================-->
<br>

## Learning Objectives
<details>
<summary><b><a href=" "> </a>How to use Mocha to write a test suite</b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>How to use different assertion libraries (Node or Chai)</b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>How to present long test suites</b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>When and how to use spies</b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>When and how to use stubs</b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>What are hooks and when to use them</b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>Unit testing with Async functions</b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>How to write integration tests with a small node server</b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>



<br>

<!--==================================================-->
<br>

## Requirements
- All of your code will be executed on Ubuntu 18.04 using Node 12.x.x
- Allowed editors: <code>vi</code>, <code>vim</code>, <code>emacs</code>, <code>Visual Studio Code</code>
- All your files should end with a new line
- A <code>README.md</code> file, at the root of the folder of the project, is mandatory
- Your code should use the <code>js</code> extension
- When running every test with <code>npm run test *.test.js</code>, everything should pass correctly without any warning or error

<!--==================================================-->
<br>

## Tasks
<details>
<summary>

### 0. Basic test with Mocha and Node assertion library
`mandatory`

File: [package.json](), [0-calcul.js](), [0-calcul.test.js]()
</summary>

<p><strong>Install Mocha using npm:</strong></p>

<ul>
<li>Set up a scripts in your <code>package.json</code> to quickly run Mocha using <code>npm test</code></li>
<li>You have to use <code>assert</code></li>
</ul>

<p><strong>Create a new file named <code>0-calcul.js</code>:</strong></p>

<ul>
<li>Create a function named <code>calculateNumber</code>. It should accepts two arguments (number) <code>a</code> and <code>b</code></li>
<li>The function should round <code>a</code> and <code>b</code> and return the sum of it </li>
</ul>

<p><strong>Test cases</strong></p>

<ul>
<li>Create a file <code>0-calcul.test.js</code> that contains test cases of this function</li>
<li>You can assume <code>a</code> and <code>b</code> are always number</li>
<li>Tests should be around the “rounded” part</li>
</ul>

<p><strong>Tips:</strong></p>

<ul>
<li>For the sake of the example, this test suite is slightly extreme and probably not needed</li>
<li>However, remember that your tests should not only verify what a function is supposed to do, but also the edge cases</li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>You have to use <code>assert</code></li>
<li>You should be able to run the test suite using <code>npm test 0-calcul.test.js</code></li>
<li>Every test should pass without any warning</li>
</ul>

<p><strong>Expected output</strong></p>

<pre><code>&gt; const calculateNumber = require("./0-calcul.js");
&gt; calculateNumber(1, 3)
4
&gt; calculateNumber(1, 3.7)
5
&gt; calculateNumber(1.2, 3.7)
5
&gt; calculateNumber(1.5, 3.7)
6
&gt; 
</code></pre>

<p><strong>Run test</strong></p>

<pre><code>bob@dylan:~$ npm test 0-calcul.test.js 

&gt; task_0@1.0.0 test /root
&gt; ./node_modules/mocha/bin/mocha "0-calcul.test.js"

  calculateNumber
    ✓ ...
    ✓ ...
    ✓ ...
    ...

  130 passing (35ms)
bob@dylan:~$ 
</code></pre>


</details>

<details>
<summary>

### 1. Combining descriptions
`mandatory`

File: [1-calcul.js](), [1-calcul.test.js]()
</summary>

<p><strong>Create a new file named <code>1-calcul.js</code>:</strong></p>

<ul>
<li>Upgrade the function you created in the previous task (<code>0-calcul.js</code>)</li>
<li>Add a new argument named <code>type</code> at first argument of the function. <code>type</code> can be <code>SUM</code>, <code>SUBTRACT</code>, or <code>DIVIDE</code> (string)</li>
<li>When type is <code>SUM</code>, round the two numbers, and add <code>a</code> and <code>b</code></li>
<li>When type is <code>SUBTRACT</code>, round the two numbers, and subtract <code>b</code> from <code>a</code></li>
<li>When type is <code>DIVIDE</code>, round the two numbers, and divide <code>a</code> with <code>b</code> - if the rounded value of <code>b</code> is equal to 0, return the string <code>Error</code></li>
</ul>

<p><strong>Test cases</strong></p>

<ul>
<li>Create a file <code>1-calcul.test.js</code> that contains test cases of this function</li>
<li>You can assume <code>a</code> and <code>b</code> are always number</li>
<li>Usage of <code>describe</code> will help you to organize your test cases</li>
</ul>

<p><strong>Tips:</strong></p>

<ul>
<li>For the sake of the example, this test suite is slightly extreme and probably not needed</li>
<li>However, remember that your tests should not only verify what a function is supposed to do, but also the edge cases</li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>You have to use <code>assert</code></li>
<li>You should be able to run the test suite using <code>npm test 1-calcul.test.js</code></li>
<li>Every test should pass without any warning</li>
</ul>

<p><strong>Expected output</strong></p>

<pre><code>&gt; const calculateNumber = require("./1-calcul.js");
&gt; calculateNumber('SUM', 1.4, 4.5)
6
&gt; calculateNumber('SUBTRACT', 1.4, 4.5)
-4
&gt; calculateNumber('DIVIDE', 1.4, 4.5)
0.2
&gt; calculateNumber('DIVIDE', 1.4, 0)
'Error'
</code></pre>


</details>

<details>
<summary>

### 2. Basic test using Chai assertion library
`mandatory`

File: [2-calcul_chai.js](), [2-calcul_chai.test.js]()
</summary>

<p>While using Node assert library is completely valid, a lot of developers prefer to have a behavior driven development style. This type being easier to read and therefore to maintain.</p>

<p><strong>Let’s install Chai with npm:</strong></p>

<ul>
<li>Copy the file <code>1-calcul.js</code> in a new file <code>2-calcul_chai.js</code> (same content, same behavior)</li>
<li>Copy the file <code>1-calcul.test.js</code> in a new file <code>2-calcul_chai.test.js</code></li>
<li>Rewrite the test suite, using <code>expect</code> from <code>Chai</code></li>
</ul>

<p><strong>Tips:</strong></p>

<ul>
<li>Remember that test coverage is always difficult to maintain. Using an easier style for your tests will help you</li>
<li>The easier your tests are to read and understand, the more other engineers will be able to fix them when they are modifying your code</li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>You should be able to run the test suite using <code>npm test 2-calcul_chai.test.js</code></li>
<li>Every test should pass without any warning</li>
</ul>


</details>

<details>
<summary>

### 3. Spies
`mandatory`

File: [utils.js](), [3-payment.js](), [3-payment.test.js]()
</summary>

<p>Spies are a useful wrapper that will execute the wrapped function, and log useful information (e.g. was it called, with what arguments). Sinon is a library allowing you to create spies.</p>

<p><strong>Let’s install Sinon with npm:</strong></p>

<ul>
<li>Create a new file named <code>utils.js</code></li>
<li>Create a new module named <code>Utils</code></li>
<li>Create a property named <code>calculateNumber</code> and paste your previous code in the function</li>
<li>Export the Utils module</li>
</ul>

<p><strong>Create a new file named <code>3-payment.js</code>:</strong></p>

<ul>
<li>Create a new function named <code>sendPaymentRequestToApi</code>. The function takes two argument <code>totalAmount</code>, and <code>totalShipping</code></li>
<li>The function calls the <code>Utils.calculateNumber</code> function with type <code>SUM</code>, <code>totalAmount</code> as <code>a</code>, <code>totalShipping</code> as <code>b</code> and display in the console the message <code>The total is: &lt;result of the sum&gt;</code></li>
</ul>

<p><strong>Create a new file named <code>3-payment.test.js</code> and add a new suite named <code>sendPaymentRequestToApi</code>:</strong></p>

<ul>
<li>By using <code>sinon.spy</code>, make sure the math used for <code>sendPaymentRequestToApi(100, 20)</code> is the same as <code>Utils.calculateNumber('SUM', 100, 20)</code> (validate the usage of the <code>Utils</code> function)</li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>You should be able to run the test suite using <code>npm test 3-payment.test.js</code></li>
<li>Every test should pass without any warning</li>
<li>You should use a <code>spy</code> to complete this exercise</li>
</ul>

<p><strong>Tips:</strong></p>

<ul>
<li>Remember to always restore a spy after using it in a test, it will prevent you from having weird behaviors</li>
<li>Spies are really useful and allow you to focus only on what your code is doing and not the downstream APIs or functions</li>
<li>Remember that integration test is different from unit test. Your unit test should test your code, not the code of a different function</li>
</ul>


</details>

<details>
<summary>

### 4. Stubs
`mandatory`

File: [4-payment.js](), [4-payment.test.js]()
</summary>

<p>Stubs are similar to spies. Except that you can provide a different implementation of the function you are wrapping. Sinon can be used as well for stubs.</p>

<p><strong>Create a new file <code>4-payment.js</code>, and copy the code from <code>3-payment.js</code></strong> (same content, same behavior)</p>

<p><strong>Create a new file <code>4-payment.test.js</code>, and copy the code from <code>3-payment.test.js</code></strong></p>

<ul>
<li>Imagine that calling the function <code>Utils.calculateNumber</code> is actually calling an API or a very expensive method. You don’t necessarily want to do that on every test run</li>
<li>Stub the function <code>Utils.calculateNumber</code> to always return the same number <code>10</code></li>
<li>Verify that the stub is being called with <code>type = SUM</code>, <code>a = 100</code>, and <code>b = 20</code></li>
<li>Add a spy to verify that <code>console.log</code> is logging the correct message <code>The total is: 10</code></li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>You should be able to run the test suite using <code>npm test 4-payment.test.js</code></li>
<li>Every test should pass without any warning</li>
<li>You should use a <code>stub</code> to complete this exercise</li>
<li>Do not forget to restore the spy and the stub</li>
</ul>

<p><strong>Tips:</strong></p>

<ul>
<li>Using stubs allows you to greatly speed up your test. When executing thousands of tests, saving a few seconds is important</li>
<li>Using stubs allows you to control specific edge case (e.g a function throwing an error or returning a specific result like a number or a timestamp)</li>
</ul>


</details>

<details>
<summary>

### 5. Hooks
`mandatory`

File: [5-payment.js](), [5-payment.test.js]()
</summary>

<p>Hooks are useful functions that can be called before execute one or all tests in a suite</p>

<p><strong>Copy the code from <code>4-payment.js</code> into a new file <code>5-payment.js</code>:</strong> (same content/same behavior)</p>

<p><strong>Create a new file <code>5-payment.test.js</code>:</strong></p>

<ul>
<li>Inside the same <code>describe</code>, create 2 tests:

<ul>
<li>The first test will call <code>sendPaymentRequestToAPI</code> with 100, and 20:

<ul>
<li>Verify that the console is logging the string <code>The total is: 120</code></li>
<li>Verify that the console is only called once</li>
</ul></li>
<li>The second test will call <code>sendPaymentRequestToAPI</code> with 10, and 10:

<ul>
<li>Verify that the console is logging the string <code>The total is: 20</code></li>
<li>Verify that the console is only called once</li>
</ul></li>
</ul></li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>You should be able to run the test suite using <code>npm test 5-payment.test.js</code></li>
<li>Every test should pass without any warning</li>
<li>You should use only one <code>spy</code> to complete this exercise</li>
<li>You should use a <code>beforeEach</code> and a <code>afterEach</code> hooks to complete this exercise</li>
</ul>


</details>

<details>
<summary>

### 6. Async tests with done
`mandatory`

File: [6-payment_token.js](), [6-payment_token.test.js]()
</summary>

<p>Look into how to support async testing, for example when waiting for the answer of an API or from a Promise</p>

<p><strong>Create a new file <code>6-payment_token.js</code>:</strong></p>

<ul>
<li>Create a new function named <code>getPaymentTokenFromAPI</code></li>
<li>The function will take an argument called <code>success</code> (boolean)</li>
<li>When <code>success</code> is true, it should return a resolved promise with the object <code>{data: 'Successful response from the API' }</code></li>
<li>Otherwise, the function is doing nothing.</li>
</ul>

<p><strong>Create a new file <code>6-payment_token.test.js</code> and write a test suite named <code>getPaymentTokenFromAPI</code></strong></p>

<ul>
<li>How to test the result of <code>getPaymentTokenFromAPI(true)</code>?</li>
</ul>

<p><strong>Tips:</strong></p>

<ul>
<li>You should be extremely careful when working with async testing. Without calling <code>done</code> properly, your test could be always passing even if what you are actually testing is never executed</li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>You should be able to run the test suite using <code>npm test 6-payment_token.test.js</code></li>
<li>Every test should pass without any warning</li>
<li>You should use the <code>done</code> callback to execute this test</li>
</ul>


</details>

<details>
<summary>

### 7. Skip
`mandatory`

File: [7-skip.test.js]()
</summary>

<p>When you have a long list of tests, and you can’t figure out why a test is breaking, avoid commenting out a test, or removing it. <strong>Skip</strong> it instead, and file a ticket to come back to it as soon as possible</p>

<p>You will be using this file, conveniently named <code>7-skip.test.js</code></p>

<pre><code>const { expect } = require('chai');

describe('Testing numbers', () =&gt; {
  it('1 is equal to 1', () =&gt; {
    expect(1 === 1).to.be.true;
  });

  it('2 is equal to 2', () =&gt; {
    expect(2 === 2).to.be.true;
  });

  it('1 is equal to 3', () =&gt; {
    expect(1 === 3).to.be.true;
  });

  it('3 is equal to 3', () =&gt; {
    expect(3 === 3).to.be.true;
  });

  it('4 is equal to 4', () =&gt; {
    expect(4 === 4).to.be.true;
  });

  it('5 is equal to 5', () =&gt; {
    expect(5 === 5).to.be.true;
  });

  it('6 is equal to 6', () =&gt; {
    expect(6 === 6).to.be.true;
  });

  it('7 is equal to 7', () =&gt; {
    expect(7 === 7).to.be.true;
  });
});
</code></pre>

<p><strong>Using the file <code>7-skip.test.js</code>:</strong></p>

<ul>
<li>Make the test suite pass <strong>without</strong> fixing or removing the failing test</li>
<li><code>it</code> description <strong>must stay</strong> the same</li>
</ul>

<p><strong>Tips:</strong></p>

<ul>
<li>Skipping is also very helpful when you only want to execute the test in a particular case (specific environment, or when an API is not behaving correctly)</li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>You should be able to run the test suite using <code>npm test 7-skip.test.js</code></li>
<li>Every test should pass without any warning</li>
</ul>


</details>

<details>
<summary>

### 8. Basic Integration testing
`mandatory`

File: [8-api/package.json](), [8-api/api.js](), [8-api/api.test.js]()
</summary>

<p>In a folder <code>8-api</code> located at the root of the project directory, copy this <code>package.json</code> over.</p>

<pre><code>{
  "name": "8-api",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "./node_modules/mocha/bin/mocha"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "chai": "^4.2.0",
    "mocha": "^6.2.2",
    "request": "^2.88.0",
    "sinon": "^7.5.0"
  }
}
</code></pre>

<p><strong>Create a new file <code>api.js</code>:</strong></p>

<ul>
<li>By using <code>express</code>, create an instance of <code>express</code> called <code>app</code></li>
<li>Listen to port 7865 and log <code>API available on localhost port 7865</code> to the browser console when the <code>express</code> server is started</li>
<li>For the route <code>GET /</code>, return the message <code>Welcome to the payment system</code></li>
</ul>

<p><strong>Create a new file <code>api.test.js</code>:</strong></p>

<ul>
<li>Create one suite for the index page: 

<ul>
<li>Correct status code?</li>
<li>Correct result?</li>
<li>Other?</li>
</ul></li>
</ul>

<p><strong>Server</strong></p>

<p>Terminal 1</p>

<pre><code>bob@dylan:~/8-api$  node api.js
API available on localhost port 7865
</code></pre>

<p>Terminal 2</p>

<pre><code>bob@dylan:~/8-api$  curl http://localhost:7865 ; echo ""
Welcome to the payment system
bob@dylan:~/8-api$  
bob@dylan:~/8-api$ npm test api.test.js

&gt; 8-api@1.0.0 test /root/8-api
&gt; ./node_modules/mocha/bin/mocha "api.test.js"



  Index page
    ✓ ...
    ✓ ...
    ...

  23 passing (256ms)

bob@dylan:~/8-api$
</code></pre>

<p><strong>Tips:</strong></p>

<ul>
<li>Since this is an integration test, you will need to have your node server running for the test to pass</li>
<li>You can use the module <code>request</code></li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>You should be able to run the test suite using <code>npm test api.test.js</code></li>
<li>Every test should pass without any warnings</li>
</ul>


</details>

<details>
<summary>

### 9. Regex integration testing
`mandatory`

File: [9-api/api.js](), [9-api/api.test.js](), [9-api/package.json]()
</summary>

<p>In a folder <code>9-api</code>, reusing the previous project in <code>8-api</code> (<code>package.json</code>, <code>api.js</code> and <code>api.test.js</code>)</p>

<p><strong>Modify the file <code>api.js</code>:</strong></p>

<ul>
<li>Add a new endpoint: <code>GET /cart/:id</code></li>
<li><code>:id</code> must be only a number (validation must be in the route definition)</li>
<li>When access, the endpoint should return <code>Payment methods for cart :id</code></li>
</ul>

<p><strong>Modify the file <code>api.test.js</code>:</strong></p>

<ul>
<li>Add a new test suite for the cart page:

<ul>
<li>Correct status code when <code>:id</code> is a number?</li>
<li>Correct status code when <code>:id</code> is NOT a number (=&gt; 404)?</li>
<li>etc.</li>
</ul></li>
</ul>

<p><strong>Server</strong></p>

<p>Terminal 1</p>

<pre><code>bob@dylan:~$ node api.js
API available on localhost port 7865
</code></pre>

<p>Terminal 2</p>

<pre><code>bob@dylan:~$ curl http://localhost:7865/cart/12 ; echo ""
Payment methods for cart 12
bob@dylan:~$ 
bob@dylan:~$ curl http://localhost:7865/cart/hello -v
*   Trying 127.0.0.1...
* TCP_NODELAY set
* Connected to localhost (127.0.0.1) port 7865 (#0)
&gt; GET /cart/hello HTTP/1.1
&gt; Host: localhost:7865
&gt; User-Agent: curl/7.58.0
&gt; Accept: */*
&gt; 
&lt; HTTP/1.1 404 Not Found
&lt; X-Powered-By: Express
&lt; Content-Security-Policy: default-src 'none'
&lt; X-Content-Type-Options: nosniff
&lt; Content-Type: text/html; charset=utf-8
&lt; Content-Length: 149
&lt; Date: Wed, 15 Jul 2020 08:33:44 GMT
&lt; Connection: keep-alive
&lt; 
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
&lt;meta charset="utf-8"&gt;
&lt;title&gt;Error&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;pre&gt;Cannot GET /cart/hello&lt;/pre&gt;
&lt;/body&gt;
&lt;/html&gt;
* Connection #0 to host localhost left intact
bob@dylan:~$ 
</code></pre>

<p><strong>Tips:</strong></p>

<ul>
<li>You will need to add a small regex in your path to support the usecase</li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>You should be able to run the test suite using <code>npm test api.test.js</code></li>
<li>Every test should pass without any warning</li>
</ul>


</details>

<details>
<summary>

### 10. Deep equality & Post integration testing
`mandatory`

File: [10-api/api.js](), [10-api/api.test.js](), [10-api/package.json]()
</summary>

<p>In a folder <code>10-api</code>, reusing the previous project in <code>9-api</code> (<code>package.json</code>, <code>api.js</code> and <code>api.test.js</code>)</p>

<p><strong>Modify the file <code>api.js</code>:</strong></p>

<ul>
<li>Add an endpoint <code>GET /available_payments</code> that returns an object with the following structure:</li>
</ul>

<pre><code>{
  payment_methods: {
    credit_cards: true,
    paypal: false
  }
}
</code></pre>

<ul>
<li>Add an endpoint <code>POST /login</code> that returns the message <code>Welcome :username</code> where <code>:username</code> is the value of the body variable <code>userName</code>.</li>
</ul>

<p><strong>Modify the file <code>api.test.js</code>:</strong></p>

<ul>
<li>Add a test suite for the <code>/login</code> endpoint</li>
<li>Add a test suite for the <code>/available_payments</code> endpoint</li>
</ul>

<p><strong>Server</strong></p>

<p>Terminal 1</p>

<pre><code>bob@dylan:~$ node api.js
API available on localhost port 7865
</code></pre>

<p>Terminal 2</p>

<pre><code>bob@dylan:~$ curl http://localhost:7865/available_payments ; echo ""
{"payment_methods":{"credit_cards":true,"paypal":false}}
bob@dylan:~$ 
bob@dylan:~$ curl -XPOST http://localhost:7865/login -d '{ "userName": "Betty" }' -H 'Content-Type: application/json' ; echo ""
Welcome Betty
bob@dylan:~$ 
</code></pre>

<p><strong>Tips:</strong></p>

<ul>
<li>Look at deep equality to compare objects</li>
</ul>

<p><strong>Requirements:</strong></p>

<ul>
<li>You should be able to run the test suite using <code>npm test api.test.js</code></li>
<li>Every test should pass without any warning</li>
<li>Your server should not display any error</li>
</ul>


</details>

