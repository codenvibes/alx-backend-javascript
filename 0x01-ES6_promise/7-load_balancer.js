/**
 * AUTH: bugsnvibes
 * Returns a promise that resolves or rejects as soon as one of the provided promises resolves or
   rejects.
 *
 * @param {Promise} chinaDownload - A promise representing a download operation from China.
 * @param {Promise} USDownload - A promise representing a download operation from the US.
 * @returns {Promise} A promise that resolves or rejects with the value or reason of the first
   settled promise.
 */

export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
}
