let cache = { "/data": null, "/formatted-data": null, "/brands": null };

async function fetch_data(endpoint) {
  if (cache[endpoint] !== null) {
    return cache[endpoint];
  }
  const response = await fetch("http://localhost:5004" + endpoint);
  const data = await response.json();
  cache[endpoint] = data;
  return data;
}

export default fetch_data;
