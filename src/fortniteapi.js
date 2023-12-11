// Get the username from the request parameters
const username = request.params.username;

// Get the API key from the secrets object
const apiKey = secrets.API_KEY;

// Check if the username and API key are valid
if (!username || !apiKey) {
  throw Error("Username and API key are required");
}

// Define the API URL and headers
const url = `https://fortnite-api.com/v1/stats/br/v2?name=${username}`;
const headers = {
  "x-api-key": apiKey
};

// Make the HTTP GET request to the API
const response = await Functions.makeHttpRequest({
  url: url,
  method: "GET",
  headers: headers
});

// Check if the response is successful
if (response.status !== 200) {
  throw Error(`API request failed: ${response.statusText}`);
}

// Parse the response data as JSON
const data = JSON.parse(response.data);

// Check if the data contains the account and stats objects
if (!data.data || !data.data.account || !data.data.stats) {
  throw Error("Invalid data format");
}

// Extract the desired attributes from the data
const account = data.data.account;
const stats = data.data.stats;

const id = account.id;
const name = account.name;
const image = account.image;
const score = stats.all.overall.score;
const kills = stats.all.overall.kills;
const kd = stats.all.overall.kd;
const winRate = stats.all.overall.winRate;

// Return the attributes as an object
return {
  id: id,
  name: name,
  image: image,
  score: score,
  kills: kills,
  kd: kd,
  winRate: winRate
};
