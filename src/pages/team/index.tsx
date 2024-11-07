import Link from "next/link";
import Head from "next/head";
import "../../../app/globals.css";
import Navbar from "@/components/Navbar";
import TeamDepartment from "@/components/TeamPage/TeamDepartment";

type TeamMember = {
  name: string;
  position: string;
  email: string;
  instagram?: string; // Optional field for Instagram handle
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
        email: "1003200@pdsb.net",
        instagram: "Arya1.exe",
      },
    ],
  },
  {
    sectorName: "Tech",
    description: "Responsible for technical aspects of the project.",
    teamMembers: [
      {
        name: "Edward Wang",
        position: "Director",
        email: "738572@pdsb.net",
        instagram: "Edward.w_7",
      },
      {
        name: "Sohum Padhye",
        position: "Member",
        email: "795804@pdsb.net",
        instagram: "sohum.padhye",
      },
      {
        name: "Jason Chou",
        position: "Member",
        email: "778130@pdsb.net",
        instagram: "jasonchou0105",
      },
      {
        name: "Darsh Gupta",
        position: "Member",
        email: "1023835@pdsb.net",
        instagram: "darshg321",
      },
      {
        name: "Aditya Rajesh",
        position: "Member",
        email: "815369@pdsb.net",
        instagram: "",
      },
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
        instagram: "",
      },
      {
        name: "Mei Ka Pow",
        position: "Member",
        email: "893100@pdsb.net",
        instagram: "meishija",
      },
      {
        name: "Amrita Rajaram",
        position: "Member",
        email: "782630@pdsb.net",
        instagram: "",
      },
      {
        name: "Tarek Chanouha",
        position: "Member",
        email: "980858@pdsb.net",
        instagram: "",
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
        instagram: "_maitsss",
      },
      {
        name: "Johnson Yu",
        position: "Member",
        email: "867570@pdsb.net",
        instagram: "toastcarrier",
      },
      {
        name: "Prerana Sil",
        position: "Member",
        email: "975794@pdsb.net",
        instagram: "",
      },
      {
        name: "Irene Wang",
        position: "Member",
        email: "899545@pdsb.net",
        instagram: "",
      },
      {
        name: "Darren Yip",
        position: "Member",
        email: "789147@pdsb.net",
        instagram: "darren.y1",
      },
      {
        name: "Jason Chou",
        position: "Member",
        email: "778130@pdsb.net",
        instagram: "jasonchou0105",
      }, // Also in Tech
    ],
  },
  {
    sectorName: "Logistics",
    description: "Coordinates logistics and event planning.",
    teamMembers: [
      {
        name: "Claire Wang",
        position: "Director",
        email: "813338@pdsb.net",
        instagram: "claire_chair.w",
      },
      {
        name: "Brian Zhao",
        position: "Member",
        email: "778247@pdsb.net",
        instagram: "Brian Zhao",
      },
      {
        name: "Aaradhana Vijaykrishnan",
        position: "Member",
        email: "815369@pdsb.net",
        instagram: "",
      },
      {
        name: "Danny Kenneth",
        position: "Member",
        email: "1021722@pdsb.net",
        instagram: "danny.kenneth_777",
      },
      {
        name: "Grace Zhang",
        position: "Member",
        email: "872984@pdsb.net",
        instagram: "",
      },
      {
        name: "Arnav Kute",
        position: "Member",
        email: "1018061@pdsb.net",
        instagram: "",
      },
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
            <TeamDepartment key={sector.sectorName} teamSector={sector} />
          ))}
        </div>
      </main>
    </>
  );
};

export default TeamPage;
