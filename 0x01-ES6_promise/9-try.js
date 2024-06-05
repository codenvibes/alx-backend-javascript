/**
 * AUTH: bugnvibes
 * Executes a math function and captures its result or any error that occurs.
 * @param {Function} mathFunction - The math function to execute.
 * @returns {Array} An array containing the result of the math function or an error message,
   along with a "Guardrail was processed" message.
 */

function guardrail(mathFunction) {
  // Array to store results or error messages
  const queue = [];

  try {
    // Execute the math function and store its result
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    // Catch any errors and push error message to the queue
    queue.push(`Error: ${error.message}`);
  } finally {
    // Push "Guardrail was processed" message to the queue regardless of success or failure
    queue.push('Guardrail was processed');
  }

  // Return the populated queue
  return queue;
}

export default guardrail;
