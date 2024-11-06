import React from "react";
import TeamMember from "./TeamMember"; // Adjust path if necessary

// Define types if not imported from another file
type TeamMemberType = {
  name: string;
  position: string;
  email: string;
};

type Sector = {
  sectorName: string;
  description: string;
  teamMembers: TeamMemberType[];
};

type TeamDepartmentProps = {
  sector: Sector;
};

const TeamDepartment: React.FC<TeamDepartmentProps> = ({ sector }) => {
  return (
    <div className="flex flex-row justify-center my-10 w-full">
      <div className="flex flex-row w-5/6 gap-20">
        <div className="w-2/5 p-7 bg-purple-700 bg-opacity-70 rounded">
          <h2 className="text-sky-200 font-bold text-xl">
            {sector.sectorName}
          </h2>
          <p>{sector.description}</p>
        </div>
        <ul className="grid grid-cols-2 gap-4 w-3/4">
          {sector.teamMembers.map((member) => (
            <TeamMember
              key={member.name}
              name={member.name}
              position={member.position}
              email={member.email}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeamDepartment;
