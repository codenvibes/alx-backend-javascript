/*
* AUTH: bugsnvibes
* TASK: Rewrite the standard function to use ES6’s arrow syntax of the function add (it will be an anonymous function after)
*/

export default function getNeighborhoodsList () {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square']

  this.addNeighborhood = (newNeighborhood) => {
    this.sanFranciscoNeighborhoods.push(newNeighborhood)
    return this.sanFranciscoNeighborhoods
  }
}
