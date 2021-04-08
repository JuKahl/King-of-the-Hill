import Head from "next/head";
import React, { useEffect, useState } from "react";
import NavHeaderBack from "../components/header/HeaderBackButton";
import LoadingScreen from "../components/loadingScreen/loadingScreen";
import UserInfoBox from "../components/standing/UserInfoBox";
import { PickProps } from "../server/db";

export default function standing() {
  const [picks, setPicks] = useState<PickProps[]>(null);

  useEffect(() => {
    fetch("/api/picks")
      .then((response) => response.json())
      .then(setPicks);
  }, []);
  if (!picks) {
    return <LoadingScreen />;
  }
  console.log(picks);
  const standing = picks.map((game) => (
    <UserInfoBox
      key={game.id}
      picture={
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80"
      }
      username={game.clientId}
      pick={game.pickTeam}
      opponent={game.opponentTeam}
    />
  ));
  console.log(standing);

  return (
    <div>
      <Head>
        <title>King of the Hill</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavHeaderBack
          label={"league name *tba*"}
          picture={
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80"
          }
          subNavOne={"standing"}
          subNavTwo={"pick"}
          linkOne={"/standing"}
          linkTwo={"/pick"}
        />
        <div>{standing}</div>
      </main>
    </div>
  );
}
