import Link from "next/link";
import Head from "next/head";
import TeamPageGrid from "@/components/TeamPage/TeamPageGrid";
import "../../../app/globals.css";
import Navbar from "@/components/Navbar";
const TeamPage = () => {
  return (
    <>
      <Head>
        <title>Our Team</title>
        <meta name="description" content="Meet our team members" />
      </Head>
      <Navbar />
      <main
        className={` min-h-screen flex flex-col items-center justify-start p-7 space-y-12 bg-black `}
      >
        <div id="home" className="mt-20"></div>
      </main>
    </>
  );
};

export default TeamPage;
