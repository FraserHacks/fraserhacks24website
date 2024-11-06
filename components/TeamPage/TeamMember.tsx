// TeamMember.tsx
import React from "react";
import Image from "next/image";

// Define props type for TeamMember
type TeamMemberProps = {
  name: string;
  position: string;
  email: string;
};

const TeamMember: React.FC<TeamMemberProps> = ({ name, position, email }) => {
  return (
    <li className="flex flex-row justify-between border-2 p-3 border-purple-700 border-opacity-50 rounded h-35 w-70 transform hover:border-opacity-100 hover:scale-110 transition duration-200">
      <div className="">
        <div className="text-lg">{name}</div>
        <div className="text-yellow-500">{position}</div>
      </div>
      <div className="">
        <a href="https://www.instagram.com/fraserhacks2024" target="_blank">
          <Image
            src="/socials/Email-Social-Icon.svg"
            alt="Gmail Link"
            width={20}
            height={20}
            id="gmail"
          />
        </a>
      </div>
    </li>
  );
};

export default TeamMember;
