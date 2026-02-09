const API_URL = "https://localhost:8000/v1";

async function httpGetPlanets() {
  const response = await fetch(`${API_URL}/planets`);
  const result = await response.json();
  return result;
}

// Load launches, sort by flight number, and return as JSON.
async function httpGetLaunches() {
  const response = await fetch(`${API_URL}/launches`);
  const fetchedLaunches = await response.json();
  return fetchedLaunches.sort((a, b) => {
    return a.flightNumber - b.flightNumber;
  });
}

// Submit given launch data to launch system.
async function httpSubmitLaunch(launch) {
  try {
    const response = await fetch(`${API_URL}/launches`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(launch),
    });
    return response;
  } catch (error) {
    return {
      ok: false,
    };
  }
}

// Delete launch with given ID.
async function httpAbortLaunch(id) {
  try {
    const response = await fetch(`${API_URL}/launches/${id}`, {
      method: "delete",
    });
    return response;
  } catch (error) {
    console.log(error);
    return {
      ok: false,
    };
  }
}

async function httpLogin() {
  try {
    const response = await fetch(`${API_URL}/auth/google`);
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
  httpLogin,
};
