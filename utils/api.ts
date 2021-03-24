import dotenv from "dotenv";

dotenv.config();

const auth = process.env.X_Auth_Token;

export type Matches = {
  matches: Match[];
};

export type SingleMatch = {
  match: Match;
};

export type Match = {
  id: number;
  matchday: number;
  score: { winner: "HOME_TEAM" | "AWAY_TEAM" | "DRAW" };
  homeTeam: { name: string };
  awayTeam: { name: string };
};

export async function getBundesligaMatches() {
  const response = await fetch(
    "http://api.football-data.org/v2/competitions/BL1/matches?matchday=26",
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
    "http://api.football-data.org/v2/matches/303228",
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
