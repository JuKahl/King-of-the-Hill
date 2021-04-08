const auth = process.env.X_AUTH_TOKEN;

export type Matches = {
  matches: Match[];
};

export type SingleMatch = {
  match: Match;
};

export type Match = {
  id: number;
  matchday: number;
  score: { winner: string };
  homeTeam: { name: string };
  awayTeam: { name: string };
};

export async function getBundesligaMatches() {
  const response = await fetch(
    "http://api.football-data.org/v2/competitions/BL1/matches?matchday=27",
    {
      headers: {
        "X-Auth-Token": auth,
      },
    }
  );
  const result = (await response.json()) as Matches;
  const bundesligaMatches = result.matches;

  return bundesligaMatches;
}

export async function getBundesligaMatch() {
  const response = await fetch(
    "http://api.football-data.org/v2/matches/303230",
    {
      headers: {
        "X-Auth-Token": auth,
      },
    }
  );
  const result = (await response.json()) as SingleMatch;
  const bundesligaMatch = result.match;

  return bundesligaMatch;
}

export async function addPick(data) {
  const response = await fetch("/api/picks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    return response;
  } else {
    alert("HTTP-Error: " + response.status);
  }
}

export async function pickWin(data) {
  const response = await fetch("/api/pickWin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    return response;
  } else {
    alert("HTTP-Error: " + response.status);
  }
}

export async function pickLoss(data) {
  const response = await fetch("/api/pickLoss", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    return response;
  } else {
    alert("HTTP-Error: " + response.status);
  }
}
