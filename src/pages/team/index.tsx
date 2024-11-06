import Link from "next/link";
import Head from "next/head";
import "../../../app/globals.css";
import Navbar from "@/components/Navbar";
import TeamDepartment from "@/components/TeamPage/TeamDepartment";

type TeamMember = {
  name: string;
  position: string;
  email: string;
  instagram: string;
};

type Sector = {
  sectorName: string;
  description: string;
  teamMembers: TeamMember[];
};
const sectors: Sector[] = [
  {
    sectorName: "Lead Organizer",
    description: "Organizes and manages all aspects Fraserhacks as a whole",
    teamMembers: [
      {
        name: "Arya Holmukhe",
        position: "Lead Organizer",
        email: "738572@pdsb.net",
        instagram: "Arya1.exe",
      },
    ],
  },
  {
    sectorName: "Tech",
    description: "Responsible for technical aspects of the project. ",
    teamMembers: [
      { name: "Edward Wang", position: "Director", email: "738572@pdsb.net" },
      { name: "Sohum Padhye", position: "Member", email: "795804@pdsb.net" },
      { name: "Aditya Rajesh", position: "Member", email: "815369@pdsb.net" },
      { name: "Darsh Gupta", position: "Member", email: "1023835@pdsb.net" },
      { name: "Jason Chou", position: "Member", email: "778130@pdsb.net" },
    ],
  },
  {
    sectorName: "Marketing",
    description: "Handles the marketing and outreach aspects of the project.",
    teamMembers: [
      {
        name: "Tharaka Thurairasa",
        position: "Director",
        email: "734859@pdsb.net",
      },
      { name: "Mei Ka Pow", position: "Member", email: "893100@pdsb.net" },
      {
        name: "Amrita Rajaram",
        position: "Member",
        email: "782630@pdsb.net",
      },
      {
        name: "Tarek Chanouha",
        position: "Member",
        email: "980858@pdsb.net",
      },
    ],
  },
  {
    sectorName: "Outreach + Finance",
    description: "Oversees outreach and financial planning.",
    teamMembers: [
      {
        name: "Maitreyee Gangal",
        position: "Director",
        email: "1012833@pdsb.net",
      },
      { name: "Johnson Yu", position: "Member", email: "867570@pdsb.net" },
      { name: "Prerana Sil", position: "Member", email: "975794@pdsb.net" },
      { name: "Irene Wang", position: "Member", email: "899545@pdsb.net" },
      { name: "Darren Yip", position: "Member", email: "789147@pdsb.net" },
      { name: "Jason Chou", position: "Member", email: "778130@pdsb.net" }, // Also in Tech
    ],
  },
  {
    sectorName: "Logistics",
    description: "Coordinates logistics and event planning.",
    teamMembers: [
      { name: "Claire Wang", position: "Director", email: "813338@pdsb.net" },
      { name: "Brian Zhao", position: "Member", email: "778247@pdsb.net" },
      {
        name: "Aaradhana Vijaykrishnan",
        position: "Member",
        email: "815369@pdsb.net",
      },
      {
        name: "Danny Kenneth",
        position: "Member",
        email: "1021722@pdsb.net",
      },
      { name: "Grace Zhang", position: "Member", email: "872984@pdsb.net" },
      { name: "Arnav Kute", position: "Member", email: "1018061@pdsb.net" },
    ],
  },
];

const TeamPage = () => {
  return (
    <>
      <Head>
        <title>Our Team</title>
        <meta name="description" content="Meet our team members" />
      </Head>
      <Navbar />
      <main
        className={`min-h-screen flex flex-col items-center justify-start p-7 space-y-12 bg-black`}
      >
        <div id="team" className="mt-20">
          {sectors.map((sector) => (
            <TeamDepartment key={sector.sectorName} sector={sector} />
          ))}
        </div>
      </main>
    </>
  );
};

export default TeamPage;
