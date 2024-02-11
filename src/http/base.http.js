async function executeGet(relativeUrl, params) {
  try {
    const absoluteUrl = getFullUrl(relativeUrl);

    const response = await fetch(absoluteUrl);

    const responseJson = await response.json();
    
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}

async function executePost(relativeUrl, data) {
  try {
    const options = {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    };

    const absoluteUrl = getFullUrl(relativeUrl, options);

    const response = await fetch(absoluteUrl, options);

    const responseJson = await response.json();

    return responseJson;
  } catch (error) {
    console.error(error);
  }
}

// BEGIN PRIVATE FUNCTIONS
const API_BASE_URL = 'http://localhost:3000';

function getFullUrl(relativePath){
  return `${API_BASE_URL}/${relativePath}`;
}
// END PRIVATE FUNCTIONS

module.exports = {
  executeGet,
  executePost
};