import Head from "next/head";
import Accordion from "../components/accordion/Accordion";
import NavHeader from "../components/header/Header";
import YourLeagues from "../components/yourLeagues/YourLeagues";

export default function newLeague() {
  return (
    <div>
      <Head>
        <title>King of the Hill</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavHeader
          label={"overview"}
          picture={
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80"
          }
          subNavOne={"your leagues"}
          subNavTwo={"new league"}
          linkOne={"/yourleagues"}
          linkTwo={"/newleague"}
        />
        <Accordion
          title={"CGN-WEB-21-1"}
          content={<YourLeagues pick={"Dortmund"} opponent={"Bremen"} />}
        />
        <Accordion
          title={"HH-WEB-21-1"}
          content={<YourLeagues pick={"Dortmund"} opponent={"Bremen"} />}
        />
      </main>
    </div>
  );
}
