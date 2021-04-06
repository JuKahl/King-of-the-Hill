import Head from "next/head";
import React, { useEffect, useState } from "react";
import MatchBox from "../components/matchBox/MatchBox";
import { Match, addPick } from "../utils/api";
import NavHeader from "../components/header/Header";

export default function Pick() {
  const [matches, setMatches] = useState<Match[]>(null);

  useEffect(() => {
    fetch("/api/bundesligaMatches")
      .then((response) => response.json())
      .then(setMatches);
  }, []);
  if (!matches) {
    return <div> Loading...</div>;
  }

  function handleClick(value) {
    const data = {
      pick: value.team,
      id: value.matchId,
      clientId: value.clientId,
      matchday: value.matchday,
    };
    addPick(data);
  }

  const matchList = matches.map((game) => (
    <MatchBox
      key={game.id}
      homeTeam={game.homeTeam}
      awayTeam={game.awayTeam}
      handlePick={handleClick}
      matchId={game.id}
      matchday={game.matchday}
    />
  ));

  return (
    <div>
      <Head>
        <title>King of the Hill</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavHeader
          label={"league name *tba*"}
          picture={
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80"
          }
          subNavOne={"standing"}
          subNavTwo={"pick"}
        />
        <div>{matchList}</div>
      </main>
    </div>
  );
}
