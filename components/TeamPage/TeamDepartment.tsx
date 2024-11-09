import React from "react";
import TeamMember from "./TeamMember"; // Adjust path if necessary

// Define types if not imported from another file
type TeamMember = {
  name: string;
  position: string;
  email: string;
  instagram?: string;
};

type TeamSector = {
  sectorName: string;
  description: string;
  teamMembers: TeamMember[];
};
type TeamDepartmentProps = {
  teamSector: TeamSector;
};

const TeamDepartment: React.FC<TeamDepartmentProps> = ({ teamSector }) => {
  return (
    <div className="flex justify-center my-10 w-full">
      <div className="flex flex-col sm:flex-row w-4/6 gap-10 sm:gap-20">
        <div className="w-full sm:w-2/5 p-7 bg-purple-700 bg-opacity-70 rounded">
          <h2 className="text-sky-200 font-bold text-xl">
            {teamSector.sectorName}
          </h2>
          <p>{teamSector.description}</p>
        </div>
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full sm:w-3/6">
          {teamSector.teamMembers.map((member) => (
            <TeamMember
              key={member.name}
              name={member.name}
              position={member.position}
              email={member.email}
              instagram={member.instagram}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeamDepartment;
