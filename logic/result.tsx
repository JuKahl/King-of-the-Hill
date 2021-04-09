import { Match, pickLoss, pickWin } from "../utils/api";
import { PickProps } from "../server/db";
import { useEffect, useState } from "react";

export function result() {
  const [matches, setMatches] = useState<Match[]>(null);

  const [picks, setPicks] = useState<PickProps[]>(null);

  useEffect(() => {
    fetch("/api/bundesligaMatches")
      .then((response) => response.json())
      .then(setMatches);
    fetch("/api/picks")
      .then((response) => response.json())
      .then(setPicks);
  }, []);
  if (!matches || !picks) {
    return <div> Loading...</div>;
  }

  function findArrayElementById(array, id) {
    return array.find((element) => {
      return element.id === id;
    });
  }

  const result = picks.map((pick) => findArrayElementById(matches, pick.id));
  const length = picks.length;
  for (let i = 0; i < length; i++) {
    if (picks[i].nextRd == "yes")
      if (result[i].status == "FINISHED") {
        if (result[i].score.winner == picks[i].pick) {
          pickWin(picks[i]);
        } else {
          pickLoss(picks[i]);
        }
      }
  }
}
